import StatsCards from "@/components/admin/StatsCards";

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 uppercase text-white">Vue d'ensemble</h1>
            <StatsCards />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                    <h2 className="font-bold text-lg mb-4">Derniers Leads</h2>
                    <p className="text-gray-500 text-sm">Chargement des données...</p>
                </div>
                <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                    <h2 className="font-bold text-lg mb-4">Activité Projets</h2>
                    <p className="text-gray-500 text-sm">Chargement des données...</p>
                </div>
            </div>
        </div>
    );
}
