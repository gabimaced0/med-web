import NavBar from "@/components/nav-bar";
import "./page.css";

export default function DashboardPage() {
  return (
    <>
      <NavBar active="dashboard" />

        <section className="w-screen h-[400px]">
            <img
                src="/imgdashboard.png"
                alt="Banner do dashboard"
                className="w-full h-full object-cover"
            />
        </section>

      <section className="flex flex-col items-center justify-center px-8 py-10 sm:flex-row gap-6">

        <div className="bg-[#002F4F] text-white rounded-lg p-6 w-full sm:w-1/3 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Próximos Agendamentos:</h2>
          <ul className="text-sm space-y-2">
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
          </ul>
          <div className="mt-4 text-right">
            <a href="#" className="text-sm underline hover:text-pink-300">
              Ver tudo
            </a>
          </div>
        </div>

        <div className="bg-[#002F4F] text-white rounded-lg p-6 w-full sm:w-1/3 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Histórico:</h2>
          <ul className="text-sm space-y-2">
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
            <li>GINECOLOGISTA - 11/03 | 09:00</li>
          </ul>
          <div className="mt-4 text-right">
            <a href="#" className="text-sm underline hover:text-pink-300">
              Ver tudo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
