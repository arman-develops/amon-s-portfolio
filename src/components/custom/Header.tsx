export default function Header() {
    return (
        <>
            {/* Header */}
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent mb-4">
                Amon Victor
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Passionate Full-Stack Developer with a strong interest in Cybersecurity focusing on scalable, secure applications.
                </p>
            </header>
        </>
    );
}