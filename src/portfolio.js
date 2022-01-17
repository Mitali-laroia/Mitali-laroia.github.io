const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "ML."
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Mitali Laroia",
  role: " girl in Tech",
  description:
    "I'm an aspiring full stack developer, love to explore new technologies and spend most of my trying brainstorming new ideas as well as community help by building ideas at numerous hackathons.",
  resume:
    "https://drive.google.com/file/d/1I9_mmh9Kib45IuL5tgLNTZSQtQj9OKjP/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/mitali-laroia-b52763191",
    github: "https://github.com/Mitali-laroia"
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "MERN-Portal",
    description:
      "With the development of lot's of coding and development platforms, usually a developer feels a little overwhelmed and confused when it comes at applying at jobs or connecting with job providers.At MERN PORTAL, we try to ease down this hassle and provide a one single platform where user can create their profiles, job seekers can contact the developers,send them messages and much more stuff.",
    stack: ["NodeJS", "MongoDB", "React", "Express", "Redux"],
    sourceCode: "https://github.com/Mitali-laroia/MERN-Portal",
    livePreview: "https://github.com/Mitali-laroia/MERN-Portal"
  },
  {
    name: "Mind Space",
    description:
      "The aim is to spread awareness about PCOD/PCOS (not only to those who have access to internet but to everyone!)and help those who already are suffering from this disorder.",
    stack: [
      "Express",
      "NodeJs",
      "Socket.io",
      "nexmo",
      "Flask",
      "Machine Learning"
    ],
    sourceCode: "https://github.com/Mitali-laroia/innerve-hacks",
    livePreview: "https://mindspace1.herokuapp.com/"
  },
  {
    name: "Daily Journal",
    description:
      "A fully fledged open source blog publishing application, built with ♥ using Node.js",
    stack: ["Express", "MongoDB", "NodeJs"],
    sourceCode: "https://github.com/Mitali-laroia/blog-website",
    livePreview: "https://stark-gorge-25026.herokuapp.com/"
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Material UI",
  "Git",
  "MongoDB",
  "Heroku"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "04042001mitali@gmail.com"
}

export { header, about, projects, skills, contact }
