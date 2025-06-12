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
                    <div className ="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        <p className ="mb-4">I specialize in:</p>
                        <ul className ="list-disc list-inside space-y-2">
                            <li>🧱 <strong>Blockchain Development</strong> – Smart contracts, dApps, Ethereum, Solidity</li>
                            <li>🌐 <strong>Web Development</strong> – Full-stack with React, Next.js, Node.js, TypeScript, ASP.NET</li>
                            <li>🔐 <strong>Cybersecurity</strong> – Network defense, malware analysis, and secure application development</li>
                            <li>☁️ <strong>Cloud & DevOps</strong> – Docker, Kubernetes, Firebase, Linux administration</li>
                        </ul>
                        </div>
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