export class Jobs{

  id: number;
  description: string;
  title: string;
  type: string;
  location: string;
  category: string;
  work: string;

  constructor(id: number, description: string,title: string, type: string, location: string, category: string, work: string){

    this.id = id;
    this.description = description;
    this.title = title;
    this.type = type;
    this.location = location;
    this.category = category;
    this.work = work;
  }

}
