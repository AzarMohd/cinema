import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard.jsx';


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie1={
  Poster: "N/A",
  Title: "The Amazing Spiderman T4 Premiere Special",
  Type: "movie",
  Year: "2012",
  imdbID: "tt2233044",
}
const App =()=>{
  const[movies,setmovies] = useState([]);
  const[searchTerm,setSearchTerm]= useState('');

    const searchMovies = async(title)=>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      // console.log(data.Search);
      setmovies(data.Search);

    }
    useEffect(()=>{
      searchMovies('Terminator');
    },[])
  return (
    
      <div className='app'>
        <h1>TamilRockers</h1>
        <div className='search'>
          <input 
          placeholder='Search for movies'
          value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)} />
          <img 
          src={SearchIcon} 
          alt= 'search' 
          onClick={()=>searchMovies(searchTerm)} />
          </div>
     
       {
         movies?.length>0
         ?
         (
           <div className='container'>
             {movies.map((movie) =>
              (<MovieCard movie= {movie}/>))}
         </div> )
         :
        (<div className='empty'>
          <h2>No movies found</h2>
        </div>)
         
       }
   
</div>
   
  );
}

export default App;
