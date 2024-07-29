import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'View', icon: 'pi pi-fw pi-search' },
            { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ];
    }

}
