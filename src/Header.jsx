import React from "react";
import header from './header.css'

export default function Header(){

    return(
        <div>
           <header>
               <nav>
                   <a className='primeiroLink' href="#">Home</a>
                   <a href="#"> Perfil</a>
               </nav>
           </header>
        </div>
    )
}