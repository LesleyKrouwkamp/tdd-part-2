// function Add(num1, num2){
//    let sum = 0; 

//    for(let i = 0; i < arguments.length; i++){
//        sum += parseFloat(arguments[i]);

//    }
//    return sum;
// }
// console.log(Add(0, 0));
// console.log(Add(-1, -1));
// console.log(Add(4, 5));
// console.log(Add(1, 2, 3, 4));


// function Multiply(){
//     let sum = 1;

//     for(let i = 0; i < arguments.length; i++){
//         sum *= parseFloat(arguments[i]);
//     }
//     return sum;
// }
// console.log(Add(1, 2));
// console.log(Add(1, 2, 3, 4));

class Calculator{
    
    constructor(){
       this.array = [];

    }

    Add(){
        let sum = 0; 
        for(let i = 0; i < arguments.length; i++){
            sum += parseFloat(arguments[i]); 
            this.Last = sum;
    }
    return sum;
    }

    Multiply(){
        let sum = 1;

        for(let i = 0; i < arguments.length; i++){
            sum *= parseFloat(arguments[i]);
            this.Last = sum;
        }
        return sum;
    } 
    Last(){
        return this.Last;
    }  
    

    set_slot(number){
        
        
        this.array.push(this.Last);
        return this.array[number - 1];

    }
    get_slot(number){

        return this.array[number - 1];
    }

}
let calculator = new Calculator();
