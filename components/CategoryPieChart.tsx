"use client"

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
    percentage: number
};

const COLORS = [
    "#D58A5C",
    "#F1A36C",
    "#C7B29A",
    "#8E7C6B",
    "#F4D79B",
];