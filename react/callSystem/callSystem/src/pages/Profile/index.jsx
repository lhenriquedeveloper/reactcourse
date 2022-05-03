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

    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg' || image.type === "image/png") {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }
            else {
                toast.error('Envie uma imagem PNG ou JPEG', {
                    position: "top-center",
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
            }
        }
    }

    function handleUpload() {

    }

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
        else if (nome !== '' && imageAvatar !== null) {
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