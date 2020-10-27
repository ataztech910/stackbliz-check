// Import stylesheets
import "./style.css";
import { test } from "./app.js";

// Write Javascript code!
console.log(test);
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1 class="test">JS Starter</h1>${test}`;
