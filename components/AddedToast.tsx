"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddedToast() {
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get("added") === "true") {
            toast.success("Expense added!");

            router.replace("/");
        }
    }, [router]);

    return null;
}