import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Asset, AssetType } from "@/lib/types/assets";

export default function AssetCategoryCard({
    id,
    label,
    list,
    totalAmount,
    currency
}: {
    id: AssetType;
    label: string;
    list: Asset[];
    totalAmount: number;
    currency: string;
}) {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>{label}</CardTitle>
                <CardDescription>Sum: {totalAmount} {currency}</CardDescription>
                <CardAction><Button>Add {label}</Button></CardAction>
            </CardHeader>
            <CardContent>
                {
                    list.map((val) => (
                        <div key={val.name}>{val.name}</div>
                    ))
                }
            </CardContent>
        </Card>
    )
}