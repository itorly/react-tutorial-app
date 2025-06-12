import React from "react";
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
const react_dom_root = createRoot(root);

//  React DOM
const h1 = React.createElement("h1", {"id": "React DOM"}, "Hello World by using React DOM");

//  JSX
const p = <p id="JSX and React DOM">Hello World by using JSX and React DOM</p>;

// In React, each render() call replaces the entire content of the root container.

// Using a div wrapper
// react_dom_root.render(
//     <div>
//         {h1}
//         {p}
//     </div>
// );

// Using React Fragment
// react_dom_root.render(
//     <>
//         {h1}
//         {p}
//     </>
// );

// React.createElement
react_dom_root.render(
    React.createElement("div", null,
        React.createElement("h1", {"id": "React DOM"}, "createElement: Hello World by using React DOM"),
        React.createElement("p", {"id": "JSX and React DOM"}, "createElement: Hello World by using JSX and React DOM")
    )
);