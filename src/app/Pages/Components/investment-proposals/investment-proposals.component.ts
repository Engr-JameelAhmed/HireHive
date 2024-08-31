import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessServiceService } from 'src/app/services/business-service.service';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-investment-proposals',
  templateUrl: './investment-proposals.component.html',
  styleUrls: ['./investment-proposals.component.css']
})
export class InvestmentProposalsComponent implements OnInit{


  visible: boolean = false;
  selectedEvent: any = null;
  proposals : any[] = [];

  constructor(private businessService: BusinessServiceService, private router: Router, private proposalService: ProposalService){}

  ngOnInit(): void {
    this.businessService.getAllPendingBusinesses().subscribe(
      (data: any[]) => {
        this.proposals = data;
        console.log('Pending Businesses loaded:', this.proposals);
        // Trigger change detection if needed
      },
      error => {
        console.error('Error loading Proposals:', error);
      }
    );
    this.data();
  }

  data(){
    console.log('Proposals are : ',this.proposals);
  }

  showDialog(event: any) {
    this.selectedEvent = event;
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
    this.selectedEvent = null;
  }

  acceptProposal(event: any) {
    const proposalData = {
      businessId: event.id
    };
    this.proposalService.createInvestment(proposalData).subscribe({
        next: (response) => {
          console.log('Proposal created successfully', response);
          this.router.navigate(['/investments']); // Navigate to Investment list or similar
        },
        error: (error) => {
          console.error('Error creating Investment', error);
        }
      });

  }
}
