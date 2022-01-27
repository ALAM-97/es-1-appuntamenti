import React from "react";
// style
import style from './ListItem.module.css';

const ListItem = (props) => {

  const deleteListItemHandler = () => {
    props.deleteListItem(props.id);
  }

  return ( 
    <div className={ style.listItem }>
      <img src={ props.img } />
      <div className={ style.nameAndDesc } >
        <div>{ props.nome }</div>
        <p>{ props.stato }</p>
      </div>
      <div className={ style.action }>
        <button onClick={ deleteListItemHandler }>X</button>
      </div>
    </div>
  );
}

export default ListItem;