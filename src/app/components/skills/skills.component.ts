import { Category, Skill } from './../../models/skill';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthSerivice } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  categorias: Category[] = [
    { name: 'Diseño', icon: "design_services" },
    { name: 'Development', icon: "code" },
    { name: 'Management', icon: "account_tree" },
  ];
  skill: Skill[] = [
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Photoshop',
      img: 'assets/img/skills-min/photoshop-min.png',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA04yPl734AhVHupUCHfZCD9EQFnoECAgQAQ&url=https%3A%2F%2Fwww.adobe.com%2Far%2Fproducts%2Fphotoshop.html&usg=AOvVaw3k27utgWE86KqYEe5fZMqs',
      category: 'Diseño',
    },
    {
      name: 'Angular',
      img: 'assets/img/skills-min/angular-min.png',
      category: 'Development',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8',
    },
    {
      name: 'Angular',
      img: 'assets/img/skills-min/angular-min.png',
      category: 'Development',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8',
    },
    {
      name: 'Angular',
      img: 'assets/img/skills-min/angular-min.png',
      category: 'Development',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8',
    },
    {
      name: 'Angular',
      img: 'assets/img/skills-min/angular-min.png',
      category: 'Development',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8',
    },
    {
      name: 'Angular',
      img: 'assets/img/skills-min/angular-min.png',
      category: 'Development',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi28oSFlr34AhV8uZUCHTRPD4wQFnoECAkQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
    {
      name: 'Monday',
      img: 'assets/img/skills-min/monday-min.png',
      category: 'Management',
      link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje98O8lr34AhXZr5UCHawcBxMQFnoECAUQAQ&url=https%3A%2F%2Fmonday.com%2Flang%2Fes&usg=AOvVaw0oKWJGTEO49LYN5dXPtCx4',
    },
  ];
  userAuth$ : Observable<User>
  constructor(public dialog: MatDialog,private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {}

  filterArray(cat: string) {
    return this.skill.filter((skill) => skill.category === cat);
  }

  openDialog(data?: Skill) {
    let dialogRef = this.dialog.open(SkillsDialogComponent);
    let instance = dialogRef.componentInstance;
    if (data) {
      instance.isDetailed = true;
      instance.dataRef = data;
    } else {
      instance.isDetailed = false;
    }
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
