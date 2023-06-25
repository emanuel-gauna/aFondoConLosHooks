const BASE_MOViES_IN_DB_API = "http://localhost:3001/api/movies";

export const getMovies = async () => {
     try { 
        const response = await fetch(BASE_MOViES_IN_DB_API);
        const json = await response.json();
         return json.data;  

    } catch (error) {
        console.error("Error while fetching movies");
        return Promise.reject("Error while fetching movies")
    }   
} 
