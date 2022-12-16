import React, { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");

  // useEffect(() => {
  //   // execute action when component mounts. e.g. API calls

  //   console.log("Component Mounted");
  //   // dEPENDANCY array - used to execute an action everytime the state dependency changes.
  //   // Empty array -> runs when only when the component mounts
  //   // returned function Executed when component Unmounts.
  //   return () => {
  //     console.log("component Unmouted");
  //   };
  // }, []);

  // useEffect(() => {
  //   // Component is mounted
  //   console.log("Component Mounted");
   

  //   return () => {
  //     console.log("Component Umounted");
  //   };
  // });

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};

export default Text;
