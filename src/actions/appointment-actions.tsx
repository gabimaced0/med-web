import { redirect } from "next/dist/server/api-utils"

const API_URL = "http://localhost:8080/appointments"


async function getAppointment(){
    const response = await fetch("http://localhost:8080/appointments", )
    return await response.json()
}


export default async function createAppointment(initialState:any, formData: FormData) {

    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }
    const options ={
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(API_URL,options )

    redirect("/appointments")
}