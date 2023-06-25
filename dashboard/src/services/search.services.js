const apiKey = '866d74fa'
const BASE_MOViES_IN_DB_API = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

export const  getMoviesSearch = async () => {
    try { 
       const response = await fetch(BASE_MOViES_IN_DB_API);
       const json = await response.json();
        return json;  

   } catch (error) {
       console.error("Error while fetching movies");
       return Promise.reject("Error while fetching movies")
   }   
}