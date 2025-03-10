import logo from '../../assets/Logo.png'
import styled from "styled-components"

export const Header = () => {

    return (
        <HeaderComponent>
            <img src={logo} alt="logo" className='logo' />
        </HeaderComponent>
    )
}

const HeaderComponent = styled.header`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: white;
    padding: 10px 30px;

    .logo{
        width: 100px;
    }
`