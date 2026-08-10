import {
    ChevronLeft,
    ChevronDown,
    Tag,
    User,
} from "lucide-react";

export default function Add() {
    return (
        <main className="min-h-screen bg-base px-5 pb-28 pt-6">
            <div className="mx-auto w-full max-w-md">
                {/* Header */}
                <header>
                    <h1 className="mt-1 text-3xl font-bold text-white text-center">
                        Add Expense
                    </h1>
                </header>

                {/* Form */}
                <div className="mt-8">
                    {/* Date */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            Date
                        </label>

                        <input
                            type="date"
                            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Spend */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            What did you spend on?
                        </label>

                        <input
                            type="text"
                            placeholder="Dinner, Grab, Movie..."
                            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main placeholder:text-text-sub outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Amount */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            Amount
                        </label>

                        <div className="flex items-center rounded-xl border border-line bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                            <span className="px-4 text-sm font-semibold text-text-main">
                                RM
                            </span>

                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full bg-transparent py-3 pr-4 text-sm text-text-main placeholder:text-text-sub outline-none"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            Category
                        </label>

                        <div className="relative">
                            <Tag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />

                            <select
                                defaultValue="Food"
                                className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pl-11 pr-11 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                                <option>Food</option>
                                <option>Transport</option>
                                <option>Shopping</option>
                                <option>Entertainment</option>
                                <option>Other</option>
                            </select>

                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>
                    </div>

                    {/* Paid by */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            Paid by
                        </label>

                        <div className="relative">
                            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />

                            <select
                                defaultValue="Taho"
                                className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pl-11 pr-11 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                                <option>Taho</option>
                                <option>Abdullah</option>
                            </select>

                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-text-main">
                            Note
                            <span className="ml-1 font-normal text-text-sub">
                                (optional)
                            </span>
                        </label>

                        <textarea
                            rows={3}
                            placeholder="Add a note..."
                            className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main placeholder:text-text-sub outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Save */}
                    <button
                        type="button"
                        className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover active:scale-[0.99]"
                    >
                        Save
                    </button>
                </div>
            </div>
        </main>
    );
}