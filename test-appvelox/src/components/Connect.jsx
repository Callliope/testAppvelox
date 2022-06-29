import React from 'react';

import { Component } from 'react';
const Connect=(props)=>{
    let appointments= [
        {
            "id":0,
            "day":"Понедельник",
            "date":"15.06.20",
            "time" :"15:30",
            "buildingname":"СПБ ГБУЗ \"Городская поликлиника №25\"",
            "adress":"пр. Солидарности, д. 1, к. 1, лит. А",
            "doctorname":"Малушко Т. Н.",
            "position":"Хирургия"
        },
        {   "id":1,
            "day":"Понедельник",
            "date":"15.06.20",
            "time" :"18:30",
            "buildingname":"СПБ ГБУЗ \"Городская поликлиника №25\"",
            "adress":"пр. Солидарности, д. 1, к. 1, лит. А",
            "doctorname":"Харьков В. С.",
            "position":"Терапевтическое отделение"
        },
        {   "id":2,
            "day":"Вторник",
            "date":"30.06.20",
            "time" :"12:10",
            "buildingname":"СПБ ГБУЗ \"Городская поликлиника №25\"",
            "adress":"пр. Солидарности, д. 1, к. 1, лит. А",
            "doctorname":"Малушко Т. Н.",
            "position":"Хирургия"
        },
        {   "id":3,
            "day":"Четверг",
            "date":"02.07.20",
            "time" :"12:30",
            "buildingname":"СПБ ГБУЗ \"Городская поликлиника №25\"",
            "adress":"пр. Солидарности, д. 1, к. 1, лит. А",
            "doctorname":"Малушко Т. Н.",
            "position":"Хирургия"
        }
    ]
        
  
    let appointmentlistshow=appointments.map((appointment)=><li>{appointment.day}</li>);
    <a>{appointmentlistshow}</a>
}

    
  
  export default Connect;


