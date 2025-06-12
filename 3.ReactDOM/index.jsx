import React from "react";
import {createRoot} from "react-dom/client";

const paragraph = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#root");
createRoot(root).render(paragraph);