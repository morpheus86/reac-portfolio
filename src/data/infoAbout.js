const info = {
  about:
    "My story is similar but at the same time quite different to a lot of the immigrant that lives in New York. Searching for a better future while striving to challenge myself and helping contribute to a better community both socially and physically. I became a software Engineer in order to contribute in the advancement of my community and at the same time be around mind like people. I graduated from Full Stack Academy of Code, one of the most prestigious coding schools in the greater New York area. I feel very comfortable and happy designing and analyzing algorithms as well as learning new technologies and working with the tools of different technologies I have acquired. I specialize in building full stack web applications through NERD stack (Node, Express, React, React-Redux and database). Aside from developing scalable web and mobile apps, I am also a personal trainer, I am very passionate about what i do which make me give my best and be the best in anything i put my mind to. I am an avid learner of new technologies, a fine food lover. On my free time I like to compete playing soccer, basketball and socializing with friends and family trying not to think about code."
};
const projectInfo = [
  {
    fintrack:
      "Progressive web application that keeps tracks of all your daily expenses and suggest ways to save according to your spending habit",
    work:
      "Worked on implementing the plaid API functionality in the back-end in order to get bank information from the past 6 month of a specific user. Added and updated new fields by using the react-redux library while making sure that the firebase firestore which contained our data was being accessed by our store in order to display the desirable information to our user",
    link: "https://github.com/JTLL/GraceStarShopper"
  },
  {
    ChatLiner:
      "Beta chat based mobile application that creates private channels.",
    work:
      "Implemented both back-end and front-end using a NodeJs, PSQL, SQL and Sequelize library. Used the react-native library with, react, React-redux. THe application is still being built.",
    link: "https://github.com/morpheus86/ChatLiner"
  },
  {
    GraceStarShopper:
      "An e-commerce based website that sells different stars from the universe",
    work:
      "Wrote test-specs for the most of the back end, react, react-redux and help implement the strip API",
    link: "https://github.com/JTLL/GraceStarShopper"
  },
  {
    pokemonPower:
      "A pokemon progressive web app that display all type of pokemons information. User can look for specific pokemons, find out all the informations available about them.The technologies used for this project are React, Redux, HTML, CSS, Optimization technique such as React Window, React LazyLoad, express for CORE issues, react-virtualized-auto-sizer, tachyons.",
    work:
      "build this application from scratch and work on all stack of the application while focusing on optimizations, and satisfying google audits progressive web application requirements",
    link: "https://morpheus86.github.io/pwapokedex/"
  },
  {
    rubyGem:
      "This app is designed to fetch ruby gems from the rubygem api depending on what is inputed in the search bar. The application is built with an emphasis for a user to enjoy and navigate smoothly.",
    work:
      "This app a full stack app that was build using React , Redux and firebase cloud firestore which manages the data structure.",
    link: "https://github.com/morpheus86/Rubygem-"
  }
];

const education = [
  {
    "FullStack Academy of Code": "Full Stack Engineer",
    desc: "Computer Science - Web Development"
  },
  {
    "CUNY Brooklyn College / Long Island University":
      "Biology / Math/ Business",
    desc: "over 160 credits completed in Biology, Math and Business"
  }
];

module.exports = {
  info,
  projectInfo,
  education
};
