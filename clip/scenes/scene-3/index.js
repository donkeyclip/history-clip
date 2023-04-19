import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "./../../library/moveRight";
import { moveTop } from "./../../library/moveTop";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";

const clip3 = new HTMLClip({
  html,
  css,
  selector: "#root3",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide2: "@initParams.slide2",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip3.addIncident(
  moveRight("0%", ".background-container", 2800, 0, "easeInOutCubic", "-120%"),
  0
);
clip3.addIncident(
  moveRight("-40%", ".face-container", 2800, 0, "easeInOutCubic", "-100%"),
  400
);
clip3.addIncident(moveRight("-35%", ".face-container", 3500), 4800);
clip3.addIncident(
  moveTop("0px", ".letter", 300, "@stagger(0,600)", "easeOutSine"),
  2700
);
clip3.addIncident(opacity(1, ".letter", 300, "@stagger(0,600)"), 2700);
clip3.addIncident(
  moveTop("0px", ".word", 400, "@stagger(0,700)", "easeOutSine"),
  3600
);
clip3.addIncident(opacity(1, ".word", 400, "@stagger(0,700)"), 3600);
clip3.addIncident(
  moveLeft("30%", ".bg-text-container", 5300, 0, "linear", "30%"),
  500
);
clip3.addIncident(opacity(0.4, ".text-effect", 1000), 1600);
clip3.addIncident(moveRight("10%", ".text-effect", 5000), 2000);
clip3.addIncident(scale(0.9, ".text-container", 2000), 4800);
clip3.addIncident(
  moveLeft("0%", ".text-container", 2000, 0, "linear", "10%"),
  4800
);
export default clip3;
