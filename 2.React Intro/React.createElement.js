/**
 * Complete the createDivElement function so that it creates a React Element that 
 * represents a div with the text Hello World!
 */
import React from "react";

function createDivElement() {
    return React.createElement("div", {}, "Hello World")
}

// Sample usage (do not modify)
console.log(createDivElement());