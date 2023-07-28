import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  model = new Model();
  isDisplay = false

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items
    }
    return this.model.items.filter(item=> !item.yapildi);
  }

  addItem(newItem: string) {
    if (newItem.trim() !== '') {
      const item = { yapilacaklar: newItem, yapildi: false };
      this.model.items.push(item);
    }
  }
}
