export type AssetType = 'ETF' | 'GOLD' | 'STOCK';

export interface Asset {
    name: string;
    // todo add ticker and etc
}

export interface AssetCategory {
    label: string;
    list: Asset[];
    totalAmount: number;
    currency: string;
}

export type Portfolio = Record<AssetType, AssetCategory>;
export const ASSETS: Portfolio = {
    ETF: {
        label: "ETFs",
        list: [{ name: "MSCI ACWI" }],
        totalAmount: 1000,
        currency: "EUR"
    },
    GOLD: {
        label: "Gold",
        list: [{ name: "PAMP 10g" }],
        totalAmount: 1000,
        currency: "EUR"
    },
    STOCK: {
        label: "Stocks",
        list: [{ name: "Apple" }],
        totalAmount: 1000,
        currency: "EUR"
    },
};

export const ASSETS_LIST = Object.entries(ASSETS).map(([key, val]) => {
    return {
        id: key as AssetType,
        ...val
    };
})