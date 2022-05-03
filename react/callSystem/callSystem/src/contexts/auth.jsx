// Context de Autenticação.
import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    // Verificando autenticação via LocalStorage.
    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();
    }, [])


    // Função de Login - Firebase
    async function signIn(email, password) {
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                let email = value.user.email;

                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get();

                let data = {
                    uid: uid,
                    name: userProfile.data().name,
                    avatarUrl: userProfile.data().avatarUrl,
                    email: email,
                };

                setUser(data);
                storageUser(data);
                toast.success('Bem vindo de volta !', {
                    theme: "dark",
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setLoadingAuth(false);

            })
            .catch((error) => {
                toast.error('Algo deu errado !', {
                    theme: "light",
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setLoadingAuth(false);
                console.log(error);
            })

    }

    // Função de Cadastro - Firebase
    async function signUp(email, password, name) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                let email = value.user.email

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        name: name,
                        avatarUrl: null,
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            name: name,
                            email: email,
                            avatarUrl: null
                        };
                        setUser(data);
                        storageUser(data);
                        toast.success('Bem vindo a plataforma', {
                            theme: "dark",
                            position: "top-right",
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                console.log(error);
                toast.error('Algo deu errado !', {
                    theme: "light",
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setLoadingAuth(false);
            })
    }

    //Setando Usuário no Local Storage
    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data))
    }

    //Função Logout - Firebase
    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }



    return (
        <AuthContext.Provider value={
            {
                signed: !!user,
                user,
                loading,
                signUp,
                signOut,
                signIn,
                loadingAuth,
                setUser,
                storageUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;