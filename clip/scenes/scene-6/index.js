import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "../../library/moveRight";
import { moveTop } from "../../library/moveTop";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";

const clip6 = new HTMLClip({
  html,
  css,
  selector: "#root6",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide5: "@initParams.slide5",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip6.addIncident(
  moveLeft("0%", ".background-container", 2800, 0, "easeInOutCubic", "-120%"),
  0
);
clip6.addIncident(
  moveLeft("-40%", ".face-container", 3000, 0, "easeInOutCubic", "-100%"),
  400
);
clip6.addIncident(moveLeft("-30%", ".face-container", 3200), 4800);
clip6.addIncident(
  moveTop("0px", ".letter", 300, "@stagger(0,600)", "easeOutSine"),
  2700
);
clip6.addIncident(opacity(1, ".letter", 300, "@stagger(0,600)"), 2700);
clip6.addIncident(
  moveTop("0px", ".word", 400, "@stagger(0,700)", "easeOutSine"),
  3600
);
clip6.addIncident(opacity(1, ".word", 400, "@stagger(0,700)"), 3600);
clip6.addIncident(
  moveRight("30%", ".bg-text-container", 5300, 0, "linear", "39%"),
  500
);
clip6.addIncident(opacity(0.4, ".text-effect", 1000), 1600);
clip6.addIncident(moveLeft("10%", ".text-effect", 4500), 2000);
clip6.addIncident(scale(0.9, ".text-container", 2000), 4800);
clip6.addIncident(
  moveRight("0%", ".text-container", 2000, 0, "linear", "10%"),
  4800
);
export default clip6;
