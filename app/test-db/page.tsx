import { sql } from "@/lib/db";

export default async function TestDbPage() {
    const users = await sql`
        SELECT * FROM users;
    `;

    return (
        <main className="p-8">
            <h1>DB Test</h1>

            <pre>
                {JSON.stringify(users, null, 2)}
            </pre>
        </main>
    );
}