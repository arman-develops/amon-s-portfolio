import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"

export default function Contacts() {
    <>
        <section className="max-w-4xl mx-auto text-center pb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Get In Touch</h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                I'm always interested in new opportunities and interesting projects. Let's connect and discuss how we can
                work together!
            </p>
            <div className="flex justify-center gap-6">
                <Button asChild size="lg" className="gap-2">
                <Link href="mailto:alex.johnson@email.com">
                    <Mail className="w-5 h-5" />
                    alex.johnson@email.com
                </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="https://linkedin.com/in/alexjohnson" target="_blank">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="https://github.com/alexjohnson" target="_blank">
                    <Github className="w-5 h-5" />
                    GitHub
                </Link>
                </Button>
            </div>
            </div>
        </section>
    </>
}