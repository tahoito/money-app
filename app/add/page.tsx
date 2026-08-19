import {
    ChevronDown,
    Tag,
    User,
} from "lucide-react";
import { sql } from "@/lib/db";
import { createExpense } from "./actions";

export default async function Add() {
    const today = new Date().toISOString().split("T")[0];
    const categories = await sql`
        SELECT id, name 
        FROM categories
        ORDER BY id;
    `;

    const users = await sql`
        SELECT id, name
        FROM users
        ORDER BY id ;
    `;

    return (
        <main className="min-h-screen bg-base px-5 pt-6 pb-[120px]">
            <div className="mx-auto w-full max-w-md">
                {/* Header */}
                <header className="relative flex items-center justify-center">
                    <h1 className="text-xl font-semibold text-text-main">
                        Add Expense
                    </h1>
                </header>

                <form action={createExpense} className="mt-8">
                    {/* Date */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                            Date
                        </label>

                        <input
                            type="date" name="date"
                            defaultValue={today}
                            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Spend */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-white">
                            What did you spend on?
                        </label>

                        <input
                            type="text" name="title"
                            placeholder="Dinner, Grab, Movie..."
                            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main placeholder:text-text-sub outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Amount */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-white">
                            Amount
                        </label>

                        <div className="flex items-center rounded-xl border border-line bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                            <span className="px-4 text-sm font-semibold text-text-main">
                                RM
                            </span>

                            <input
                                type="number"
                                name="amount"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                className="w-full bg-transparent py-3 pr-4 text-sm text-text-main placeholder:text-text-sub outline-none"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-white">
                            Category
                        </label>

                        <div className="relative">
                            <Tag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />

                            <select
                                name="category_id" 
                                className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pl-11 pr-11 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                                {categories.map((category) => (
                                    <option 
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>
                    </div>

                    {/* Paid by */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-white">
                            Paid by
                        </label>

                        <div className="relative">
                            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />

                            <select
                                name="paid_by"
                                className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pl-11 pr-11 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                                {users.map((user) => (
                                    <option
                                        key={user.id}
                                        value={user.id}
                                    >
                                        {user.name}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" />
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-white">
                            Note
                            <span className="ml-1 font-normal text-text-sub">
                                (optional)
                            </span>
                        </label>

                        <textarea
                            rows={3} name="note"
                            placeholder="Add a note..."
                            className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text-main placeholder:text-text-sub outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Save */}
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover active:scale-[0.99]"
                    >
                        Save
                    </button>
                </form>
            </div>
        </main>
    )
}



