import React from 'react';
import "./navbar.css";
import searchpic from "../../assets/search.png";
import bellpic from "../../assets/bell.png";
import eyepic from "../../assets/eye 1.png";
import profilepic from "../../assets/profilepic.png";
import openpic from '../../assets/open.png';




export default function navbar() {
  return (
    <div > 
    <nav class="navbar navbar-expand-lg navbarstyle ">
  <div class="container-fluid" >
    <a class="navbar-brand textcolor topText" href="#">Мой профиль</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
        <form class="d-flex">
        <a class="navbar-brand" href="#">
      <img src={searchpic} alt="search icon"  class="d-inline-block  iconStyle"></img>
    </a>
    <a class="navbar-brand" href="#">
      <img src={bellpic} alt="bell icon"  class="d-inline-block  iconStyle"></img>
    </a>
    <a class="navbar-brand" href="#">
      <img src={eyepic} alt='eye icon'  class="d-inline-block  iconStyle"></img>
    </a>
    <a class="navbar-brand" href="#">
      <img src={profilepic} alt='Profile picture'  class="d-inline-block  profileStyle"></img>
     
    </a>
    
    <a class="navbar-brand" href="#">
      <img src={openpic} alt='open icon'  class="d-inline-block  iconStyle"></img>
    </a>

    </form>
    
  </div>
</nav>
  </div>
  )
}
