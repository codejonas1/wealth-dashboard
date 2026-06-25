import AssetDialog from "@/app/_lib/components/assetsCategories/AssetDialog";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssetType, Gold, Stock } from "@/lib/types/assets";

export default function AssetCategoryCard({
    id,
    label,
    list,
    totalAmount,
    currency
}: {
    id: AssetType;
    label: string;
    list: Stock[] | Gold[];
    totalAmount: number;
    currency: string;
}) {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>{label}</CardTitle>
                <CardDescription>Sum: {totalAmount} {currency}</CardDescription>
                <CardAction>
                    <AssetDialog
                        id={id}
                        label={label}
                    />
                </CardAction>
            </CardHeader>
            <CardContent>
                {/* {
                    list.map((val) => (
                        <div key={val.name}>{val.name}</div>
                    ))
                } */}
            </CardContent>
        </Card>
    )
}