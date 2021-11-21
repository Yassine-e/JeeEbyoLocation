import React from "react";
import "./ModalLogin.css";
function ModalLogin() {
  return (
    <form>
      <div className="form-group hopaa">
        <h4 className="titleee">Authentifaction</h4>
        <br />
        <label htmlFor="exampleInputEmail1 dark"> username</label>
        <input
          type="email"
          className="form-control "
          placeholder="Enter email"
        />{" "}
        <br />
      </div>
      <div className="form-group hopaa">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control hopaa"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <a href="/">
          <p>Forget password?</p>
        </a>
      </div>
      <div className="tobuttonn">
        <button type="submit" className="btttn mybaytn">
          Login
        </button>
      </div>
    </form>
  );
}

export default ModalLogin;
