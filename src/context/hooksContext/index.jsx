/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants";
export const HooksContext = createContext();

export const HooksProvider = ({children}) => {        
    const { data, error, loading } = useFetch(BASE_URL);
    const [character, setCharacter] = useState(JSON.parse(localStorage.getItem('character')) || []);    
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || "home");

    const addPersonagem = (objeto) => {
        const filtro = character.find((item) => item.id === objeto.id);
        filtro === undefined && setCharacter([...character, objeto]);
        localStorage.setItem("character", JSON.stringify([...character, objeto]));
    }
    const excluirPersonagem = (objeto) => {        
        const filtro = character.filter((item) => item.id !== objeto.id);
        localStorage.setItem("character", JSON.stringify(filtro));
        setCharacter(filtro);
    }
    const mudaPage = () => {
        page === "home" ? setPage("personagens") : setPage("home");
        localStorage.setItem('page', JSON.stringify(page));
    }

    return (
        <>
            <HooksContext.Provider
            value={{
                data,
                error,
                loading,
                page,
                setPage,
                mudaPage,
                character,
                addPersonagem,
                excluirPersonagem
            }}
            >
                {children}
            </HooksContext.Provider>
        </>
    )
}