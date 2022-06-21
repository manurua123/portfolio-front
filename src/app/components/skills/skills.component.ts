import { Skill, SkillCategory } from './../../models/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<SkillCategory> = [
    {cod:1,
    tittle: 'Diseño',
    skills:[
      {
      cod:1,
      name: "Photoshop",
      img: "assets/img/skills-min/photoshop-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs"
    },
    {
      cod:2,
      name: "Illustrator",
      img: "assets/img/skills-min/illustrator-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi8kcGWl734AhWBuZUCHTNVDmUQFnoECAkQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fillustrator.html&usg=AOvVaw0fuYZBCFwPkhhMiA8WlUdR"
    },
    {
      cod:3,
      name: "Canva",
      img: "assets/img/skills-min/canva-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiO9cmcl734AhW0jZUCHTYuBzUQFnoECAkQAQ&url=https%3A%2F%2Fwww.canva.com%2Fes_419%2F&usg=AOvVaw2q0X6Z6HotQYflgissB1aC"
    },
    {
      cod:2,
      name: "inkscape",
      img: "assets/img/skills-min/Inkscape-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi8kcGWl734AhWBuZUCHTNVDmUQFnoECAkQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fillustrator.html&usg=AOvVaw0fuYZBCFwPkhhMiA8WlUdR"
    },
    {
      cod:21,
      name: "Adobe Xd",
      img: "assets/img/skills-min/adobeXd-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiDm4usn734AhXDgpUCHaMFCcQQFnoECAkQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fxd.html&usg=AOvVaw3AQQ2bTMDrXuA0ObHhFgRW"
    },

    {
      cod:4,
      name: "Figma",
      img: "assets/img/skills-min/figma-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRs5iil734AhU0tJUCHcEMBCwQFnoECA0QAQ&url=https%3A%2F%2Fwww.figma.com%2F&usg=AOvVaw2ixWJnr7CgjXMg3QXfTz4u"
    },
    {
      cod:5,
      name: "invision",
      img: "assets/img/skills-min/invision-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj43sqnl734AhUSupUCHcISB2EQFnoECAUQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Findesign.html&usg=AOvVaw2F_iY854J_Y0BnEU3nkPLM"
    },]
  },
  {cod:2,
    tittle: 'WEB',
    skills:[
      {
      cod:6,
      name: "Angular",
      img: "assets/img/skills-min/angular-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8"
    },
    {
      cod:7,
      name: "html",
      img: "assets/img/skills-min/html-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjPs7WKlr34AhWejZUCHZ7lCHQQFnoECAYQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fes%2Fdocs%2FWeb%2FHTML&usg=AOvVaw3Pj6t8J6Xpbz66Zqfu8mDe"
    },
    {
      cod:8,
      name: "bootstrap",
      img: "assets/img/skills-min/bootstrap-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjAoPqWlr34AhXXvJUCHUydCQUQFnoECBEQAQ&url=https%3A%2F%2Fgetbootstrap.com%2F&usg=AOvVaw3s0qqZzEfHTiGFr9v0jCTN"
    },
    {
      cod:9,
      name: "React",
      img: "assets/img/skills-min/react-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi4gtaelr34AhW-kZUCHQ3kDs0QFnoECA4QAQ&url=https%3A%2F%2Fes.reactjs.org%2F&usg=AOvVaw08kQ5bhhfDJgOeHFrPzEnl"
    },
    {
      cod:10,
      name: "mysqul",
      img: "assets/img/skills-min/mysql-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjjgpSjlr34AhXiqJUCHetuCx4QFnoECAsQAQ&url=https%3A%2F%2Fwww.mysql.com%2F&usg=AOvVaw20c6IrMAtNC1A9NZPsDpWW"
    },
    {
      cod:11,
      name: "wordpress",
      img: "assets/img/skills-min/wordpress-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwik3ZKplr34AhXds5UCHbD7CZ4QFnoECAwQAQ&url=https%3A%2F%2Fwordpress.com%2Fes%2F&usg=AOvVaw2IGhU7Yd80L-0R3Ivs0Wzn"
    },
    {
      cod:12,
      name: "css",
      img: "assets/img/skills-min/css-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi39pyvlr34AhVPq5UCHS5ADB8QFnoECAYQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fes%2Fdocs%2FWeb%2FCSS&usg=AOvVaw0AbBKiD22F0Y5UczCjWfKg"
    },
    {
      cod:13,
      name: "Firebase",
      img: "assets/img/skills-min/firebase-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiEvYC2lr34AhVgs5UCHRfWBpIQFnoECAcQAQ&url=https%3A%2F%2Fconsole.firebase.google.com%2F%3Fhl%3Des-419&usg=AOvVaw2elgfXV1lLyd0q-MUmCrc_"

    },]
  },
  {cod:3,
    tittle: 'MGMT',
    skills:[
      {
      cod:14,
      name: "Monday",
      img: "assets/img/skills-min/monday-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4"
    },
    {
      cod:15,
      name: "Github",
      img: "assets/img/skills-min/gitHubB-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGmKnClr34AhXcgpUCHYIuADAQFnoECBcQAQ&url=https%3A%2F%2Fgithub.com%2F&usg=AOvVaw38IHvcyBra8HGhmSxvlCGw"
    },
    {
      cod:16,
      name: "Slack",
      img: "assets/img/skills-min/slack-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_wNTNlr34AhUmpJUCHfI4DtUQFnoECA4QAQ&url=https%3A%2F%2Fslack.com%2Fintl%2Fes-la%2F&usg=AOvVaw2L1txEDoKiVWwYhCZXbwN0"    },
    {
      cod:17,
      name: "teams",
      img: "assets/img/skills-min/teams-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi75Pvdlr34AhVBrZUCHTAoCC8QFnoECAgQAQ&url=https%3A%2F%2Fwww.microsoft.com%2Fes-ar%2Fmicrosoft-teams%2Flog-in&usg=AOvVaw3X3ps_0fxGsyAlkiBuNwdM"
    },
    {
      cod:18,
      name: "Make",
      img: "assets/img/skills-min/make-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwidpO7ylr34AhVjq5UCHXnfBnEQFnoECAwQAQ&url=https%3A%2F%2Fwww.make.com%2Fen%2Fintegromat-evolves-to-make&usg=AOvVaw13C9yuBlWzE4hRp7lGnKzm"
    },
    {
      cod:19,
      name: "GitLab",
      img: "assets/img/skills-min/gitlab-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiL4_z_lr34AhXTtJUCHQqnDYsQFnoECAsQAQ&url=https%3A%2F%2Fabout.gitlab.com%2F&usg=AOvVaw0aVHYei2I9PfxBbbHEn7Le"
    },
    {
      cod:20,
      name: "Jira",
      img: "assets/img/skills-min/jira-min.png",
      gruop:1,
      link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiSgbPjnr34AhUDuJUCHbubBDMQFnoECAcQAQ&url=https%3A%2F%2Fwww.atlassian.com%2Fes%2Fsoftware%2Fjira&usg=AOvVaw1YT5zXSJqP79uj7hDAKPHJ"
    },


  ]
  },

  ]



  constructor() { }

  ngOnInit(): void {
  }

  ramdomList(array: Skill[]){
    return array.sort(function() { return Math.random() - 0.5 });
  }

}
