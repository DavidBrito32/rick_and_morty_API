import { styled } from 'styled-components';
import Logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { HooksContext } from '../../context/hooksContext';
const Header = () => {
    const {page, mudaPage} = useContext(HooksContext);


    return (
        <>
            <ContainerHeader>
                <div className="logo">
                    <img src={Logo} alt="logo_rick" />
                </div>

                {page === "home" ? (<Link onClick={mudaPage} to={"/my-characters"}>Meus Personagens</Link>) : (<Link onClick={mudaPage} to={"/"}>Ir para a Home</Link>)}
            </ContainerHeader>
        </>
    );
};

const ContainerHeader = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: var(--Blue_Rick);
    border: 2px dashed var(--Green_Border_Rick);
    backdrop-filter: blur(5px);

        & .logo{
            width: 250px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
                & img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
        }

        & a{
            width: 250px;
            height: 50px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--Yelow_Rick);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--Red_Rick);
            transition-duration: 100ms;

                &:hover{
                    background-color: var(--Yelow_Rick_Hover);
                    color: var(--Red_Rick_Hover);
                }

                &:active{
                    scale: .97;
                }
        }

        @media only screen and (max-width: 480px) {
            padding: 0 20px;
            & .logo{
                width: 70px;
                height: 70px;
            }

            & a{
                width: 110px;
                height: 30px;

                    font-size: .8rem;
            }
        }
`;

export default Header;