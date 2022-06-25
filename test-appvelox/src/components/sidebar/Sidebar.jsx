import React from 'react';
import "./sidebar.css";
import logopic from '../../assets/logo.png';
import heartpic from '../../assets/heart (2) 1.png';
import medicalpic from '../../assets/Vector.png'

export default function sidebar() {
  return (
    <div>
      <div class="sidenav">
  <div class='sidebarBlock'><a href="#">Логотип</a></div>

  <div class='sidebarBlock'>
  <a  href="#">
      <img src={heartpic} alt="search icon"  class=" iconStyle"></img>Профиль</a>
  </div>

  <div class='sidebarBlock'><a  href="#">
      <img src={medicalpic} alt="search icon"  class=" iconStyle"></img>Врачи и клиники</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={heartpic} alt="search icon"  class=" iconStyle"></img>Профиль</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={heartpic} alt="search icon"  class=" iconStyle"></img>Тестирование</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={heartpic} alt="search icon"  class=" iconStyle"></img>Полезно знать</a></div>

    <div><button>Подать заявку</button></div>

  <div><a href="#">Помощь</a></div>

  <img src={logopic} alt="appvelox logo"></img>
</div>
    </div>
  )
}
