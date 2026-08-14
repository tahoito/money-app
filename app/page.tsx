import { sql } from "@/lib/db";

export default async function Home() {
  const expenses = await sql`
    SELECT 
      expenses.id, 
      expenses.date, 
      expenses.title, 
      expenses.amount, 
      categories.name AS category,
            users.name AS paid_by
        FROM expenses
        JOIN categories
            ON expenses.category_id = categories.id
        JOIN users
            ON expenses.paid_by = users.id
        ORDER BY expenses.date DESC;
  `;

  return (
    <div className="min-h-screen bg-base text-text-main">
      <div className="mx-auto max-w-md px-5 py-8">

        <header>
          <h1 className="mt-1 text-3xl font-bold text-white">
            Augutst
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
            {expenses.length === 0 ? (
              <p className="py-6 text-center text-sm text-text-sub">
                No expenses yet
              </p>
            ) : (
              expenses.map((expense, index) => {
                const date = new Date(expense.date);

                const formattedDate = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });

                return(
                  <div key={expense.id}>
                    <div className="flex items-center justify-between py-3">
                      <p className="font-medium text-text-main">
                        {expense.title}
                      </p>
                      <p className="text-sm text-text-sub">
                        {formattedDate} ・ {expense.category} ・ {expense.paid_by}
                      </p>
                    </div>
                    <p className="font-semibold text-primary">
                      RM {Number(expense.amount).toFixed(2)}
                    </p>
                    {index !== expenses.length -1 && (
                      <div className="border-t border-line" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}