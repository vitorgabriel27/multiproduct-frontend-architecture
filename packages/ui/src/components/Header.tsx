export function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6">
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Hi, User</span>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
        </header>
    );
}
