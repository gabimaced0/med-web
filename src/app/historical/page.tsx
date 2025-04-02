import NavBar from "@/components/nav-bar";

export default function HistoricalPage() {
    return (
        <>
            <NavBar active="historico" />

            <main className="flex justify-center">
                <div className="bg-slate-900 p-6 m-6 rounded min-w-1/3">
                    <h2>Histórico</h2>
                </div>
            </main>
        </>
    )
}