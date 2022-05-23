import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveBottom } from "../../library/moveBottom";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";

const clip8 = new HTMLClip({
  html,
  css,
  selector: "#root8",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    outro: "@initParams.outro"
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip8.addIncident(moveBottom("0%",".background-container",2800,0,"easeInOutCubic"),0)
clip8.addIncident(moveBottom("0%",".letter",300,"@stagger(0,600)"),2000);

export default clip8;

