export class Business{
    id: number;
    industry: string;
    name: string;
    ownerId: number;
    status: string;
    createdOn: Date;
    description: string;
    investmentAmount: number;
    ownerName: string;
    sharePercent: number;
    constructor(
        industry: string,
        name: string,
        description: string,
        investmentAmount: number,
        sharePercent: number,
    ){
        this.industry = industry;
        this.name = name;
        this.description = description;
        this.investmentAmount = investmentAmount;
        this.sharePercent = sharePercent;
    }
}