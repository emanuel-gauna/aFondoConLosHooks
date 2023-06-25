import React from 'react';
import { useState, useEffect } from 'react';
import { getMovies } from '../services/movies.services';
import { MovieList } from './MovieList';

function Movie(){

	const [movies, setMovies] = useState(null); /* setear el estado en null */
  

   
   
   
	  /* Efecto que se dispara solo al renderizar por primera vez el componente, se encarga de hacer las llamadas a las APIs */
	
	  useEffect(() => {/* monta el api al componente por primera vez */
	  const fetchMovies =  async() =>{
	   return await getMovies()/* pedimos los datos que trae la api por unica vez */
	  }
	  fetchMovies().then(data => setMovies(data))/* hay que resolver la promesa sino no va a devolver lo que traemos de fetch */
	   }, [])/* usar then en esta linea ya que el async await no funciona */
		
	   useEffect(() => {
		 if (!movies) return;
		 console.log(movies);
	   }, [movies]); 
		 

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</tfoot>
									{ 
                                movies?.map((movie ,index)=>{
                                        return  <MovieList 
										key={index}
										id={movie.id}
										Titulo={movie.title} 
										Calificación={movie.rating} 
										Premios={movie.awards} 
										Duración={movie.length}  /> 
                                    })
                                }
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;