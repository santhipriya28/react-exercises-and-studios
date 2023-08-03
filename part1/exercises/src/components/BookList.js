export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhCNrojn2Xz_XqbLD9MFRA4eRpwBckFxh_T2HWdPvqGdHgCEOKY1iBU5sDAaCANd4n6IKrliZ-xDBEAoT1cHpqxVdUVaUza3Oc2qKeMVlqDbvzyFlAfvK2&usqp=CAc";
   let book2 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7ULTIdYMQM_MJUoge3pLKsS7zc6TJRnW9S4g7c1pAqCPTLiFRvU7ULu7wYkLGQmJFT6LOO3LX65bBIAJaVUuJIkOejqaICzhjxt3QhA&usqp=CAc";
   let book3 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDjXGjoICp063Br-d6G8e-w9b34J9IyNstNwpKHZnKdVEk8Ro7dOoHn9hIIPlkFF53_Mh8R9k2AMWJF-PDkSLadkpYKskHcZPFR4ueyHNvYuHUz6tDpwve&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Mind of the Leader!" />
         <img src={book2} alt="The Undefined Mind!" />
         <img src={book3} alt="The day that changed everything!" />
      </div>      
   );
}