import firebase from "../../services/firebaseConnection";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "../../styles/css/dashboard.css";
import format from "date-fns/format";


const listRef = await firebase.firestore().collection('chamados').orderBy('created', 'desc')

export default function Dashboard() {
    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [lastDocs, setLastDocs] = useState();

    useEffect(() => {
        loadChamados();

        return () => {

        }
    }, [])

    async function loadChamados() {
        await listRef.limit(5)
            .get()
            .then((snapshot) => {
                updateState(snapshot)
            })
            .catch((error) => {
                console.log(error);
                setLoadingMore(false);
                setLoading(false);
            })
        setLoading(false);
    }

    async function updateState(snapshot) {
        const isCollectionEmpty = snapshot.size === 0;
        if (!isCollectionEmpty) {
            let list = [];

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    status: doc.data().status,
                    created: doc.data().created,
                    createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    complemento: doc.data().complemento,
                })
            })

            const lastDoc = snapshot.docs[snapshot.docs.length - 1];

            setChamados(chamados => [...chamados, ...list]);
            setLastDocs(lastDoc);
        }
        else {
            setIsEmpty(true);
        }
        setLoadingMore(false);
    }

    if (loading) {
        return (
            <div>
                <Header />
                <div className="content">
                    <Title name="Atendimento">
                        <FcAbout size={25} />
                    </Title>
                </div>

                <div className="container content dashboard">
                    <span>Buscando chamados ... </span>
                </div>
            </div>


        )
    }



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
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label="Cliente">{item.cliente}</td>
                                            <td data-label="Assunto">{item.assunto}</td>
                                            <td data-label="Status">
                                                <span className="badge" style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}>{item.status}</span>
                                            </td>
                                            <td data-label="Cadastado">{item.createdFormated}</td>
                                            <td data-label="#">
                                                <button className="dash-button" style={{ backgroundColor: '#3586f6' }}>
                                                    <FiSearch color="#fff" size={17} />
                                                </button>
                                                <button className="dash-button" style={{ backgroundColor: '#f6a935' }}>
                                                    <FiEdit2 color="#fff" size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                )
            }

        </div >
    )
}