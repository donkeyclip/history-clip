import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveTop } from "./../../library/moveTop";
import { moveBottom } from "../../library/moveBottom";
import { moveLeft } from "../../library/moveLeft";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";

const clip5 = new HTMLClip({
  html,
  css,
  selector: "#root5",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide4: "@initParams.slide4",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip5.addIncident(
  moveBottom("0%", ".background-container", 2800, 0, "easeInOutCubic", "-130%"),
  0
);
clip5.addIncident(
  moveBottom("-30%", ".face-container", 2800, 0, "easeInOutCubic", "-120%"),
  400
);
clip5.addIncident(moveBottom("-20%", ".face-container", 3200), 4800);
clip5.addIncident(
  moveTop("0px", ".letter", 300, "@stagger(0,600)", "easeOutSine"),
  2700
);
clip5.addIncident(opacity(1, ".letter", 300, "@stagger(0,600)"), 2700);
clip5.addIncident(
  moveTop("0px", ".word", 400, "@stagger(0,700)", "easeOutSine"),
  3600
);
clip5.addIncident(opacity(1, ".word", 400, "@stagger(0,700)"), 3600);
clip5.addIncident(opacity(0.4, ".text-effect", 1000), 1600);
clip5.addIncident(moveLeft("10%", ".text-effect", 4800), 2000);
clip5.addIncident(scale(0.9, ".text-container", 2000), 4800);
clip5.addIncident(
  moveTop("-10%", ".text-container", 2000, 0, "linear", "5%"),
  4800
);
export default clip5;
