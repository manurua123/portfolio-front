export interface Education {
  cod: number;
  career: string;
  university: string;
  img?:string;
  link?: string;
  description?: string;
  certification?:string;
  duration?: string;
  begin: Date;
  end?: Date;
  progress: number;
}
