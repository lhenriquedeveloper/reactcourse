import { useState } from "react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";


import Header from "../../components/Header";
import Title from "../../components/Title";
import "../../styles/css/dashboard.css";


export default function Dashboard() {
    const [chamados, setChamados] = useState([1]);



    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Atendimento">
                    <FcAbout size={25} />
                </Title>
            </div>


            {chamados.length === 0 ? (
                <div className="container content dashboard">
                    <span>Nenhum chamado registado...</span>

                    <Link to="/new" className="new">
                        <FiPlus size={25} color="#FFF" />
                        Novo chamado
                    </Link>
                </div>
            ) :
                (
                    <div className="container content dashboard">
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="#FFF" />
                            Novo chamado
                        </Link>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Cadastrado em:</th>
                                    <th scope="col">#</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td data-label="Cliente">Escola</td>
                                        <td data-label="Assunto">Suporte</td>
                                        <td data-label="Status">
                                            <span className="badge" style={{ backgroundColor: '#5cb85c' }}>Em aberto</span>
                                        </td>
                                        <td data-label="Cadastado">08/05/2022</td>
                                        <td data-label="#">
                                            <button style={{ backgroundColor: '#3586f6' }}>
                                                <FiSearch color="#fff" size={17} />
                                            </button>
                                            <button style={{ backgroundColor: '#f6a935' }}>
                                                <FiEdit2 color="#fff" size={17} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                )
            }

        </div >
    )
}