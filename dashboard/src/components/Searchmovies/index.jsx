import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { getMoviesSearch } from '../../services/search.services';



/* import noPoster from '../assets/images/no-poster.jpg'; */

function SearchMovies(){
	
	const [keyword, setKeyword] = useState("");
	const [ movies, setMovies] = useState([]);
	const busqueda = useRef();
	const apiKey = '866d74fa'; // Intenta poner cualquier cosa antes para probar'; // Intenta poner cualquier cosa antes para probar
	console.log(busqueda);
	
	/* const movies = [
	{
		"Title": "Parchís",
		"Year": "1983",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
	},
	{
		"Title": "Brigada en acción",
		"Year": "1977",
		"Poster": "N/A"
	} 
	] */

	useEffect(()=>{
		const fetchMovies = async ()=>{ /* funcion q retorna el la api */
		return await getMoviesSearch();
		}
		fetchMovies().then(data => setMovies(data))/*  ejecutamos la funcion y  */
	}, [])

	useEffect(() => {
		if (!movies) return;
		console.log(movies);
	  }, [movies]); 
		
	  useEffect(()=>{
		if(!keyword) return;
		console.log(keyword)
	  })

	  const datos = e =>{
		e.preventDefault();
	fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
	.then(response => response.json())
	.then(data =>{
		const { Search } = data;
		setMovies(Search)
	})
	  }

	const  handlechange =  (e) =>{
		e.preventDefault();
		setKeyword(busqueda.current.value)
		console.log(busqueda.current.value)
	}


	// Credenciales de API

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET"  onSubmit={datos}   >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text"   onChange={handlechange}  className="form-control" ref={busqueda} />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						
			
						
						 {
							 movies.length > 0 && movies.map((movie, i) => { 
								 return ( 
									<div className="col-sm-6 col-md-3 my-4" key={movie.id} >
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title}  
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
						
									</div>
								 ) 
						}) 
						}
					</div>
					{ (movies.length === 0 || movies.length === undefined) && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}


export default SearchMovies;
