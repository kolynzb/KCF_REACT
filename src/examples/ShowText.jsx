import React, { useState } from "react";
import Button from "../components/button";
import Text from "../components/Text";

const ShowText = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Button btnColor="red" onClick={() => setShowText(!showText)}>
        ShowText
      </Button>

      {/* conditional Rendering */}

      {showText && <Text />}
    </div>
  );
};

export default ShowText;
