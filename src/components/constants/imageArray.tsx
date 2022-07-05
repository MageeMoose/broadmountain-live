import React from 'react'
import GitLogo from "../../media/GitHub.png";
import MeLogo from "../../media/About me.png";
import CvLogo from "../../media/CV.png";
import LinkedInLogo from "../../media/Linkedin.png";
import SkillsLogo from "../../media/Skills.png";
import ProjectLogo from "../../media/Projects.png";

export default function imageArray() {
  return  [
    {
        img: ProjectLogo,
        imgAlt: "",
        link: "/projects",
        delay: 2000,
        isExt: false
    }, 
    {
        img: CvLogo,
        imgAlt: "",
        link: "/cv",
        delay: 3000,
        isExt: false
    },
    {
        img: MeLogo,
        imgAlt: "",
        link: "/aboutMe",
        delay: 4000,
        isExt: false
    }, 
    {
        img: SkillsLogo,
        imgAlt: "",
        link: "/skillsAndCerts",
        delay: 5000,
        isExt: false
    }, 
    {
        img: GitLogo,
        imgAlt: "",
        link: "https://github.com/MageeMoose",
        delay: 6000,
        isExt: true
    }, 
    {
        img: LinkedInLogo,
        imgAlt: "",
        link: "https://www.linkedin.com/in/magnus-bredberg-b3684121/",
        delay: 7000,
        isExt: true
    }
]
}
