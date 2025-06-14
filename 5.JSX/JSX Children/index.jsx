import {createRoot} from "react-dom/client";

const paymentMethods = 
    <select className="payment-methods">
        <option>Card</option>
        <option>Cash on delivery</option>
    </select>;

createRoot(document.querySelector("#root")).render(paymentMethods);