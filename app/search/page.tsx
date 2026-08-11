import {
    CalendarDays,
    ChevronDown,
    SearchIcon,
} from "lucide-react";

export default function Search() {
    return (
        <main className="min-h-screen bg-base px-5 pb-28 pt-6">
            <div className="mx-auto w-full max-w-md">

                {/* Header */}
                <header className="relative flex items-center justify-center">
                    <h1 className="text-xl font-semibold text-text-main">
                        Search
                    </h1>
                </header>


                {/* Search Form */}
                <section className="mt-8">

                    {/* Keyword */}
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-sub" />

                        <input
                            type="text"
                            placeholder="Search by content (Dinner, Grab...)"
                            className="w-full rounded-xl border border-line bg-surface py-3 pl-12 pr-4 text-sm text-text-main placeholder:text-text-sub outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>


                    {/* Date */}
                    <div className="mt-4 grid grid-cols-2 gap-3">

                        {/* From */}
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full rounded-xl border border-line bg-surface px-4 py-3 pr-10 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />

                            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>


                        {/* To */}
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full rounded-xl border border-line bg-surface px-4 py-3 pr-10 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />

                            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>
                    </div>


                    {/* Labels */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Category
                            </label>

                            <div className="relative">
                                <select
                                    defaultValue="All"
                                    className="w-full appearance-none rounded-xl border border-line bg-surface px-4 py-3 pr-10 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option>All</option>
                                    <option>Food</option>
                                    <option>Transport</option>
                                    <option>Shopping</option>
                                    <option>Entertainment</option>
                                    <option>Other</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                            </div>
                        </div>


                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Amount
                            </label>

                            <div className="relative">
                                <select
                                    defaultValue="All"
                                    className="w-full appearance-none rounded-xl border border-line bg-surface px-4 py-3 pr-10 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option>All</option>
                                    <option>Under RM 20</option>
                                    <option>RM 20 - RM 50</option>
                                    <option>RM 50 - RM 100</option>
                                    <option>Over RM 100</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                            </div>
                        </div>
                    </div>


                    {/* Search Button */}
                    <button
                        type="button"
                        className="mt-5 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover active:scale-[0.99]"
                    >
                        Search
                    </button>

                </section>

                <section className="mt-8">
                    <h2 className="text-lg font-semibold text-text-main">
                        Search Results
                    </h2>

                    <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-line bg-base/10">
                        <span className="text-text-sub">
                            No results found
                        </span>
                    </div>
                </section>
            </div>
        </main>
    );
}   
