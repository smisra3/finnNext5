import React from "react";
import ReactDOM from "react-dom";
import Footer from "../../app/components/atoms/Anchor";

const props = {
  children: "This is another Component. It's separate from Header and has it's own bunlde.js",
  className: "sc-6754em-0 bjPRcB center-align"
};

ReactDOM.render(<Footer {...props} />, document.getElementById("footer"));
