"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type CategoryData = {
    category: string;
    total: number;
    percentage: number;
};

const COLORS = [
    "#D58A5C",
    "#F1A36C",
    "#C7B29A",
    "#8E7C6B",
    "#F4D79B",
];

export default function CategoryPieChart({
    data,
}: {
    data: CategoryData[];
}) {
    const chartData = data.filter((item) => item.total > 0);

    if (chartData.length === 0) {
        return (
            <div className="flex h-52 items-center justify-center text-sm text-text-sub">
                No expense data
            </div>
        );
    }

    return (
        <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="total"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={75}
                        paddingAngle={2}
                    >
                        {chartData.map((item, index) => (
                            <Cell
                                key={item.category}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value) =>
                            `RM ${Number(value).toFixed(2)}`
                        }
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}