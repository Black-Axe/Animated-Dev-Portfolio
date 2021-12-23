import { DiReact, DiDjango } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import {SiFlask, SiPython, SiExpress,
      SiTypescript, SiRedux, SiMysql,
       SiMongodb, SiPostgresql,SiGithub,SiBitbucket,
        SiJest, SiTestinglibrary, SiAirbnb,
     SiFirebase, SiAmazonaws, SiGoogle, SiHeroku, SiDocker, SiKubernetes,
      SiJava, SiSpringboot, SiHtml5, SiCss3} from "react-icons/si";



      let iconSize = 50;

let mainSkills = [
      {
          title: "Web Apps",
          exp: "4 years",
          description: "React, Node.js/Express, JavaScript, HTML, etc"
      },
      {
          title: "Software Development",
          exp: "3 years",
          description: "Java, Python, C++, C#, etc"
      },
      {
          title: "App Development",
          exp: "2 years",
          description: "Android, iOS, React Native, etc"
      },
      {
          title: "DevOps and Testing",
          exp: "1 ½ Years",
          description: "Configuring remote servers, setting up repositories with CI/CD pipelines, integrating testing, etc."

      }
  ]

  let experience = [
      {
          title: "Software Engineer",
          company: "Self",
          timeline: "July 2019 - Present",
      },
      {
          title: "Software Engineer",
          company: "Self",
          timeline: "July 2019 - Present",
      },
      {
          title: "Software Engineer",
          company: "Self",
          timeline: "July 2019 - Present",
      },
  ]

  let education = [
      {
          title: "Bachelor of Science",
          school: "University of Hardknocks",
          description: "Computer Science, Mathematics, etc",
          graduation: "May 2020"
      },
      {
          title: "Master of Science",
          school: "University of Hardknocks",
          description: "Computer Science, Mathematics, etc",
          graduation: "May 2020"
      },
  ]

  let skills = [
      {
            name: "React",
            icon: <DiReact size={iconSize} />,
      },
      {
            name: Node.js,
            icon: <IoLogoNodejs size={iconSize} />,
      },
      {
            name: "Express",
            icon: <SiExpress size={iconSize} />,
      },
      {
            name: "Docker",
            icon: <SiDocker size={iconSize} />,
      },
      {
            name: "Django",
            icon: <DiDjango size={iconSize} />,
      },
      {
            name: "Flask",
            icon: <SiFlask size={iconSize} />,
      },
      {
            name: "Python",
            icon: <SiPython size={iconSize} />,
      },
      {
            name: "Java",
            icon: <SiJava size={iconSize} />,
      },
      {
            name: "Springboot",
            icon: <SiSpringboot size={iconSize} />,
      },
      {
            name: "TypeScript",
            icon: <SiTypescript size={iconSize} />,
      },
      {
            name: "Redux",
            icon: <SiRedux size={iconSize} />,
      },
      {
            name: "MongoDB",
            icon: <SiMongodb size={iconSize} />,
      },
      

  ]

  export {mainSkills, experience, education, skills}