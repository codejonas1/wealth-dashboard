import { ChartPieLegend } from "@/app/_lib/components/assetsChart/AssetsChart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AssetsChartCard() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>Assets</CardTitle>
                <CardDescription>Summary</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartPieLegend />
            </CardContent>
        </Card>
    )
}