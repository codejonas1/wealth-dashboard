import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TotalAmountCard() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>Total amount</CardTitle>
                {/* todo: adjust to tabs */}
                <CardAction>PLN | EUR | USD</CardAction>
            </CardHeader>
            <CardContent className="flex flex-1 items-center justify-center">
                <span className="text-7xl">10000 <span className="text-5xl">PLN</span></span>
            </CardContent>
        </Card>
    )
}