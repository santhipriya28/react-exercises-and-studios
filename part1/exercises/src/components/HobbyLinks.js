function HobbyLinks(){
    let hobbyLinks = ["https://www.bookreading.com/.com","https://www.youthlinc.org/.com"];
   
    return(
        <div>
        <h3>My Hobbies</h3>
        <li><a href ={hobbyLinks[0]}>ReadingBooks</a></li>
        <li><a href ={hobbyLinks[1]}>Donating Books</a></li> 
        </div>
    );
}
export default  HobbyLinks;  