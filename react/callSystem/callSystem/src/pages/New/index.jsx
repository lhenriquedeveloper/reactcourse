import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiPlus } from 'react-icons/fi';

export default function New() {
    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlus size={25} />
                </Title>
            </div>

            <div className="container content">

                <form className="form-profile">
                    <select>
                        <option key={1} value={1}>
                            Teste
                        </option>
                    </select>
                </form>
            </div>
        </div>
    )
}