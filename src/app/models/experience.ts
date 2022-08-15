export interface Experience {
  id?: number;
  position: string;
  company: string;
  companyLink?:string;
  description?: string;
  begin: Date ;
  end?: Date | null;
}
