import Image from "next/image";
import NavBar from "@/components/nav-bar"; // Ensure the file exists at this path or adjust the path accordingly


export default function Home() {
  return (
    <div>
      <NavBar active="dashboard" />
    </div>
  );
}

