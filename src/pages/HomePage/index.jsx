/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from 'styled-components';
import Card from '../../components/Card';
import { useContext, useEffect } from 'react';
import { HooksContext } from '../../context/hooksContext';

const HomePage = () => {
    const { data, error, loading, setPage, page } = useContext(HooksContext);
    useEffect(()=>{
        setPage("home");
    }, [page]);

    return (
        <>
            <ContainerHome>
                <h1>Desbrave o Universo e colecione seus personagens</h1>

                <ul>
                    {loading && <p>carregando personagens...</p>}
                    {error && <p>ocorreu um erro {error}</p>}
                    {data.results &&
                        data.results.map((personagem) => (
                            <li key={personagem.id}><Card personagem={personagem}/></li>
                        ))
                    }
                </ul>
            </ContainerHome>
        </>
    )
}

const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15vh);
    background: linear-gradient(to bottom, #160440, #333333);
    padding: 0;

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

        @media only screen and (max-width: 768px){
            padding: 0 20px;

                & h1{
                    padding-top: 10px;
                }
        }
`;

export default HomePage;