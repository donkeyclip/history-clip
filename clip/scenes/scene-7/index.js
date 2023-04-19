import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveTop } from "../../library/moveTop";
import { opacity } from "../../library/opacity";
import { moveBottom } from "../../library/moveBottom";
import { scale } from "../../library/scale";
import { moveRight } from "../../library/moveRight";

const clip7 = new HTMLClip({
  html,
  css,
  selector: "#root7",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide6: "@initParams.slide6",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip7.addIncident(
  moveTop("0%", ".background-container", 2800, 0, "easeInOutCubic", "-135%"),
  0
);
clip7.addIncident(
  moveTop("-30%", ".face-container", 2800, 0, "easeInOutCubic", "-120%"),
  400
);
clip7.addIncident(moveTop("-20%", ".face-container", 3200), 4800);
clip7.addIncident(
  moveTop("0px", ".letter", 300, "@stagger(0,600)", "easeOutSine"),
  2700
);
clip7.addIncident(opacity(1, ".letter", 300, "@stagger(0,600)"), 2700);
clip7.addIncident(
  moveTop("0px", ".word", 400, "@stagger(0,700)", "easeOutSine"),
  3600
);
clip7.addIncident(opacity(1, ".word", 400, "@stagger(0,700)"), 3600);
clip7.addIncident(opacity(0.4, ".text-effect", 1000), 1600);
clip7.addIncident(moveRight("10%", ".text-effect", 4800), 2000);
clip7.addIncident(scale(0.9, ".text-container", 2000), 4800);
clip7.addIncident(
  moveBottom("-10%", ".text-container", 2000, 0, "linear", "5%"),
  4800
);
export default clip7;
