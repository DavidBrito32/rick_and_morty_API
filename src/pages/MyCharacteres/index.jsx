/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { HooksContext } from "../../context/hooksContext";
import Card from "../../components/Card";

const MyCharacteres = () => {
    const {character, setPage, page} = useContext(HooksContext);
    useEffect(()=>{
        setPage("personagens");
    }, [page]);

    return (
        <>
            <ContainerCharacteres>
                <h1>Meus personagens favoritos</h1>
                <ul>
                    {character.map((personagem) => (
                        <li key={personagem.id}><Card personagem={personagem} exc={true}/></li>
                    ))}
                </ul>
            </ContainerCharacteres>
        </>
    )
}

const ContainerCharacteres = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15vh);
    background: linear-gradient(to bottom, #160440, #333333);

        & h1{
            padding-top: 100px;
            padding-left: 30px;
            color: #ffffff;
        }

        & ul{
            width: 100%;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

                & li{
                    width: 350px;
                    height: 450px;
                    border-radius: 12px;
                }
        }

        @media only screen and (max-width: 480px){
            padding: 0 20px;

                & h1{
                    padding-top: 10px;
                    font-size: 1.5rem;
                    text-align: center;
                }
        }
`;

export default MyCharacteres;