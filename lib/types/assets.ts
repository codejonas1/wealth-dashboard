export interface Gold {
    name: string
    weight: number
}

export interface Stock {
    symbol: string
    name: string
    currency: string
    units: number
    priceOfUnit: number | null
    totalPrice: number | null
}

export interface AssetCategory<T> {
    label: string
    list: T[]
    totalAmount: number
    currency: string
}

export interface Assets {
    STOCK: AssetCategory<Stock>
    GOLD: AssetCategory<Gold>
}

export type AssetType = keyof Assets;

export const ASSETS: Assets = {
    STOCK: {
        label: "Stocks & ETFs",
        list: [],
        totalAmount: 0,
        currency: "USD"
    },
    GOLD: {
        label: "Gold",
        list: [],
        totalAmount: 0,
        currency: "USD"
    }
}

export const ASSETS_LIST = Object.entries(ASSETS).map(([key, val]) => {
    return {
        id: key as AssetType,
        ...val
    };
})