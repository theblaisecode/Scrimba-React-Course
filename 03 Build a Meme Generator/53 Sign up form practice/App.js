import React from "react";

export default function App() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords do not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [account, setAccount] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: false,
  });

  console.log(account);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setAccount((prevAccount) => {
      return {
        ...prevAccount,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (account.password === "" && account.confirmPassword === "") {
      console.log("Please enter password");
    } else if (account.password !== account.confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("Successfully signed up");
    }

    !account.okayToEmail
      ? console.log("")
      : console.log("Thanks for signing up for out newsletter!");

    console.log(account);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={account.value}
          onChange={handleChange}
          className="form--input"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={account.password}
          onChange={handleChange}
          className="form--input"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={account.confirmPassword}
          onChange={handleChange}
          className="form--input"
        />

        <div className="form--marketing">
          <input
            type="checkbox"
            id="okayToEmail"
            name="okayToEmail"
            onChange={handleChange}
            checked={account.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
