import { useState } from "react";
import Button from "../components/button";
import Hello from "../components/hello";

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Hello name="Sekitoleko" />
      <h1>{number}</h1>
      <Button btnColor="#4caf50" onClick={() => setNumber(number + 1)}>
        +
      </Button>
      <Button btnColor="red" onClick={() => setNumber(number - 1)}>
        -
      </Button>
    </div>
  );
}

export default Counter;
