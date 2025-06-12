import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"
import {techStack } from "@/data/techStack"

export default function About () {
    return (
        <>
            <section className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">About Me</h2>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        I'm a passionate full-stack developer with over 5 years of experience building and deploying scalable software solutions across diverse domains.
                        I thrive at the intersection of clean code, intuitive user experiences, and secure infrastructure. Whether it’s launching decentralized apps, scaling cloud platforms, or mentoring devs—I’m always excited to tackle meaningful challenges.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        I specialize in:
                        🧱 Blockchain Development – Smart contracts, dApps, Ethereum, Solidity
                        - 🌐 Web Development – Full-stack with React, Next.js, Node.js, TypeScript, ASP.NET
                        - 🔐 Cybersecurity – Network defense, malware analysis, and secure application development
                        - ☁️ Cloud & DevOps – Docker, Kubernetes, Firebase, Linux system administration
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6 justify-center">
                        {techStack.map(
                        (tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                            </Badge>
                        ),
                        )}
                    </div>
                    <div className="flex justify-center">
                        <Button asChild variant="outline" className="gap-2">
                            <Link href="/resume.pdf" target="_blank">
                            <FileText className="w-4 h-4" />
                            View Resume
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}