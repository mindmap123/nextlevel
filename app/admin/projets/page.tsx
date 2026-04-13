import TableauProjets from "@/components/admin/TableauProjets";

export default function ProjectsPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold uppercase text-white">Gestion des Projets</h1>
                <button className="bg-[#BFFF00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#a6de00]">
                    + Nouveau Projet
                </button>
            </div>
            <TableauProjets />
        </div>
    );
}
