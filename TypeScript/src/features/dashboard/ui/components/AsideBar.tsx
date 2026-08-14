
const AsideBar = () => {
    return (
        <aside className="flex h-screen w-70 shrink-0 flex-col justify-between border-r border-(--border) bg-(--surface-low) px-5 py-6 transition-colors">
            {/* Brand */}
            <div>
                <div className="px-2">
                    <h1 className="text-2xl font-bold tracking-tight text-(--primary)">
                        Team Sync
                    </h1>
                    <p className="mt-0.5 text-sm text-(--text-muted)">Enterprise Workspace</p>
                </div>
            </div>
        </aside>
    )
}

export default AsideBar