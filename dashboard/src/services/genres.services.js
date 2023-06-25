
const BASE_GENRES_IN_DB_API = "http://localhost:3001/api/genres";

export const getGenres = async () => {
     try { 
        const response = await fetch(BASE_GENRES_IN_DB_API);
        const json = await response.json();
         return json.data;  

    } catch (error) {
        console.error("Error while fetching genres");
        return Promise.reject("Error while fetching genres")
    }   
} 
