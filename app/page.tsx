export default function Home() {
  return (
    <div className="min-h-screen bg-base text-text-main">
      <div className="mx-auto max-w-md px-5 py-8">

        <header>
          <h1 className="mt-1 text-3xl font-bold text-white">
            Augtst
          </h1>
        </header>

        <section className="mt-6 rounded-3xl bg-surface p-6 shadow-sm">
          <p className="text-base text-text-main">
            Total
          </p>

          <h2 className="mt-2 text-4xl font-semibold">
            RM 100.89
          </h2>
        </section>

        <section className="mt-5 rounded-3xl bg-surface p-6 shadow-sm">
          <p className="text-base font-medium text-text-main">
            Category
          </p>

          <div className="mt-5 flex h-56 items-center justify-center rounded-2xl border border-dashed border-line bg-base/10">
            <span className="text-text-sub">
              Pie Chart
            </span>
          </div>
        </section>

        <section className="mt-5 rounded-3xl bg-surface p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-text-main">
            Expense List
          </h3>

          <div className="mt-4 border-t border-line pt-4">

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">
                  Dinner
                </p>

                <p className="text-sm text-text-sub">
                  Aug 6 ・ Food ・ Taho
                </p>
              </div>

              <p className="font-semibold text-primary">
                RM 48.00
              </p>
            </div>

            <div className="border-t border-line" />

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">
                  Grab
                </p>

                <p className="text-sm text-text-sub">
                  Aug 5 ・ Transport ・ Abi
                </p>
              </div>

              <p className="font-semibold text-primary">
                RM 15.00
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}