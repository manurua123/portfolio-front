import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Grid, Pagination } from "swiper";
import { Education } from 'src/app/models/education';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';

SwiperCore.use([Pagination, Grid]);

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  courses: Array<Education> = [
    {
      cod: 1,
      career: "Licenciatura en Sistemas",
      university: "Facultad de Informatica - U.N.L.P.",
      description: "El perfil del graduado en la Licenciatura en Sistemas es el de un profesional orientado especialmente al mercado vinculado con los sistemas informáticos, en particular los aspectos propios del manejo de software y datos dentro de una organización. La formación básica permite también una participación en actividades de Investigación, Desarrollo e Innovación dentro de la disciplina.",
      img: "assets/img/logos/infoUNLP.png",
      link: "https://www.info.unlp.edu.ar/licenciatura-en-sistemas/",
      begin: moment("2018/01/30", 'YYYY-MM-DD').toDate(),
      progress: 33,

    },
    {
      cod: 4,
      career: "Yo Programo",
      university: "Ministrerio de Desarrollo Productivo",
      description: "La segunda etapa de Argentina Programa te permitirá profundizar tus conocimientos y adquirir las habilidades y herramientas necesarias para convertirte en un programador web full-stack junior. El curso se realiza a través de una plataforma virtual. De esta manera, la mayor parte del curso es autogestionado para que puedas ajustar los tiempos de acuerdo a tu disponibilidad.",
      img: "assets/img/logos/argentinaPrograma.png",
      link: "https://www.argentina.gob.ar/produccion/argentina-programa/segunda-etapa",
      begin: moment("2022/01/30", 'YYYY-MM-DD').toDate(),

      progress: 75,
    },
    {
      cod: 3,
      career: "React Js",
      university: "Coderhouse",
      description: "En este curso, que es el tercer nivel de la carrera de programación, aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos. Asimismo, aplicarás el manejo de rutas utilizando Firebase, y comprenderás la utilización del virtual DOM mediante los desarrollos de React JS. ",
      img: "assets/img/logos/coderhouse.png",
      link: "https://www.coderhouse.com/",
      certification: "https://www.coderhouse.com/certificados/609d9209c2a005000f31c0cb",
      begin: moment("2021/01/30", 'YYYY-MM-DD').toDate(),

      progress: 100,
    },
    {
      cod: 4,
      career: "Sé Programar",
      img: "assets/img/logos/argentinaPrograma.png",
      university: " Ministrerio de Desarrollo Productivo",
      description: "La primera etapa de Argentina Programa es un curso introductorio en el que vas a aprender los fundamentos básicos de la programación para dar tus primeros pasos en el mundo tecnológico. El curso se realiza a través de una plataforma digital de manera totalmente asincrónica, permitiendo ajustar tus tiempos de acuerdo a tu disponibilidad. ",
      link: "https://www.argentina.gob.ar/produccion/argentina-programa/primera-etapa",
      certification: "https://mumuki.io/argentina-programa/certificates/verify/iZr96H7sqtjE2Gid",
      begin: moment("2021/01/30", 'YYYY-MM-DD').toDate(),

      progress: 100,
    },
    {
      cod: 4,
      career: "Diseño Web ",
      university: "Alconada IT",
      description: "Desarrollar sitios web, en HTML5, CSS3, adaptar librerías Jquery. Sitios adaptados a dispositivos móviles. Última tendencia del maquetado con Flexbox y Bootstrap. También aprenderás temas de marketing, newsletter, experiencia de usuario y posicionamiento en Google.El alumno será capaz por sí solo de desarrollar cualquier sitio web, de manera profesional y con las últimas tecnologías.",
      img: "assets/img/logos/alconada-it-2.png",
      link: "https://www.alconadadiseno.com.ar/index.html",
      begin: moment("2019/01/30", 'YYYY-MM-DD').toDate(),

      progress: 100,
    },


  ];
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openDialog(data?: Education) {
    let dialogRef = this.dialog.open(EducationDialogComponent);
    let instance = dialogRef.componentInstance;
    if (data) {
      instance.isDetailed = true;
      instance.dataRef = data
    }
    else {
      instance.isDetailed = false;
    }
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

