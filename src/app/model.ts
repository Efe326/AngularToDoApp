export class Model {
    user: string;
    items: { yapilacaklar: string; yapildi: boolean }[];
  
    constructor() {
      this.user = 'Efe';
      this.items = [
        new ToDoItem("Spor",true),
        new ToDoItem("Kahvalti",false),
        new ToDoItem("Kod yazmak",true),
        new ToDoItem("Sinema",false),
      ];
    }
}
  
  export class ToDoItem{
    yapilacaklar;
    yapildi;

    constructor(yapilacaklar: string, yapildi: boolean){
        this.yapilacaklar = yapilacaklar;
        this.yapildi = yapildi;
    }
}