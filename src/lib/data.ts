import { ICompetence } from "./types"

export const references = [
  {
    title: "Titre de mopn truc",
    year: 2022,
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    skills: ["TypeScript", "React","Next.js"],
    url: "https://www.github.com",
  },
  {
    title: "Titre de mopn truc",
    year: 2022,
    description: "Lorem ipsum dolor sit amet",
    skills: ["TypeScript", "React","Next.js"],
    url: "https://www.github.com",
  },
  {
    title: "Titre de mopn truc",
    year: 2022,
    description: "Lorem ipsum dolor sit amet",
    skills: ["TypeScript", "React","Next.js"],
    url: "https://www.github.com",
  },
]

export const competences : ICompetence[] = [
  {
    category: "Web",
    label: "HTML & CSS",
    logo: "/skills/html_css.png",
    width: 1280/25,
    height: 829/25,
  },
  {
    label: "JavaScript",
    category: "Web",
    logo: "/skills/javascript.svg",
    width: 50,
    height: 50,
  }
]
