export default function Add() {
  return (
    <div className="min-h-screen bg-base text-text-main">
        <div className="mx-auto max-w-md px-5 py-8">
            <header>
                <h1 className="mt-1 text-3xl font-bold text-white">
                    Add Expense
                </h1>
            </header>

            <div className="mt-3">
                <label className="mb-1 block text-base text-white">
                    Date
                </label>

                <input
                    type="date"
                    className="w-full rounded-lg border border-line bg-surface px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
        </div>
    </div>
  )
}