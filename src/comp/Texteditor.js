import React, { useState } from "react";

export default function Texteditor() {
  return (
    <div>
      <Text button="showless">
        The pattern describing where each split should occur. Can be undefined,
        a string, or an object with a Symbol.split method — the typical example
        being a regular expression. Omitting separator or passing undefined
        causes split() to return an array with the calling string as a single
        element. All values that are not undefined or objects with a @@split
        method are coerced to strings.
      </Text>
      <Text>
        The pattern describing where each split should occur. Can be undefined,
        a string, or an object with a Symbol.split method — the typical example
        being a regular expression. Omitting separator or passing undefined
        causes split() to return an array with the calling string as a single
        element. All values that are not undefined or objects with a @@split
        method are coerced to strings.
      </Text>
    </div>
  );
}
function Text({ children, button }) {
  const [isexpand, setisexpand] = useState(false);
  children = isexpand
    ? children
    : children.split(" ").slice(0, 10).join(" ") + "...";
  button = isexpand ? button : "showmore";
  return (
    <div>
      <span>{children}</span>
      <span>
        <button onClick={() => setisexpand((v) => !v)}>{button}</button>
      </span>
    </div>
  );
}
