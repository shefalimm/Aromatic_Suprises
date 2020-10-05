export class Product{
    id:number;
    name:string;
    quantity:number;
    price:number;
    img:string;
    constructor(id=0,name="",quantity=0,price=0,img=""){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.img = img;
    }
}