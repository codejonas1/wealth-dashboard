import { AssetSearchResult } from "@/lib/types/api/assets";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("q");

    if (!query || query.length < 3) {
        return NextResponse.json({ error: "Query too short" }, { status: 400 });
    }

    const res = await fetch(
        `https://financialmodelingprep.com/stable/search-symbol?query=${encodeURIComponent(query)}&limit=20`,
        {
            headers: { "apikey": process.env.FMP_API_KEY! },
            next: { revalidate: 60 }
        }
    );

    if (!res.ok) {
        return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    const data: AssetSearchResult[] = await res.json();
    return NextResponse.json({ results: data });
}