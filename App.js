import React from "react";
import ReactDOM  from "react-dom/client";

const title = <h1 id="heading">Namaste React</h1>;

const HeadingComponent = () => (
  <div id="heading">
    {title}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);

