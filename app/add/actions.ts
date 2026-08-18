"use server";

import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createExpense(formData: FormData) {
    const date = formData.get("date") as string;
    const title = formData.get("title") as string;
    const amount = formData.get("amount") as string;
    const categoryId = formData.get("category_id") as string;
    const paidBy = formData.get("paid_by") as string;
    const note = formData.get("note") as string;

    await sql`
        INSERT INTO expenses (
            date,
            title,
            amount,
            category_id,
            paid_by,
            note
        )
        VALUES (
            ${date},
            ${title},
            ${amount},
            ${categoryId},
            ${paidBy},
            ${note || null}
        )
    `;

    revalidatePath("/");
    redirect("/?added=true");
}