export class Proposal{
    id?: number;
    investorId?: number;
    businessId: number;

    constructor(id: number,investorId: number, businessId: number){
        this.id = id;
        this.investorId = investorId;
        this.businessId = businessId;
    }
}