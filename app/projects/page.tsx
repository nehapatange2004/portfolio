'use client'
import ProjectCard from '../components/ProjectCard'
import { useInfo } from '../providers/InfoProvider'
import { ProjectItem } from '../types/InfoType';

const page = () => {
    const { projects } = useInfo();
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-4 z-5">
            {projects?.map((project: ProjectItem, i: number) => (
                <ProjectCard
                    key={i} name={project.name}
                    icon={project.icon}
                    live={project.live}
                    description={project.description}
                    github={project.github}
                    img={project.img}
                    status={project.status}
                    tech={project.tech} />
            ))}

        </div>
    )
}

export default page