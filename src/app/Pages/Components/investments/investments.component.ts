import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css'],
})
export class InvestmentsComponent implements OnInit {
  visible: boolean = false;
  selectedEvent: any = null;
  myInvestments: any[] = [];

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.proposalService.getAllInvestmentsOfCurrentLoggedUser().subscribe(
      (data: any[]) => {
        this.myInvestments = data;
        console.log('Pending Businesses loaded:', this.myInvestments);
        // Trigger change detection if needed
      },
      (error) => {
        console.error('Error loading Investments:', error);
      }
    );
    this.data();
  }
  data() {
    console.log('Proposals are : ', this.myInvestments);
  }
  showDialog(event: any) {
    this.selectedEvent = event;
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
    this.selectedEvent = null;
  }
}
