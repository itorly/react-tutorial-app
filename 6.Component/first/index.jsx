import {createRoot} from "react-dom/client";

// TODO: create Navbar component
function Navbar() {
    return (
        <div className="navbar">
            <h1>SuperM</h1>
            <p>Online shopping simplified</p>
        </div>
    );
}

createRoot(document.querySelector("#root")).render(<Navbar></Navbar>);