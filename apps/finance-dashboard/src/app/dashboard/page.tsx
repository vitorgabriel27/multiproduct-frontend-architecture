export default function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Finance Dashboard - Detalhes</h2>
            <p className="mb-6">Aqui você pode ver detalhes das finanças da empresa, gráficos e KPIs.</p>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">KPI 1</div>
                <div className="bg-white p-4 rounded shadow">KPI 2</div>
                <div className="bg-white p-4 rounded shadow">KPI 3</div>
            </div>
        </div>
    );
}
