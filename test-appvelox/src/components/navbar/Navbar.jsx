import React from 'react';
import "./navbar.css";


export default function navbar() {
  return (
    <div> 
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Панель навигации</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Главная</a>
        <a class="nav-link" href="#">Рекомендуемые</a>
        <a class="nav-link" href="#">Цена</a>
        <a class="nav-link disabled">Отключенная</a>
      </div>
    </div>
  </div>
</nav>
  </div>
  )
}