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
      title: { 
        type:"array",
        items:{
          type:"string"
        }
      },
      subtitle: { 
        type:"array",
        items:{
          type:"string"
        }
      },
      backgroundImage: { type:"string"}
    }
  },
  slide1: {
    label: "Slide 1",
    type: "object",
    optional: false,
    props:{
      backgroundImage: { type:"string"},
      centerImage: { type:"string"},
      year: { type:"string"},
      backgroundText1: { type:"string"},
      backgroundText2: { type: "string"},
      textEffect: { type:"string"}
    }
  },
  slide2: {
    label: "Slide 2",
    type: "object",
    optional: false,
    props:{
      backgroundImage:{ type:"string"},
      centerImage:{ type:"string"},
      year:{ type:"string"},
      backgroundText1:{ type:"string"},
      backgroundText2: { type:"string"},
      textEffect:{ type:"string"}
    }
  },
  slide3: {
    label: "Slide 3",
    type: "object",
    optional: false,
    props:{
      backgroundImage:{ type:"string"},
      centerImage:{ type:"string"},
      year:{ type:"string"},
      backgroundText1:{ type:"string"},
      backgroundText2: { type:"string"},
      textEffect:{ type:"string"}
    }
  },
  slide4: {
    label: "Slide 4",
    type: "object",
    optional: false,
    props:{
      backgroundImage:{ type:"string"},
      centerImage:{ type:"string"},
      year:{ type:"string"},
      backgroundText1:{ type:"string"},
      backgroundText2: { type:"string"},
      textEffect:{ type:"string"}
    }
  },
  slide5: {
    label: "Slide 5",
    type: "object",
    optional: false,
    props:{
      backgroundImage:{ type:"string"},
      centerImage:{ type:"string"},
      year:{ type:"string"},
      backgroundText1:{ type:"string"},
      backgroundText2: { type:"string"},
      textEffect:{ type:"string"}
    }
  },
  slide6: {
    label: "Slide 6",
    type: "object",
    optional: false,
    props:{
      backgroundImage:{ type:"string"},
      centerImage:{ type:"string"},
      year:{ type:"string"},
      backgroundText1:{ type:"string"},
      backgroundText2: { type:"string"},
      textEffect:{ type:"string"}
    }
  },
  outro: {
    label: "Outro Slide",
    type: "object",
    optional: false,
    props:{
      title:{ 
        type:"array",
        items:{
          type:"string"
        }
      },
      subtitle:{ 
        type:"array",
        items:{
          type:"string"
        }
      },
      backgroundImage:{ type:"string"}
    }
  },
};
