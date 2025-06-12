import About from "@/components/custom/About";
import Contacts from "@/components/custom/Contact";
import Header from "@/components/custom/Header";
import Projects from "@/components/custom/Projects";

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main className="container mx-auto px-4 space-y-20">
        <About />
        <Projects />
        <Contacts />
      </main>
    </div>
  )
}