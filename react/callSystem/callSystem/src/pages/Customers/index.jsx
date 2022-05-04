import Title from "../../components/Title";
import Header from "../../components/Header";
import firebase from "../../services/firebaseConnection";
import { FcHome } from 'react-icons/fc'
import { useState } from "react";
import { toast } from "react-toastify";


export default function Customers() {
    const [fantasyName, setFantasyName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [endereco, setEndereco] = useState("");

    async function handleAdd(e) {
        e.preventDefault();

        if (fantasyName !== '' && cnpj !== '' && endereco !== '') {
            await firebase.firestore().collection('customers')
                .add({
                    fantasyName: fantasyName,
                    cnpj: cnpj,
                    endereco: endereco,
                })
                .then(() => {
                    setFantasyName("");
                    setCnpj("");
                    setEndereco("");
                    toast.success('Empresa cadastrada com sucesso', {
                        theme: "dark",
                        position: "top-right",
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                    });
                })
                .catch((e) => {
                    console.log(e);
                    toast.error('Erro ao cadastrar essa empresa', {
                        position: "top-left",
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                    });
                })
        }
        else {
            toast.error('Preencha todos os campos!', {
                position: "top-left",
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
            });
        }
    }


    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Clientes">
                    <FcHome size={25} />
                </Title>
            </div>

            <div className="content container">
                <form className="form-profile customers" onSubmit={handleAdd}>
                    <label>Nome Fantasia:</label>
                    <input type="text" placeholder="Digite o nome da empresa" value={fantasyName} onChange={(e) => { setFantasyName(e.target.value) }} />

                    <label>CNPJ:</label>
                    <input type="text" placeholder="Digite o CNPJ" value={cnpj} onChange={(e) => { setCnpj(e.target.value) }} />

                    <label>Endereço</label>
                    <input type="text" placeholder="Digite o Endereço" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />

                    <button type="submit">Cadastrar empresa</button>

                </form>
            </div>

        </div>
    )
}