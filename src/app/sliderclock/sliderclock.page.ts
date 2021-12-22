import { KeyValue } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
     selector: 'app-sliderclock',
     templateUrl: 'sliderclock.page.html',
     styleUrls: ['sliderclock.page.scss'],
})
export class SliderClockPage implements OnInit  {
     currentTime: string = '';
     currentView: string = '';
     isVisible = false;
     pauseClock = false;
     showDateTimeLabel = true;
     timer: any;
  
     dateObj = {
          'Month' : {
               monthDigit1 : {            
                    'StartValue' : 0,
                    'EndValue' : 1,
                    'Value' : 0
               },
               monthDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
          'Day' : {
               dayDigit1 : {
                    'StartValue' : 1,
                    'EndValue' : 2,
                    'Value' : 0
               },
               dayDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
          'Year' : {
               yearDigit1 : {
                    'StartValue' : 1,
                    'EndValue' : 2,
                    'Value' : 0
               },
               yearDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
               yearDigit3 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
               yearDigit4 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
          'Hour' : {
               hourDigit1 : {
                    'StartValue' : 0,
                    'EndValue' : 2,
                    'Value' : 0
               },
               hourDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
          'Minute' : {
               minuteDigit1 : {
                    'StartValue' : 0,
                    'EndValue' : 5,
                    'Value' : 0
               },
               minuteDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
          'Second' : {
               secondDigit1 : {
                    'StartValue' : 0,
                    'EndValue' : 5,
                    'Value' : 0
               },
               secondDigit2 : {
                    'StartValue' : 0,
                    'EndValue' : 9,
                    'Value' : 0
               },
          },
     };

     ngOnInit() {
          this.toggleClock();
     }

     formatLabel(value: number | null) {
          if (!value)
               return 0;
      
          if (value >= 1000)
               return Math.round(value / 1000) + 'k';
   
          return value;
     }

     getClass(i,value) {
          if (parseInt(i)==parseInt(value))
               return 'Active';
     }

     getKeys(obj){
          return Object.keys(obj)
     }

     isString(val: any) {
          return typeof val === 'string';
     }

     numberSequence(n: number): Array<number> {
          return Array(n);
     }

     // Causes keys to be returns in original order defined in the object, not alphabetical which is what I want
     orderOriginal = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
          return 0
     }

     toggleClock() {
          if (!this.pauseClock) {          
               this.timer=setInterval(() => {
                    const currTime=new Date();
  
                    const month=((currTime.getMonth()+1) < 10 ? "0" : "") + (currTime.getMonth()+1);
                    const day=(currTime.getDate() < 10 ? "0" : "") + currTime.getDate();
                    const year=currTime.getFullYear().toString();

                    const hour=(currTime.getHours() < 10 ? "0" : "") + currTime.getHours();
                    const minute=(currTime.getMinutes() < 10 ? "0" : "") + currTime.getMinutes();
                    const second=(currTime.getSeconds() < 10 ? "0" : "") + currTime.getSeconds();

                    this.dateObj['Month'].monthDigit1.Value=parseInt(month[0]);
                    this.dateObj['Month'].monthDigit2.Value=parseInt(month[1]);

                    this.dateObj['Day'].dayDigit1.Value=parseInt(day[0]);
                    this.dateObj['Day'].dayDigit2.Value=parseInt(day[1]);

                    this.dateObj['Year'].yearDigit1.Value=parseInt(year[0]);
                    this.dateObj['Year'].yearDigit2.Value=parseInt(year[1]);
                    this.dateObj['Year'].yearDigit3.Value=parseInt(year[2]);
                    this.dateObj['Year'].yearDigit4.Value=parseInt(year[3]);

                    this.dateObj['Hour'].hourDigit1.Value=parseInt(hour[0]);
                    this.dateObj['Hour'].hourDigit2.Value=parseInt(hour[1]);
       
                    this.dateObj['Minute'].minuteDigit1.Value=parseInt(minute[0]);
                    this.dateObj['Minute'].minuteDigit2.Value=parseInt(minute[1]);

                    this.dateObj['Second'].secondDigit1.Value=parseInt(second[0]);
                    this.dateObj['Second'].secondDigit2.Value=parseInt(second[1]);

                    this.currentTime = `${month}/${day}/${year} ${hour}:${minute}.${second}`

                    if (!this.isVisible)
                         this.isVisible=true;
               }, 1000);
          } else {
               clearInterval(this.timer);
          }
     }
}
