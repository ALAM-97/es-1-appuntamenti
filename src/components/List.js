import React, { useState } from "react";
// style
import style from './List.module.css';
// components
import ListItem from './ListItem';


const DUMMY_LIST = [
  {
    id: 1,
    nome: "Francesco Robiola",
    stato: "No pain no Gain XOXO PALESTRA MUSCOLI POTENZA",
    img:
      "https://res.cloudinary.com/thomasdea/image/upload/v1612341193/react-api-course/tizio-palestra_naoqwo.jpg",
  },
  {
    id: 2,
    nome: "Sabrina Cortelli",
    stato: "La musica è per l'anima quello che la ginnastica è per il corpo.",
    img:
      "https://res.cloudinary.com/thomasdea/image/upload/v1612341197/react-api-course/tizia-cuffie_xf2bae.jpg",
  },
  {
    id: 3,
    nome: "Mike Russel",
    stato: "Non permettere a nessuno di dirti che non sei capace",
    img:
      "https://res.cloudinary.com/thomasdea/image/upload/v1612341184/react-api-course/tizio-giacca_jvzktv.jpg",
  },
  {
    id: 4,
    nome: "Rebecca Orlando",
    stato:
      "La fotografia è passione e amore, è l’emozione passeggera, che arriva e subito vola via.",
    img:
      "https://res.cloudinary.com/thomasdea/image/upload/v1612341204/react-api-course/tipa-occhiali_svc9jp.jpg",
  },
  {
    id: 5,
    nome: "Christian Minerva",
    stato: "Non mangerei un hamburger nemmeno se mi pagassero 40,000 dollari",
    img:
      "https://res.cloudinary.com/thomasdea/image/upload/v1612341200/react-api-course/tizio_awlq7r.jpg",
  },
];


const List = () => {

  const [list, setList] = useState(DUMMY_LIST)
  
  const reloadHandler = () => {
    setList(DUMMY_LIST);
  }

  const deleteAllHandler = () => {
    setList([]);
  }

  const deleteListItem = (id) => {
    let newList = list.filter((el) => el.id !== id);
    setList(newList);
  }


  return ( 
    <React.Fragment>
    <div className={ style.card }>
      <ul>
        { list.map(item => (
          <ListItem
            key={ item.id }
            id={ item.id }
            nome={ item.nome }
            stato={ item.stato }
            img={ item.img }
            deleteListItem={ deleteListItem }
          />
        ))}
      </ul>
    </div>
    <div className={ style.buttons }>
      <button className={ style.reload } onClick={ reloadHandler }>RELOAD</button>
      <button className={ style.delete } onClick={ deleteAllHandler }>DELETE ALL</button>
    </div>
    </React.Fragment>
  );
}

export default List;