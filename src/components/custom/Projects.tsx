import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {projects} from "../../data/projects"

export default function Projects() {
    return (
            <>
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                        >
                        <CardHeader>
                            <CardTitle className="text-xl text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                            </CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-400">
                            {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                                </Badge>
                            ))}
                            </div>
                            <div className="flex gap-3">
                                <Button asChild size="sm" variant="outline" className="gap-2">
                                    <Link href={project.github} target="_blank">
                                    <FaGithub className="w-4 h-4" />
                                    Code
                                    </Link>
                                </Button>
                                {project.live && <Button asChild size="sm" className="gap-2">
                                    <Link href={project.live} target="_blank">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                    </Link>
                                </Button>}
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}