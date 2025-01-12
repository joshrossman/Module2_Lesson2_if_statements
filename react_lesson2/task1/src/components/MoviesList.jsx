
import { useState } from 'react';


const MoviesList =() =>{
    const [movies, changeMovies] = useState([{name:'Lion King', about:'A story about a lion',visible:false,genre:"cartoon"}, {name:'Harry Potter',about:'A story about magic',visible:false, genre:'fantasy'},{name:'Snow White', about: 'A story about a princess, a witch, and an apple.',visible:false, genre:'cartoon'},{name:'Gone With The Wind', about: 'A very very very long and old movie',visible:false, genre:'history'}]);
    
    
    function hideAbout(index){
        const newMovies = movies.map((movie,i) => {
            if(i==index){
                return {name:movie['name'], about:movie['about'], visible:false}
            }
            else{
                return movie;
            }
        });
        changeMovies(newMovies) 
    }
    function showAbout(index){
        const newMovies = movies.map((movie,i) => {
            if(i==index){
                return {name:movie['name'],about:movie['about'],visible:true}
            }
            else{
                return movie;
            }
        });
        changeMovies(newMovies);   
    }
    const [genre,changeGenre] = useState(true);
  
    const showAll=()=>{
        return changeGenre(true);

    }
    const showCartoons =() =>{
        return changeGenre(false);

    }

    


    return( 
        genre?
        (
        
        <div>
           
            <button onClick={ ()=> showCartoons()}>Show All</button>
            
            <h2>Click on the movie title, to learn more about it.</h2>
            <ul>
                {movies.map((movie,index) => 
                !movie['visible']? (
                    <li key={index} id={index}>
                    <button id={index} onClick={()=>changeMovies(movies.filter(a=>a.name!==movie.name))}>Remove Movie</button>
                    <p id={index} onClick={()=>showAbout(event.target.id)}>{movie['name']}</p></li>
                    
                 ):
                 (
                    <li key={index} id={index}>
                    <br></br>
                    <button id={index} onClick={()=>changeMovies(movies.filter(a=>a.name!==movie.name))}>Remove Movie</button> 
                    <p id={index} onClick={()=>hideAbout(event.target.id)}>{movie['name']}}<br></br>{movie['about']}</p>
                    </li>
                 )
                 )}
            </ul>
        </div>)
        :  
        (
            <div>
            <button onClick={()=> showAll()}>Show cartoons only</button>
            <h2>Click on the movie title, to learn more about it.</h2>
        <ul>
            {movies.map((movie,index) => !movie['visible'] ? (
                
                <li key={index} id={index}>
                <button id={index} onClick={()=>changeMovies(movies.filter(a=>a.name!==movie.name))}>Remove Movie</button>
                <p id={index} onClick={()=>showAbout(event.target.id)}>{movie['name']}</p></li>
                
             ):
             (
                <li key={index} id={index}>
                <br></br>
                <button id={index} onClick={()=>changeMovies(movies.filter(a=>a.name!==movie.name))}>Remove Movie</button> 
                <p id={index} onClick={()=>hideAbout(event.target.id)}>{movie['name']}<br></br>{movie['about']}</p>
                </li>
             )
             )}
        </ul>
     
        </div>
        )
    );
}
export default MoviesList;