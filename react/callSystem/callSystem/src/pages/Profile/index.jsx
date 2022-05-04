import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../styles/css/profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FcSettings } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";
import avatarDefault from '../../assets/avatar.png';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';



export default function Profile() {
    const { user, signOut, setUser, storageUser } = useContext(AuthContext);
    const [name, setNome] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    //Funcão para preview da Imagem
    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg' || image.type === "image/png") {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }
            else {
                toast.error('Envie uma imagem PNG ou JPEG', {
                    position: "top-left",
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                setImageAvatar(null);
                return null;
            }
        }
    }

    //Função para atualização da imagem no firebase, storage e contextos
    async function handleUpload() {
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
            .ref(`images/${currentUid}/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {
                console.log("Foto enviada com sucesso");

                await firebase.storage().ref(`images/${currentUid}`)
                    .child(imageAvatar.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url;

                        await firebase.firestore().collection("users")
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                name: name
                            })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                    name: name
                                }
                                setUser(data);
                                storageUser(data);
                            })
                    })
            })
    }

    //Função de salvar alterações -  Condicional: Alterar somente o nome ou Foto + Nome
    async function handleSave(e) {
        e.preventDefault();

        if (imageAvatar === null && nome !== '') {
            await firebase.firestore().collection('')
                .doc(user.uid)
                .update({
                    name: name
                })
                .then(() => {
                    let data = {
                        ...user,
                        name: name,
                    }
                    setUser(data);
                    storageUser(data);
                })
        }
        else if (name !== '' && imageAvatar !== null) {
            handleUpload();
        }
    }


    return (
        <div>
            <Header />
            <div className='content'>
                <Title name="Meu Perfil">
                    <FcSettings size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleSave}>
                        <label className='label-avatar' >
                            <span>
                                <FiUpload color="#fff" size={25} />
                            </span>

                            <input type="file" accept='image/*' onChange={handleFile} /><br />
                            {
                                avatarUrl === null ?
                                    <img src={avatarDefault} alt="Avatar Padrão" width="250" height="250" />
                                    :
                                    <img src={avatarUrl} alt="Avatar do Usuário" width="250" height="250" />
                            }
                        </label>

                        <label>Nome: </label>
                        <input type="text" value={name} onChange={(e) => { setNome(e.target.value) }} />

                        <label>Email: </label>
                        <input type="email" value={email} disabled={true} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>

                <div className='container'>
                    <button className='logout-btn' onClick={() => { signOut() }}>Sair </button>
                </div>

            </div>
        </div>
    )
}