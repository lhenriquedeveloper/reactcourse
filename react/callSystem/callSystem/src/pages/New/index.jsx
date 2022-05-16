import firebase from "../../services/firebaseConnection";
import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";
import { FiPlus } from 'react-icons/fi';
import "../../styles/css/new.css";
import { useHistory, useParams } from "react-router-dom";

export default function New() {
    const { id } = useParams();
    const history = useHistory();


    const [customerSelected, setCustomersSelected] = useState(0);
    const [loadingCustomers, setLoadingCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState("");
    const [idCustomer, setIdCustomer] = useState(false);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        async function loadCustomers() {
            await firebase.firestore().collection('customers')
                .get()
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            fantasyName: doc.data().fantasyName,
                        })
                    })
                    if (lista.length === 0) {
                        console.log("Nenhuma Empresa Encontrada");
                        setLoadingCustomers(false);
                        setCustomers([{
                            id: 1,
                            fantasyName: ''
                        }])
                        return;
                    }
                    else {
                        setCustomers(lista);
                        setLoadingCustomers(false);
                    }

                    if (id) {
                        loadId(lista);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoadingCustomers(false);
                    setCustomers([{
                        id: 1,
                        fantasyName: ''
                    }])
                })
        }

        loadCustomers();
    }, [])

    async function loadId(lista) {
        await firebase.firestore().collection('chamados')
            .doc(id)
            .get()
            .then((snapshot) => {
                setAssunto(snapshot.data().assunto);
                setStatus(snapshot.data().status);
                setComplemento(snapshot.data().complemento);

                let index = lista.findIndex(item => item.id === snapshot.data().cliente);
                setCustomersSelected(index);
                setIdCustomer(true);
            })
            .catch((error) => {
                console.log(error);
                setIdCustomer(false);
            })
    }

    async function handleRegister(e) {
        e.preventDefault();

        if (idCustomer) {
            await firebase.firestore().collection('chamados')
                .doc(id)
                .update({
                    cliente: customers[customerSelected].fantasyName,
                    clienteId: customers[customerSelected].id,
                    assunto: assunto,
                    status: status,
                    complemento: complemento,
                    userId: user.uid
                })
                .then(() => {
                    toast.success('Chamado editado com sucesso', {
                        theme: "dark",
                        position: "top-right",
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                    });
                    setCustomersSelected(0);
                    setComplemento('');
                    history.push('/dashboard');
                })
                .catch((error) => {
                    console.log(error);
                })
            return;
        }


        await firebase.firestore()
            .collection('chamados')
            .add({
                created: new Date(),
                cliente: customers[customerSelected].fantasyName,
                clienteId: customers[customerSelected].id,
                assunto: assunto,
                status: status,
                complemento: complemento,
                userId: user.uid
            })
            .then(() => {
                toast.success('Chamado cadastrado com sucesso', {
                    theme: "dark",
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                setComplemento("");
                setCustomersSelected(0);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleChangeCustomers(e) {
        setCustomersSelected(e.target.value);
    }

    function handleChangeSelect(e) {
        setAssunto(e.target.value)
    }

    function handleOptionChange(e) {
        setStatus(e.target.value)
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlus size={25} />
                </Title>
            </div>

            <div className="container content">

                <form className="form-profile" onSubmit={handleRegister}>

                    <label>Cliente:</label>
                    {loadingCustomers ? (
                        <input type="text" disabled={true} value="Carregando Clientes..." />
                    )
                        :
                        (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return (
                                        <option key={item.id} value={index}>
                                            {item.fantasyName}
                                        </option>
                                    )
                                })}
                            </select>
                        )
                    }


                    <label>Assunto:</label>
                    <select value={assunto} onChange={handleChangeSelect}>
                        <option value="Suporte"> Suporte</option>
                        <option value="Visita tecnica">Visita Técnica</option>
                        <option value="Financeiro">Financeiro</option>
                    </select>

                    <div className="status">
                        <input
                            type="radio"
                            name="radio"
                            value="Aberto"
                            onChange={handleOptionChange}
                            checked={status === 'Aberto'}
                        />
                        <span>Em Aberto</span>

                        <input
                            type="radio"
                            name="radio"
                            value="Progresso"
                            onChange={handleOptionChange}
                            checked={status === 'Progresso'}
                        />
                        <span>Em Progresso</span>

                        <input
                            type="radio"
                            name="radio"
                            value="Finalizado"
                            onChange={handleOptionChange}
                            checked={status === 'Finalizado'}
                        />
                        <span>Finalizado</span>
                    </div>

                    <label>Complemento: </label>
                    <textarea onChange={(e) => { setComplemento(e.target.value) }} value={complemento} type="text" placeholder="Descreva seu problema(opcional)" ></textarea>

                    <button type="submit">Registar Chamado</button>

                </form>
            </div>
        </div>
    )
}