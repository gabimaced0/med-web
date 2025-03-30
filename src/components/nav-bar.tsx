import './nav-bar.css';


interface NavBarProps {
    active: "dashboard" | "agendamento" | "historico"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-4 border-pink-700"

    return (
        <nav className="flex justify-between items-center p-6 bg-sky-950">
            <h1 className="text-2xl font-bold">MEDHEALTH</h1>
            <ul className="flex gap-4">
                <li className={active === "dashboard" ? classActive : ""}>
                    <a href="/dashboard">DASHBOARD</a>
                </li>
                <li className={active === "agendamento" ? classActive : ""}>
                    <a href="/appointment">AGENDAMENTO</a>
                </li>
                <li className={active === "historico" ? classActive : ""}>
                    <a href="/historical">HISTÓRICO</a>
                </li>
                <input className = 'inputSearch'type="search" placeholder="Search" ></input>
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/gabimaced0.png" alt="" />
        </nav>
        
    )
}

