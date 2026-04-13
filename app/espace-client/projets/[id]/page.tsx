export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Détails du Projet {params.id}</h1>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-12 text-center">
                <p className="text-gray-400">Vue détaillée avec progression et fichiers.</p>
            </div>
        </div>
    );
}
