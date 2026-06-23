"use client"

import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig, } from "@/components/ui/chart"

// todo: read data from ASSETS_LIST and adjust chart
const chartData = [
    { asset: "gold", amount: 5, fill: "var(--color-gold)" },
    { asset: "etf", amount: 70, fill: "var(--color-etf)" },
    { asset: "stock", amount: 25, fill: "var(--color-stock)" }
]

const chartConfig = {
    gold: {
        label: "Gold",
        color: "var(--chart-1)",
    },
    etf: {
        label: "ETFs",
        color: "var(--chart-2)",
    },
    stock: {
        label: "Stocks",
        color: "var(--chart-3)",
    }
} satisfies ChartConfig

export function ChartPieLegend() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto"
        >
            <PieChart>
                <ChartTooltip
                    content={<ChartTooltipContent nameKey="asset" hideLabel />}
                />
                <Pie data={chartData} dataKey="amount" />
                <ChartLegend
                    content={<ChartLegendContent nameKey="asset" />}
                    className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                />
            </PieChart>
        </ChartContainer>
    )
}
