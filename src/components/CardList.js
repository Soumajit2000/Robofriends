import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if(true) {
    throw new Error("Nooooo!"); 
  }
    return (
    <div>
      {
        robots.map((users, i) => {
              return ( 
              <Card 
                key   =  {users.id} 
                id    =  {robots[i].id} 
                name  =  {robots[i].name} 
                email =  {robots[i].email} 
              />
            );
         })
      } 
    </div>
  );
}

export default CardList;
