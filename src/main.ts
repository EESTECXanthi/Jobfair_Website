import "./app.postcss";
import App from "./App.svelte";
import Parallax from "parallax-js";

const app = new App({
  target: document.getElementById("app"),
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

export default app;
