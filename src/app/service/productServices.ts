import {Product} from '../model/product';

export class ProductService{
products:Product[];
cart:Product[];
total:number;
constructor(){
    this.products = [
        new Product(1,"Capricorn",8,1500,"assets/zodiac/capricorn.jpg"),
        new Product(2,"Aquarius",7,1500,"assets/zodiac/aquarius.jpg"),
        new Product(3,"Pisces",5,1500,"assets/zodiac/pisces.jpg"),
        new Product(4,"Aries",5,1500,"assets/zodiac/aries.jpg"),
        new Product(5,"Taurus",5,1500,"assets/zodiac/taurus.jpg"),
        new Product(6,"Gemini",5,1500,"assets/zodiac/gemini.jpg"),
        new Product(7,"Cancer",5,1500,"assets/zodiac/cancer.jpg"),
        new Product(8,"Leo",5,1500,"assets/zodiac/leo.jpg"),
        new Product(9,"Virgo",5,1500,"assets/zodiac/virgo.jpg"),
        new Product(10,"Libra",5,1500,"assets/zodiac/libra.jpg"),
        new Product(11,"Scorpio",5,1500,"assets/zodiac/scorpio.jpg"),
        new Product(12,"Sagittarius",5,1500,"assets/zodiac/sagittarius.jpg")
    ]
    this.cart=[];
}
getProducts():Product[]{
    return this.products;
}

getProduct(id:number):Product{
    for (let index = 0; index < this.products.length; index++) {
        if(this.products[index].id == id)
        {
            return this.products[index];
        } 
    }
    return null; 
}

// addProduct(product:Product){
//     for (let index = 0; index < this.products.length; index++) {
//         if(this.products[index].id == product.id)
//         {
//             return false;
//         }  
//     }
//     this.products.push(product);
//     return true;
// }

addToCart(product:Product){
    let flag=0;
    for (let index = 0; index < this.cart.length; index++) {
        if(this.cart[index].id == product.id)
        {
           flag = 1;
           this.cart[index].quantity++;
           break;
        }  
    }
    if(flag ==0)
        this.cart.push(product);
    for (let index = 0; index < this.products.length; index++) {
        if(this.products[index].id == product.id)
        {
            this.products[index].quantity--;
        }  
    }
}


}