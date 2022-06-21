import { Experience } from './../../models/experience';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Array<Experience> = [
    { cod: 1,
      position: "IT Analystic",
      company: "Berlin Houses",
      companyLink:"http://berlin.com.ar/",
      begin: moment("2021/09/20", 'YYYY-MM-DD').toDate(),

    },
    { cod: 2,
      position: "Tecnico de reparación",
      company: "Programa EKOA - U.N.L.P.",
      companyLink: "https://www.ekoa.unlp.edu.ar/",
      begin: moment("2018/02/01", 'YYYY-MM-DD').toDate(),
      end: moment("2021/09/19", 'YYYY-MM-DD').toDate(),
    },
    { cod: 3,
      position: "Tutor Universitario ",
      company: "Facultad de Informatica - U.N.L.P.",
      companyLink: "https://www.info.unlp.edu.ar/tutorias/",
      begin: moment("2020/02/01", 'YYYY-MM-DD').toDate(),
      end: moment("2022/04/01", 'YYYY-MM-DD').toDate(),
    },

    { cod: 4,
      position: "Ayudante de Cátedra ",
      company: "Expresión de Problemas y Algoritmos, Facultad de Informatica - U.N.L.P.",
      companyLink: "https://www.info.unlp.edu.ar/tutorias/",
      begin: moment("2021/03/01", 'YYYY-MM-DD').toDate(),
      end: moment("2021/02/01", 'YYYY-MM-DD').toDate(),
    },
    { cod: 5,
      position: "Desarrollador Web",
      company: "Freelance",
      begin: moment("2018/02/01", 'YYYY-MM-DD').toDate(),
      end: moment("2021/09/18", 'YYYY-MM-DD').toDate(),
    },


  ];
  constructor() { }
  getYear(date:Date){
    return moment(date).format('YYYY')
  }
  ngOnInit(): void {
  }

}
