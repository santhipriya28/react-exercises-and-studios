import data from './../data.json';
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);

    function handleClick() {
    if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else 
   {
      setIndex(0);
   }
   }

   let listItem = data.map((index) => 
   <div key = {index.canvas}>
        <li>{data[index].canvas}</li>
        <li>{data[index].design}</li>
        <li>{data[index].photoUrl}</li>
        <li>{data[index].alt}</li>
   </div>
 

   );
   return(
    <div>
        <button id = "Next" onClick={handleClick}>Next</button>
        {listItem}
    </div>
   );
}
