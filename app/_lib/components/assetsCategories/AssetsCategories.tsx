import AssetCategoryCard from "@/app/_lib/components/assetsCategories/AssetCategoryCard";
import { ASSETS_LIST } from "@/lib/types/assets";

export default function AssetsCategories() {
    return (
        <section className="flex flex-col md:flex-row gap-5">
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