import React from 'react';
import Genre from '../../components/Genre';
import { useState, useEffect } from 'react';
import { getGenres } from '../../services/genres.services';

/* importa la capa de servicio donde sea hace la llamada a la api */

export const Generos = (props) =>{

  const [genres, setGenres] = useState(null); /* setear el estado en null */
  
 const [cambiarColor , setCambiarColor] = useState(null);  

   /* Efecto que se dispara solo al renderizar por primera vez el componente, se encarga de hacer las llamadas a las APIs */
 
   useEffect(() => {/* monta el api al componente por primera vez */
   const fetchGenres =  async() =>{
    return await getGenres()/* pedimos los datos que trae la api por unica vez */
   }
   fetchGenres().then(data => setGenres(data))/* hay que resolver la promesa sino no va a devolver lo que traemos de fetch */
    }, [])/* usar then en esta linea ya que el async await no funciona */
     
    useEffect(() => {
      if (!genres) return;
    /*   console.log(genres); */
    }, [genres]); 
      
    const backgroundChange = () =>  setCambiarColor(!cambiarColor); 

   console.log(cambiarColor);

    return (
        <>
                {/*<!-- Categories in DB -->*/}
             
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={backgroundChange}>Genres in Data Base</h6>
                        </div>
                        { cambiarColor ? 
                        <div className={`card-body ${props.handleMouse}`}>
                            <div className="row">   
                             { 
                                genres?.map((genre ,index)=>{
                                        return  <Genre  genre={genre.name}  key={genre.id}   /> 
                                    })
                                }
                            </div>
                        </div> :
                        <div className={`card-body`}>
                        <div className="row">   
                         { 
                            genres?.map((genre ,index)=>{
                                    return  <Genre  genre={genre.name}  key={genre.id}   /> 
                                })
                            }
                        </div>
                    </div>}
                    </div>
                </div>
           
        </>
    )

}
