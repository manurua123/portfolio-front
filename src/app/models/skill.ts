export interface Skill {
  cod?: number;
  name: string;
  img: string;
  gruop?: number;
  link:string;
  category?:string;
}
export interface SkillCategory {
  cod: number;
  tittle:string;
  skills:Skill[];
  img?: string;
  description?:string;

}
