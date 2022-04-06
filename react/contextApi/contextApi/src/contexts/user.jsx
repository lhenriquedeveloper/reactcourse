import { useState, createContext } from 'react' ;

export const UserContext = createContext({});
 
function UserProvider({children}){
const [nome,setNome]  = useState("Luis Henrique");
const [qtdAlunos, setQtdAlunos] = useState(100);

    
    return(
        <UserContext.Provider value={{ nome, setNome, qtdAlunos, setQtdAlunos }}>     
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;