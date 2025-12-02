import { IconType } from "react-icons"

export type Item = {
    name: string,
    icon: IconType
}

export type SkillsType = Item[];
export type ToolsType = Item[];


export type ProjectItem = {
    name: string
    icon: IconType
    img: string
    description: string
    tech: Item[]
    github: string
    live: string
    status: "MVP" | "Completed" | "Ongoing"
}
export type ProjectsTypes = ProjectItem[];
