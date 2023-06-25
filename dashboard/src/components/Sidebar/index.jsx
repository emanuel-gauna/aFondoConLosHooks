import React from 'react';
import image from "../../assets/images/logo-DH.png";
import { NavItem } from './components/NavItem';
import { NavItemDh } from './components/NavItemDh';



function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

               <NavItemDh href="/"  icon="fa-tachometer-alt" name="Dashboard - DH movies"/>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>
                   {/*<!-- Nav Item - Search -->*/}
                <NavItem href="/search" icon="fa-solid-glass" name="Busqueda" />
                {/*<!-- Nav Item - genres -->*/}
                <NavItem href="/genres" icon="fa-box" name="Generos" />
                {/*<!-- Nav Item - Charts -->*/}
                <NavItem href="/lastmovie" icon="fa-chart-area" name="Ultima Pelicula" />
            {/*<!-- Nav Item - Tables -->*/}
                <NavItem href="/cards" icon="fa-table" name="Cards Peliculas" />

            

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </>
    )
}
export default SideBar;