import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{lable:"comfort food",
                    value:"1"},
                    {lable:"BBQ",
                    value:"2"},
                    {lable:"Dessert",
                    value:"3"}];

const [boardName, setBoardName] = useState('no boards yet!');

const handleChange = (event) => {
   setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(obj =>{
            return(
               <option> 
                {obj.lable}</option>
            )
         }
         )}
         
           
      
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}