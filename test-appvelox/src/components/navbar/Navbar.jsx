import React from 'react';




export default function navbar() {
  return (
    <div > 
    <nav class="navbar navbar-expand-lg navbarcolor ">
  <div class="container-fluid">
    <a class="navbar-brand textcolor" href="#">Мой профиль</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
        <form class="d-flex">
        <a class="navbar-brand" href="#">
      <img src='../..assets/search.png' width="30" height="24" class="d-inline-block align-text-top"></img>
    </a>
    <a class="navbar-brand" href="#">
      <img src="test-appvelox\assets\bell.png"  width="30" height="24" class="d-inline-block align-text-top"></img>
    </a>
    <a class="navbar-brand" href="#">
      <img src="test-appvelox\assets\eye 1.png"  width="30" height="24" class="d-inline-block align-text-top"></img>
    </a>

    </form>
    
  </div>
</nav>
  </div>
  )
}
