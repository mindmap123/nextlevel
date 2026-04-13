import TableauLeads from "@/components/admin/TableauLeads";

export default function LeadsPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold uppercase text-white">Gestion des Leads</h1>
                <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200">
                    Export CSV
                </button>
            </div>
            <TableauLeads />
        </div>
    );
}
