import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private eRef: ElementRef) {
  }

  title = 'Select Your City';
  status = true;
  city;
  count = 0;
  findedValue;
  arrow = true;
  cancel = false;
  locations = [
    'Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
    'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
    'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
    'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
    'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'

  ];

  clickToArrow() {
    this.status = !this.status;

  }

  clicktedItem(event) {
    this.status = true;
    this.city = event.srcElement.innerText;

    if (this.city === "") {
      this.cancel = false;
    }
    else {
      this.arrow = false;
      this.cancel = true;
    }

  }

  clickToCancel() {
    this.city = "";
    this.arrow = true;
    this.cancel = false;

  }


  //klavyeden input girilip girilmediğini kontrol eder.
  onSearchChange(searchValue: string): void {
    if (searchValue !== "") {
      this.status = false;
      this.arrow = false;
      this.cancel = true;

      this.findedValue = this.locations.find(item => {


      })

    }

    else {
      this.status = true;
      this.arrow = true;
      this.cancel = false;


    }
  }
  // closeHandler(e: Event){
  //   this.status = true;

  // }

  
}
