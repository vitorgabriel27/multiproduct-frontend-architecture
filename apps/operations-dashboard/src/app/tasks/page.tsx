export default function TasksPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Operations Dashboard - Tasks</h2>
            <p className="mb-6">Here you can see all ongoing tasks and operation statuses.</p>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md border shadow">Task A</div>
                <div className="bg-white p-4 rounded-md border shadow">Task B</div>
                <div className="bg-white p-4 rounded-md border shadow">Task C</div>
                <div className="bg-white p-4 rounded-md border shadow">Task D</div>
            </div>
        </div>
    );
}
