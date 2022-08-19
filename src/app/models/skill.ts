export interface Skill {
  id?: number;
  name: string;
  img: string;

  link:string;
  category:string;
  progress?: number;
}
export interface Category{
  name:string;
  icon:string;
}
