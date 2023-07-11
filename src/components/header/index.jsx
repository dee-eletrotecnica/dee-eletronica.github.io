import { Link } from 'react-router-dom'
import { HeaderStyles } from './styles'
import { Home } from '../../pages/home/Home'
import logo from "../../assets/logo.png"

export const Header = () => {

    return (
        <HeaderStyles>
            <div className="header-logo">
                <Link to="/" element={<Home />}>
                    <img src={logo} alt="Departamento de Engenharia Elétrica" />
                </Link>
            </div>
            <div className="header-nav">
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
            </div>
        </HeaderStyles>
    )
}