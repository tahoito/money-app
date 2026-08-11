export default function Search() {
    return (
        <main className="min-h-screen bg-base px-5 pb-28 pt-6">
            <div className="mx-auto w-full max-w-md">
                {/* Header */}
                <header>
                    <h1 className="mt-1 text-3xl font-bold text-white text-center">
                        Search
                    </h1>
                </header>

                <section className="mt-6 rounded-3xl bg-surface p-6 shadow-sm">
                    <div className="mt-5 flex h-12 items-center rounded-xl border border-line bg-base/10 px-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-transparent text-sm text-text-main placeholder:text-text-sub outline-none"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}   
