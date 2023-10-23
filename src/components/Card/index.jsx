/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import "boxicons";
import { Link } from "react-router-dom";
import { convertNumber, verifyAlive } from "../../services";
import bulsula from './assets/bulsula.gif';
import alien from './assets/alien.gif';
import terra from './assets/terra.gif';
import black_hole from './assets/black_hole.gif';
import { useContext, useEffect, useState } from "react";
import { HooksContext } from "../../context/hooksContext";

const Card = ({personagem, exc}) => {
  const {character, addPersonagem, excluirPersonagem} = useContext(HooksContext);
  const [adicionar, setAdicionar] = useState(true);
  const [excluir, setExcluir] = useState(exc);

  useEffect(()=>{
    character.find((item) => item.id === personagem.id) === undefined ? setAdicionar(true) : setAdicionar(false);
  }, [character]);

  const adPer = () => {
    character.find((item) => item.id === personagem.id) === undefined ? setAdicionar(true) : setAdicionar(false); 
    addPersonagem(personagem);  
  };

  const exPer = () => {
    excluirPersonagem(personagem);
    setExcluir(false);
  };

  const verifiryType = (type) => {
      if(type.toLowerCase() === "alien"){
        return alien;
      }else if(type.toLowerCase() === "human"){
        return terra;
      }else{
        return black_hole;
      }
  }

  const colorCard = (type) => {
    if(type.toLowerCase() === "human"){
      return "#ffbb73"
    }else if(type.toLowerCase() === "alien"){
      return "#ba71ff"
    }
  }


  return (
    <>
      <CardContainer $image={verifiryType(personagem.species)} $bg={colorCard(personagem.species)}>
        <div className="image">
          <img className="rodar"
            src={personagem.image}
            alt=""
          />
        </div>
        <div className="texto">
          <h4>CARD: #{convertNumber(personagem.id)}</h4>
          <h2>
            {personagem.name}
            <span>
              {personagem.status}
              <div className={`status ${verifyAlive(personagem.status)}`}></div>
            </span>
          </h2>
          <h5>Tipo: <span>{personagem.species}</span></h5>
          <h3>Ultima Localização</h3>
          <p>{personagem.origin.name} <img src={bulsula} alt="" /></p>
          <h3>Visto pela primeira vez em: </h3>
          <p>
          {personagem.location.name}
          {adicionar && 
          (<Link onClick={adPer}>
              <box-icon type='solid' name='save'></box-icon>
            </Link>)}
          {excluir && 
            (<Link onClick={exPer}>
            <box-icon name='trash' color={"red"}></box-icon>
            </Link>)}
          </p>
        </div>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${props => props.$bg || "#333333"};
  border-radius: 12px;
  transition-duration: 200ms;

    &.active{
      visibility: hidden;
      opacity: 0;
      position: absolute;
    }

  &:hover{
    .image{
      & img{
        animation: rotacao 1s linear  alternate-reverse;       
      }
    }
  }

  & .image {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;
    transition-duration: 400ms;
    
    & img {
      top: 30%;
      display: block;
      position: absolute;
      width: 160px;
      height: 160px;
      left: 0;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition-duration: 400ms;     
    }
  }

  & .texto {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 40%;
    margin-top: 80px;
    padding: 5px 10px 0;

    & h4 {
      color: var(--Red_Rick);
    }

    & h2,
    & h4,
    & h3 {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
    }

    & h2 {
      & span {
        display: flex;
        align-items: center;
        gap: 10px;

        & .status {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          animation: pisca 1s linear infinite alternate-reverse;

          &.alive {
            background-color: green;
          }

          &.dead {
            background-color: red;
          }

          &.unknown {
            background-color: #737373;
          }
        }
      }
    }

    & p {
      font-style: italic;
      position: relative;
      display: flex;
      align-items: center;

        & img{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-left: 30px;
        }
      & box-icon {
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 40px;
        height: 40px;
        fill: #00855b;
        transition-duration: 200ms;

            &:hover{
                scale: 1.1;
                fill: #07df48;
            }
      }
    }
  }

  @keyframes pisca {
    from {
      scale: 0.7;
    }
    to {
      scale: 1;
    }
  }

  @keyframes rotacao {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export default Card;
