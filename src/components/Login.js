import React from "react";

export const Login = () => {
  const onSubmitClick = async (e, email, password) => {
    e.preventDefault();
    console.log("Login" + email);
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  const onHandleChange = (e) => {
    console.log("handling change" + e);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={onSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
