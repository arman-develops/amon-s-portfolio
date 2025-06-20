import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Contacts() {
    return (
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
                    <Link href="mailto:amon.victor.develops@gmail.com">
                        <MdOutlineAlternateEmail className="w-5 h-5" />
                        amon.victor.develops@gmail.com
                    </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2">
                    <Link href="https://linkedin.com/in/amon-victor" target="_blank">
                        <FaLinkedin className="w-5 h-5" />
                        LinkedIn
                    </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2">
                    <Link href="https://github.com/arman-develops" target="_blank">
                        <FaGithub className="w-5 h-5" />
                        GitHub
                    </Link>
                    </Button>
                </div>
                </div>
            </section>
        </>
    )
}