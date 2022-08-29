import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthSerivice } from 'src/app/services/auth.service';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  userAuth$: Observable<User>
  dataSource: any;
  constructor( private postService: PostService, private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {
    this.updateTable()

  }
  updateTable() {
    this.postService.getAll().subscribe(data => { this.dataSource = data })
  }



  save(){
    const item={
      name:"Berlin Seguimiento",
      img:'/assets/img/portfolio/portfolio-berlinSeguimiento.png',
      link:"https://berlin.com.ar/seguimiento/#/",
      description:"Permite a los clientes visualziar el estado de su obra mediante una integracion con Monday.com"
    }
    this.postService.save(item).subscribe()
  }

}
