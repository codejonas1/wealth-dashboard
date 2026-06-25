'use client'

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { StockSearchResult } from "@/lib/types/api/assets";
import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "error"

export default function StockCombobox({
    selectedStock,
    setSelectedStock
}: {
    selectedStock: StockSearchResult | null;
    setSelectedStock: (val: StockSearchResult | null) => void;
}) {
    const [inputValue, setInputValue] = useState<string>("");
    const [results, setResults] = useState<StockSearchResult[]>();
    const [status, setStatus] = useState<Status>("idle");

    const query = useDebounce<string>(inputValue, 400);

    useEffect(() => {
        if (!query || query.length < 3) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setResults([]);
            setStatus("idle");
            return;
        }

        const controller = new AbortController();

        (async () => {
            setStatus("loading");
            try {
                const res = await fetch(
                    `/api/assets/search?q=${encodeURIComponent(query)}`,
                    { signal: controller.signal }
                )
                if (!res.ok) throw new Error("Fetch failed");

                const data = await res.json();
                setResults(data.results);
                setStatus("idle");
            } catch (err) {
                if ((err as Error).name === "AbortError") return;
                setStatus("error")
            }
        })()

        return () => controller.abort();

    }, [query]);

    return (
        <Combobox
            items={results}
            onInputValueChange={(val, { reason }) => {
                if (reason === "item-press") return;
                setInputValue(val)
            }}
            itemToStringLabel={(item: StockSearchResult) => `${item.name} · ${item.exchange} · ${item.currency}`}
            filter={null}
            onOpenChangeComplete={(open) => {
                if (!open && selectedStock) {
                    setResults([selectedStock]);
                }
            }}
            onValueChange={(nextSelectedValue) => {
                setSelectedStock(nextSelectedValue);
                setInputValue('');
            }}
        >
            <ComboboxInput placeholder="Find your ETF (min. 3 chars)" showClear />
            <ComboboxContent>
                <ComboboxEmpty>
                    {status === "loading" && "Searching..."}
                    {status === "error" && "Something went wrong."}
                    {status === "idle" && "No items found."}
                </ComboboxEmpty>
                <ComboboxList>
                    {(item: StockSearchResult) => (
                        <ComboboxItem key={item.symbol} value={item}>
                            <Item size="xs" className="p-0">
                                <ItemContent>
                                    <ItemTitle className="whitespace-nowrap">
                                        {item.symbol}
                                    </ItemTitle>
                                    <ItemDescription>
                                        {item.name} · {item.exchange} · {item.currency}
                                    </ItemDescription>
                                </ItemContent>
                            </Item>
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )

}
