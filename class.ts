// class House{    //blueprint of creating objects


//     ownerName: string      //these are properties
//     readonly houseNumber: number
//     rooms: number 



//      method1(){   //method 1    --->behaviour
//         console.log (`owner name: ${this.ownerName}`)
//     }
//     method2(){   //method 2
//         console.log ("inside method 2")
//     }


//     constructor (name:string , hNum:number ,  rooms:number){
//         this.ownerName = name;
//         this.houseNumber= hNum;
//         this.rooms= rooms

//     }



// }

// let h1 = new House("Kamran",12345,2);               //h1 is an object

// console.log(h1.ownerName)
// h1.ownerName = "Hamzah"
// console.log(h1.ownerName)


// let h2 = new House("Zahir",678,5);               //h1 is an object
// // let h2 = new House();   
// console.log(h1.ownerName)
// console.log(h1.houseNumber)
// console.log(h1.rooms)
// console.log(h2)
// h1.method1()
// h2.method1()

// console.log(h1.houseNumber)
// console.log(h2.ownerName)



// function func1(a:number,b:number){
//     console.log(a+b)

// }
// func1(1,2)




//inheritance




class Animal{   //parent class

    color : string  // 2 properties
    name:string

    sleep(){    // 2 methods
        console.log(this.name,"sleeping.....")
    }
    eat(){
        console.log(this.name,"eating.....")
    }

    constructor(name:string,color:string){
        this.name= name;
        this.color= color;

    }

}


//jb bhi hm inheritance krty hain to data pass krny k liye super use krty hain
class cat extends Animal{   //child class
   
    milk:number
    meow(){
        console.log(this.name,"meowing...")
    }
    constructor(name:string,color:string,milk:number){
        super(name,color)       //parent class ka constructor call krny k liye lgaty hain 
        this.milk = milk;
    }
}


class dog extends Animal{       //child class
    
    wafadari:boolean=true;
    
    bark(){
        console.log(this.name,"barking....")

    }  
}

let c1 = new cat("spiky","white",2);
let d1 = new dog("puppy","brown");
d1.eat();
d1.bark();
console.log(d1.name);
console.log(d1.wafadari);
console.log(c1.name);
c1.eat();
c1.meow();
console.log(c1.color)
