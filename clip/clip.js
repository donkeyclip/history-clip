import { HTMLClip, AudioPlayback, AudioEffect } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import initParamsValidationRules from "./initParamsValidationRules";
import clip2 from "./scenes/scene-2";
import clip3 from "./scenes/scene-3";
import clip4 from "./scenes/scene-4";
import clip5 from "./scenes/scene-5";
import clip6 from "./scenes/scene-6";
import clip7 from "./scenes/scene-7";
import clip8 from "./scenes/scene-8";



import { moveBottom } from "./library/moveBottom";
import { moveRight } from "./library/moveRight";
import { opacity } from "./library/opacity";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  // initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: initParams[0].value,
  audioSources: [
    {
      src: initParams[0].value.song,
      id: "my-mp3",
      classes: ["songs"],
      base64: false,
    },
  ],
});

const songPlayback = new AudioPlayback({
  selector: "~#my-mp3",
  startFrom: 0,
  duration: 38500,
});

clip.addIncident(songPlayback, 0);

const effect = new AudioEffect(
  {
    animatedAttrs: {
      gain: 0,
    },
  },
  {
    selector: "~#my-mp3",
    duration: 1500,
  }
);

clip.addIncident(effect, 37000);

clip.addIncident(opacity(0.2,".texture",1000),1800)
clip.addIncident(scene1, 0);
clip.addIncident(clip2,3000);
clip.addIncident(moveRight("-20%",".texture",4500),3500)
clip.addIncident(clip3,8000);
clip.addIncident(moveRight("0%",".texture",4500),8500)
clip.addIncident(clip4,13000);
clip.addIncident(moveBottom("-30%",".texture",4500),13500)
clip.addIncident(clip5,18000);
clip.addIncident(moveBottom("0%",".texture",4500),18500)
clip.addIncident(clip6,23000);
clip.addIncident(moveRight("-20%",".texture",4500),23500)
clip.addIncident(clip7,28000);
clip.addIncident(moveBottom("-30%",".texture",4500),28500)
clip.addIncident(clip8,33000);
clip.addIncident(moveBottom("0%",".texture",4500),33500)