import React from 'react';
import Card from '../card-component/Card-component';
 import './CardList.css';



 
function CardList(props){
  
    return(<div  className='card-list'> {
        props.monster.map(monster => <Card key={monster.id} monster={monster}/>)
      }</div>);
   
   

}

export default CardList;
