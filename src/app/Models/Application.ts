export class Application{

    id?: number;
    status: string;
    employeeId?: number;
    jobId: number;

    constructor(status: string,jobId: number){
        this.status = status;
        this.jobId = jobId;
    }
}