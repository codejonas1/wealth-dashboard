'use client'

import StockCombobox from "@/app/_lib/components/assetsCategories/StockCombobox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { StockSearchResult } from "@/lib/types/api/assets";
import { AssetType } from "@/lib/types/assets";
import { useState } from "react";

export default function AssetDialog({
    id,
    label
}: {
    id: AssetType;
    label: string;
}) {
    // todo: refactor this components
    // temporary states, in future add useForm hook
    const [selectedStock, setSelectedStock] = useState<StockSearchResult | null>(null);
    const [units, setUnits] = useState<number | null>(null);

    // temporary dialog component
    return (
        <Dialog modal={false} onOpenChange={() => { setUnits(null); setSelectedStock(null) }}>
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
                            id === "STOCK" && (
                                // todo: create form and add validation with useForm hook and zod
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Find your ETF or stock on NASDAQ</FieldLabel>
                                        <StockCombobox
                                            selectedStock={selectedStock}
                                            setSelectedStock={setSelectedStock}
                                        />
                                    </Field>
                                    <Field orientation={"horizontal"} className="gap-5">
                                        <FieldLabel
                                            className="text-nowrap"
                                            htmlFor="unit"
                                        >
                                            Amount of units
                                        </FieldLabel>
                                        <Input
                                            id="unit"
                                            type="number"
                                            inputMode="decimal"
                                            value={units ?? ""}
                                            onChange={(e) => setUnits(e.target.value.length === 0 ? null : Number(e.target.value))}
                                        />
                                    </Field>
                                </FieldGroup>
                            )
                        }
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        {/* todo: add to localStorage with zustand */}
                        <Button
                            disabled={!selectedStock || !units}
                        >
                            Add
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}