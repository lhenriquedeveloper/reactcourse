import '../../styles/css/profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FcSettings } from "react-icons/fc";


export default function Profile() {

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name="Meu Perfil">
                    <FcSettings size={25} />
                </Title>
            </div>
        </div>
    )
}