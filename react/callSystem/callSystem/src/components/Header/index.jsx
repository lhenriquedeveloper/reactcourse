import '../../styles/css/header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import avatarDefault from '../../assets/avatar.png';

import { Link } from 'react-router-dom';
import { FcHome, FcCollaboration, FcSettings } from "react-icons/fc";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatarDefault : user.avatarUrl} alt="Foto de Avatar" />
            </div>
            <Link to="/dashboard">
                <FcHome size={24} />
                Chamados
            </Link>

            <Link to="/customers">
                <FcCollaboration size={24} />
                Clientes
            </Link>

            <Link to="/profile">
                <FcSettings size={24} />
                Configurações
            </Link>
        </div>
    )
}