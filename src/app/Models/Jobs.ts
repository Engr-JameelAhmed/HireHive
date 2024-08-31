export class Jobs {
  id?: number; // Optional if not needed during creation
  employerId?: number; // Optional if not needed during creation
  applicationIds?: number; // Optional if not needed during creation
  postedDate?: Date;
  companyName: string;
  description: string;
  salary: number;
  title: string;
  type: string;
  location: string;
  category: string;
  workType: string;

  constructor(
    companyName: string,
    description: string,
    salary: number,
    title: string,
    type: string,
    location: string,
    category: string,
    workType: string,
    id?: number,
    employerId?: number,
    applicationIds?: number
  ) {
    this.companyName = companyName;
    this.description = description;
    this.salary = salary;
    this.title = title;
    this.type = type;
    this.location = location;
    this.category = category;
    this.workType = workType;
    this.id = id;
    this.employerId = employerId;
    this.applicationIds = applicationIds;
  }
}