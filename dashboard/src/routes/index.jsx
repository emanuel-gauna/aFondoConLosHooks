import React from "react";
import {  Route, Routes } from "react-router-dom";
import  { Generos }  from "../pages/Generos";
import { UltimaPelicula } from "../pages/UltimaPelicula";
import { CardsPeliculas } from "../pages/CardsPeliculas";
import { NotFound } from "../pages/NotFound";
import ContentWrapper from "../components/ContentWrapper";
import SearchMovies from "../components/Searchmovies";

export const AppRoutes = () => {
  return (
    <Routes>{/* componente qeu envuelve */}
      <Route path="/" exact={true} element={<ContentWrapper />} /> 
      <Route path="/search" element={<SearchMovies />} />
      <Route path="/genres" exact={true} element={<Generos />} />
      <Route path="/lastmovie" element={<UltimaPelicula />} />  
      <Route path="/cards" element={<CardsPeliculas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
