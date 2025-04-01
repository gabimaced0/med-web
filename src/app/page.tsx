import AppointmentItem from "@/components/appointment-item";
import NavBar from "@/components/nav-bar";
import { appRouterContext } from "next/dist/server/route-modules/app-route/shared-modules";


export default function AppointmentPage() {
  return (
    <>
      <NavBar active="agendamento" />

      <main className="flex justify-center">
        <div className="bg-sky-900 p6 m-6 rounded min-w-1/3">
          <h2>Agendamentos</h2>
          <AppointmentItem/>
          <AppointmentItem/>
          <AppointmentItem/>

        </div>

      </main>
    
    </>
    
  );
}

