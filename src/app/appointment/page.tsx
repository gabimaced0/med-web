import AppointmentItem from "@/components/appointment-item";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function AppointmentPage() {

    const data: Appointment[] = await getAppointment()

    return (
        <>
            <NavBar active="agendamento" />

            <main className="flex justify-center">
                <div className="bg-slate-900 p-6 m-6 rounded min-w-2/3">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Agendamentos</h2>
                        <Button>
                            <Plus />
                            Novo Agendamento
                        </Button>
                    </div>

                    {data.map(appointment => <AppointmentItem key={appointment.id} appointment={appointment} />)}

                    
                </div>
            </main>
        </>
    )
}