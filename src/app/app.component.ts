import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather Report';
  londonRes: any;
  parisRes: any;
  munichRes: any;
  birminghamRes: any;
  moscowRes: any;
  allcitiesRes: any;
  fivedayRes = [];
  
  date = new Date();
  
  constructor(private service: ServicesService) {}
  
  getSeaLevel(city_name) {
	this.fivedayRes = [];
	this.service.getFiveDay(city_name)
		.subscribe(data => {
			var response: any = data;
			for(let i=0; i<response.list.length; i++) {
				var seaLevel = response.list[i];
				// console.log(seaLevel.dt_txt);
				var dateTime = formatDate(seaLevel.dt_txt, 'yyyy-MM-dd 09:00:00', 'en');
				// console.log(dateTime);
				if(seaLevel.dt_txt == dateTime) {
					this.fivedayRes.push({"date":seaLevel.dt_txt, "seaLevel":seaLevel.main.sea_level});
					// console.log(this.fivedayRes);
				}
			}
		}, err=> {
			console.log(err);
		})
  }
  
  ngOnInit() {		
	this.service.getAllApisData()
		.subscribe(data => {
			this.allcitiesRes = data;
			// console.log(this.allcitiesRes);
			
			this.londonRes = this.allcitiesRes[0];
			this.parisRes = this.allcitiesRes[1];
			this.munichRes = this.allcitiesRes[2];
			this.birminghamRes = this.allcitiesRes[3];
			this.moscowRes = this.allcitiesRes[4];
		}, err=> {
			console.log(err);
		})
  }
}
