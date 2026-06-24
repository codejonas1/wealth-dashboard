'use client'

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { useDebounce } from "@/lib/hooks/useDebounce";
import { AssetSearchResult } from "@/lib/types/api/assets";
import { AssetType } from "@/lib/types/assets"
import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "error"

export default function AssetCombobox({ id }: { id: AssetType }) {
    const [inputValue, setInputValue] = useState<string>("");
    const [results, setResults] = useState<AssetSearchResult[]>();
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

        const fetchResults = async () => {
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
        }

        fetchResults()

        return () => controller.abort();

    }, [query]);

    return (
        <Combobox
            items={results}
            onInputValueChange={setInputValue}
            itemToStringValue={(item: AssetSearchResult) => item.symbol}
            filter={null}
        >
            <ComboboxInput placeholder="Find your ETF (min. 3 chars)" />
            <ComboboxContent>
                <ComboboxEmpty>
                    {status === "loading" && "Searching..."}
                    {status === "error" && "Something went wrong."}
                    {status === "idle" && "No items found."}
                </ComboboxEmpty>
                <ComboboxList>
                    {(item: AssetSearchResult) => (
                        <ComboboxItem key={item.symbol} value={item}>
                            <div className="flex flex-col">
                                <span className="font-medium">{item.symbol}</span>
                                <span className="text-sm text-muted-foreground">
                                    {item.name} · {item.exchange} · {item.currency}
                                </span>
                            </div>
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )

}
