import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function About () {
    return (
        <>
            <section className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">About Me</h2>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I
                    specialize in React, Next.js, Node.js, and modern database technologies. I love creating intuitive user
                    experiences backed by robust, well-architected systems.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                    sharing knowledge through technical writing and mentoring.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS"].map(
                    (tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                        </Badge>
                    ),
                    )}
                </div>
                <Button asChild variant="outline" className="gap-2">
                    <Link href="/resume.pdf" target="_blank">
                    <FileText className="w-4 h-4" />
                    View Resume
                    </Link>
                </Button>
                </div>
            </section>
        </>
    )
}