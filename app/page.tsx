import AssetsChartCard from "@/app/_lib/components/assetsChart/AssetsChartCard";
import AssetsCategories from "@/app/_lib/components/assetsCategories/AssetsCategories";
import TotalAmountCard from "@/app/_lib/components/TotalAmountCard";

export default function Home() {
    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-5">
                <TotalAmountCard />
                <AssetsChartCard />
            </div>

            <AssetsCategories />
        </div>
    );
}
