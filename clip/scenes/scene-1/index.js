import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveRight } from "./../../library/moveRight";
import { moveBottom } from "../../library/moveBottom";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    intro: "@initParams.intro",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip.addIncident(moveRight("-120%", ".intro", 2300), 0);
clip.addIncident(
  moveBottom("0%", ".letter", 300, "@stagger(0,600)", "linear", "102%"),
  2000
);

export default clip;
