import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from './../../library/moveRight';
import { moveTop } from './../../library/moveTop';
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";

const clip2 = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide1: "@initParams.slide1"
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Libre+Caslon+Text:wght@700&display=swap`,
    },
  ],
});

clip2.addIncident(moveLeft("0%",".background-container",2800,0,"easeInOutCubic"),0)
clip2.addIncident(moveLeft("-40%",".face-container",3000,0,"easeInOutCubic"),400)
clip2.addIncident(moveLeft("-30%",".face-container",3200),4800)
clip2.addIncident(moveTop("0px",".letter",300,"@stagger(0,600)","easeOutSine"),2700)
clip2.addIncident(opacity(1,".letter",300,"@stagger(0,600)"),2700)
clip2.addIncident(moveTop("0px",".word",400,"@stagger(0,700)","easeOutSine"),3600)
clip2.addIncident(opacity(1,".word",400,"@stagger(0,700)"),3600)
clip2.addIncident(moveRight("30%",".bg-text-container",5300),500)
clip2.addIncident(opacity(0.4,".text-effect",1000),1600)
clip2.addIncident(moveLeft("10%",".text-effect",4500),2000)
clip2.addIncident(scale(0.9,".text-container",2000),4800)
clip2.addIncident(moveRight("0%",".text-container",2000),4800)
export default clip2;

