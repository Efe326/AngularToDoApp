import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'Efe'
  items: { yapilacaklar: string; yapildi: string }[] = [
    { yapilacaklar: "yemek", yapildi: "hayir" },
    { yapilacaklar: "kod yazmak", yapildi: "evet" },
    { yapilacaklar: "spor", yapildi: "evet" },
    { yapilacaklar: "sinema", yapildi: "hayir" },
    { yapilacaklar: "dans", yapildi: "hayir" }
  ];
}
