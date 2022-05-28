export default {
  song: {
    label: "Song",
    type: "string",
    optional: false,
  },
  intro: {
    label: "Intro Slide",
    type: "object",
    optional: false,
    props:{
      title:"array",
      subtitle:"array",
      backgroundImage:"string"
    }
  },
  slide1: {
    label: "Slide 1",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  slide2: {
    label: "Slide 2",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  slide3: {
    label: "Slide 3",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  slide4: {
    label: "Slide 4",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  slide5: {
    label: "Slide 5",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  slide6: {
    label: "Slide 6",
    type: "object",
    optional: false,
    props:{
      backgroundImage:"string",
      centerImage:"string",
      year:"string",
      backgroundText1:"string",
      backgroundText2: "string",
      textEffect:"string"
    }
  },
  outro: {
    label: "Outro Slide",
    type: "object",
    optional: false,
    props:{
      title:"array",
      subtitle:"array",
      backgroundImage:"string"
    }
  },
};
