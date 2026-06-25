import AssetCategoryCard from "@/app/_lib/components/assetsCategories/AssetCategoryCard";
import { ASSETS_LIST } from "@/lib/types/assets";

export default function AssetsCategories() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                ASSETS_LIST.map((val) => (
                    <AssetCategoryCard
                        key={val.id}
                        {...val}
                    />
                ))
            }
        </section>
    )
}