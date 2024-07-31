import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{


  ngOnInit(){
    lottie.loadAnimation({
      container: document.getElementById("animation-container"),
      path: "assets/Animations/Phone Call.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "HireHive-animations",
    });

    lottie.loadAnimation({
      container: document.getElementById("animation-chat"),
      path: "assets/Animations/Contact Us.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "HireHive-animations",
    });


  }


}
