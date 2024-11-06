import { faGithub, faStackOverflow, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/BlackCat.png'

export const data = [
    {
        date: "2022-2023", title: "My-resume", link: "https://github.com/Macgyver1999"
        , materails: [
            { type: faGithub, link: "https://github.com/Macgyver1999" },
            { type: faYoutube, link: "https://www.youtube.com/@Macgyver1999" },
            { type: faStackOverflow, link: "https://stackoverflow.com/users/27882158/macgyver" },
        ], descriptions: [
            "A simple and minimalist portfolio for developers built with React and TailwindCSS. Designed to be clean and fast",
        ], skills: [
            ["React", "TailWindCSS"]
        ], picture: picExp,
    },
    {
        date: "2021-2022", title: "My", link: ""
        , materails: [
            { type: faGithub, link: "https://github.com/Macgyver1999" },
            { type: faYoutube, link: "https://www.youtube.com/@Macgyver1999" },
            { type: faStackOverflow, link: "https://stackoverflow.com/users/27882158/macgyver" },
        ], descriptions: [
            "A",
        ], skills: [
            ["React", "TailWindCSS"]
        ], picture: picExp,
    },
    {
        date: "2020-2021", title: "My", link: ""
        , materails: [
            { type: faGithub, link: "https://github.com/Macgyver1999" },
            { type: faYoutube, link: "https://www.youtube.com/@Macgyver1999" },
            { type: faStackOverflow, link: "https://stackoverflow.com/users/27882158/macgyver" },
        ], descriptions: [
            "b",
        ], skills: [
            ["React", "TailWindCSS"]
        ], picture: picExp,
    }
]