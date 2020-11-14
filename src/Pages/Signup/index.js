import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [sex, setSex] = useState("male");

  /* This useEffect hook will execute the function,
    on the very first mount of the component and
    on every subsequent update of any of the
    state variable */
  useEffect(() => {
    alert("Hello world1");
  });

  /* This useEffect hook will execute the function(1st argument),
    on the very first mount of the component and
    never after becuase it's dependency
    array(2nd argument) is empty */
  useEffect(() => {
    alert("Hello world2");
  }, []);

  /* This useEffect hook will execute the function(1st argument),
    on the very first mount of the component and
    on every subsequent update of the specified state
    variable in the dependency array(2nd argument) */
  useEffect(() => {
    alert("Hello world3");
  }, [email]);

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex content-center justify-center">
      <form
        // onSubmit={(e)=>handleOnFormSubmit(e)}
        className="py-16 px-8 bg-gray-200 rounded"
      >
        <h2 className="text-gray-700">User Signup</h2>
        <Input
          placeholder="First Name"
          type="text"
          value={firstName}
          onValueChange={(text) => setFirstName(text)}
        />
        <br />
        <Input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onValueChange={(text) => setLastName(text)}
        />
        <br />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onValueChange={(text) => setEmail(text)}
        />
        <br />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onValueChange={(text) => setPassword(text)}
        />
        <br />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={cPassword}
          onValueChange={(text) => setCPassword(text)}
        />
        <br />
        <div className="ml-6">
          Sex:
          <span className="ml-6">
            <input
              checked={sex === "male" ? true : false}
              onChange={() => setSex("male")}
              type="radio"
              name="sex"
            />
            Male
          </span>
          <span className="ml-6">
            <input
              checked={sex === "female" ? true : false}
              onChange={() => setSex("female")}
              type="radio"
              name="sex"
            />
            Female
          </span>
        </div>
        <br />
        {loading === true ? (
          <button className="p-2 bg-blue-400 rounded float-right">
            loading...
          </button>
        ) : (
          <button
            className="p-2 bg-blue-400 rounded float-right"
            onClick={handleOnFormSubmit}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Signup;

// terniary operator
// sex === "female" ? true : false

// terniary operator
// sex === "female" ? <input1 /> : <input2 />

// singelton operator
// sex === "male" && <input3 />
