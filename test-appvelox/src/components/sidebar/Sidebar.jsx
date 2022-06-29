import React from 'react';
import "./sidebar.css";
import logopic from '../../assets/logo.png';
import heartpic from '../../assets/heart (2) 1.png';
import medicalpic from '../../assets/Vector.png';
import messagepic from '../../assets/speak 1.png';
import testpic from '../../assets/Group.png' ;
import polesnopic from '../../assets/polesno.png';
import helppic from '../../assets/help.png';

export default function sidebar() {
  return (
    <div>
      <div class="sidenav">
  <div   id='topblock'><a href="#">Логотип</a></div>

  <div class='sidebarBlock'id='chosensection' >
  <a  href="#" id='chosentext' >
      <img src={heartpic} alt="search icon"   class="sidebaricon "></img>Профиль</a>
  </div>

  <div class='sidebarBlock'><a  href="#">
      <img src={medicalpic} alt="search icon"  class="sidebaricon  "></img>Врачи и клиники</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={messagepic} alt="search icon"  class=" sidebaricon"></img>Сообщения</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={testpic} alt="search icon"  class=" sidebaricon"></img>Тестирование</a></div>

  <div class='sidebarBlock'><a  href="#">
      <img src={polesnopic} alt="search icon"  class=" sidebaricon"></img>Полезно знать</a></div>

    <div><button class='buttonStyle'>Подать заявку</button></div>
    <div class="bottomElement" >
  <div><a  href="#">
      <img src={helppic} alt="search icon"  class='sidebaricon' ></img>Помощь</a></div>

  <img src={logopic} alt="appvelox logo" id='appveloxlogo'></img>
  </div>
</div>
    </div>
  )
}
