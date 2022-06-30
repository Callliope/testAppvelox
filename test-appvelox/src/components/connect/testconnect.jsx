import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./testconnect.css";
function Blog(props) {
  const content = props.posts.map((post) => (
    <div className="showappointmentblock" key={post.id}>
      <p>{post.day}</p>
      <p>{post.date}</p>
      <p>{post.time}</p>
      <p>{post.buildingname}</p>
      <p>{post.adress}</p>
      <p>{post.doctorname}</p>
      <p>{post.position}</p>.<button>Отменить</button>
    </div>
  ));
  return <div>{content}</div>;
}

const posts = [
  {
    id: 0,
    day: "Понедельник",
    date: "15.06.20",
    time: "15:30",
    buildingname: 'СПБ ГБУЗ "Городская поликлиника №25"',
    adress: "пр. Солидарности, д. 1, к. 1, лит. А",
    doctorname: "Малушко Т. Н.",
    position: "Хирургия",
  },
  {
    id: 1,
    day: "Понедельник",
    date: "15.06.20",
    time: "18:30",
    buildingname: 'СПБ ГБУЗ "Городская поликлиника №25"',
    adress: "пр. Солидарности, д. 1, к. 1, лит. А",
    doctorname: "Харьков В. С.",
    position: "Терапевтическое отделение",
  },
  // {   id:2,
  //     day:"Вторник",
  //     date:"30.06.20",
  //     time :"12:10",
  //     buildingname:"СПБ ГБУЗ \"Городская поликлиника №25\"",
  //     adress:"пр. Солидарности, д. 1, к. 1, лит. А",
  //     doctorname:"Малушко Т. Н.",
  //     position:"Хирургия"
  // },
  // {   id:3,
  //     day:"Четверг",
  //     date:"02.07.20",
  //     time :"12:30",
  //     buildingname:"СПБ ГБУЗ \"Городская поликлиника №25\"",
  //     adress:"пр. Солидарности, д. 1, к. 1, лит. А",
  //     doctorname:"Малушко Т. Н.",
  //     position:"Хирургия"
  // }
];

export default function testconnect2() {
  return (
    <div className="connectblock">
      <Blog posts={posts} />
      <div>
        <p>Еще 3 записи</p>
      </div>
    </div>
  );
}
