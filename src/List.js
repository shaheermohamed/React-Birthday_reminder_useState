import React, { useState } from 'react';
import data from './data';

const List = ({people}) => {
const [deletes,setDelete] = useState(data)
const removeItem = (id) => {
  let newPeople = people.filter((person) => person.id !== id)
  console.log(newPeople)
  setDelete(newPeople)


}
  return (
    <>
    {people.map((person)=>{
    return(
      
      <article key={person.id} className='person'>
        <img src={person.image}></img>
        <div>
        <h3>{person.name}</h3>
        <h4>{person.age} years</h4>
        <button onClick={()=> removeItem(person.id)}>delete</button>
        </div>
        
        <br></br>
        <hr></hr>
        </article>
    
    )
  })}
    </>
  );
};

export default List;
