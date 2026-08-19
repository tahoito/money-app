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
            <div className="flex h-full items-center justify-center text-sm text-text-sub">
                No expense data
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Pie Chart */}
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="total"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
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

            {/* Category Legend */}
            <div className="mt-2 space-y-3">
                {chartData.map((item, index) => (
                    <div
                        key={item.category}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="h-3 w-3 rounded-full"
                                style={{
                                    backgroundColor:
                                        COLORS[index % COLORS.length],
                                }}
                            />

                            <span className="text-sm text-text-main">
                                {item.category}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-text-main">
                                RM {item.total.toFixed(2)}
                            </span>

                            <span className="w-10 text-right text-xs text-text-sub">
                                {item.percentage.toFixed(0)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}