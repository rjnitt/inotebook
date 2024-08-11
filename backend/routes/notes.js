const express = require("express");
const router = express.Router();
const notes = require("../pojo/Notes");
const fetchuser = require("../middleware/fetchuser");

// define the home page route
router.post("/create", fetchuser, async (req, res) => {
  console.log("Create notes called");

  const dbNotes = await notes.create({
    user: req.user.id,
    name: req.body.name,
    tag: req.body.tag,
    description: req.body.description,
  });

  return res.json({ dbNotes });
});

// Update Notes using auth token
router.put("/update/:id", fetchuser, async (req, res) => {
  console.log("Create notes called");

  const dbNotes = await notes.findById(req.params.id);
  console.log("req.user.id" + req.user.id);
  console.log("dbNotes.user" + dbNotes.user);

  if (dbNotes.user.toString() !== req.user.id) {
    return res.status(401).send({ error: "this user not allowed" });
  }

  const { name, tag, description } = req.body;
  const newNote = {};
  if (name) newNote.name = name;
  if (tag) newNote.tag = tag;
  if (description) newNote.description = description;

  const result = await notes.findByIdAndUpdate(req.params.id, {
    $set: newNote,
  });

  return res.json({ result });
});

// Delete Notes using auth token
router.delete("/delete/:id", fetchuser, async (req, res) => {
  console.log("delete notes called");

  try {
    const dbNotes = await notes.findById(req.params.id);
    if (!dbNotes) {
      return res.status(404).send({ error: "not found" });
    }
    if (dbNotes.user.toString() !== req.user.id) {
      return res.status(401).send({ error: "this user not allowed" });
    }
    const result = await notes.findByIdAndDelete(req.params.id);
    return res.status(200).json({ result, message: "Note has been deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "error while deleting notes" });
  }
});

// GET ALL FOR USER
router.get("/getall", fetchuser, async (req, res) => {
  console.log("get all for notes");
  try {
    const result = await notes.find({ user: req.user.id });
    console.log("get all for notes logs:" + result);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "error while get all user" });
  }
});

module.exports = router;
