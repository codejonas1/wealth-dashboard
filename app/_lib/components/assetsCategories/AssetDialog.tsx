import AssetCombobox from "@/app/_lib/components/assetsCategories/AssetCombobox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AssetType } from "@/lib/types/assets";

export default function AssetDialog({
    id,
    label
}: {
    id: AssetType;
    label: string;
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add {label}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add {label}</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </DialogDescription>
                    <div>
                        {
                            id === "ETF" || id === "STOCK"
                                ? <AssetCombobox id={id} />
                                : <p>todo: adjust to gold form</p>
                        }
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}