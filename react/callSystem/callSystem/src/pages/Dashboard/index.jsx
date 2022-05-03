import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from "../../components/Header";
import "../../styles/css/dashboard.css";

export default function Dashboard() {

    return (
        <div>
            <Header />
            <h1>Página de Dashboard</h1>
        </div>
    )
}