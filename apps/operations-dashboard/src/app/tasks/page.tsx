export default function TasksPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Operations Dashboard - Tasks</h2>
            <p className="mb-6">Aqui você pode ver todas as tarefas em andamento e status de operações.</p>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">Tarefa A</div>
                <div className="bg-white p-4 rounded shadow">Tarefa B</div>
                <div className="bg-white p-4 rounded shadow">Tarefa C</div>
                <div className="bg-white p-4 rounded shadow">Tarefa D</div>
            </div>
        </div>
    );
}
