describe("Add", function(){
        let calculator;
     beforeEach( function(){
          calculator = new Calculator();
     });

    it("should add two numbers and equal zero", function(){
        let result = calculator.Add(0, 0);
        expect(result).toBe(0);
    });

    it("should add two numbers and equal -2", function(){
        let result = calculator.Add(-1, -1);
        expect(result).toBe(-2);
    });

    it("should add two numbers and equal 9", function(){
        let result = calculator.Add(4, 5);
        expect(result).toBe(9);
    });

    it("should add multiple numbers and equal 10", function(){
        let result = calculator.Add(1, 2, 3, 4);
        expect(result).toBe(10);
    });


});

describe("Multiply", function(){
   it("should multiply two numbers and return 2", function(){
       let result = calculator.Multiply(1, 2);
       expect(result).toBe(2);
   });
   
   it("should multiply multiple numbers", function(){
    let result = calculator.Multiply(1, 2, 3, 4);
    expect(result).toBe(24);
   

   });


});
describe("Last", function(){
    it("should take the last answer and add or multiply", function(){
     expect(calculator.Add(1, 2 ,3, 4)).toBe(10);
     expect(calculator.Multiply(calculator.Last, 2, 3)).toBe(60);
    
    });
    
});
describe("Set and get ", function(){
    it("should take a single number as an argumen", function(){
        expect(calculator.Add(1, 2, 3, 4)).toBe(10);       
        expect(calculator.set_slot(1));
        expect(calculator.get_slot(1));
       
        
        expect(calculator.Add(2,5)).toBe(7);
        expect(calculator.set_slot(2));
        expect(calculator.get_slot(2));
        

        expect(calculator.Add(5, 8)).toBe(13);
        expect(calculator.get_slot(1));
        expect(calculator.get_slot(2));
        expect(calculator.Last);
        
        

    });
    
    it("should allow memory slots as parameters", function(){
        sum = this.Last;
        expect(calculator.Add(1, 2, 3, 4)).toBe(10);       
        expect(calculator.set_slot(1));
        expect(calculator.get_slot(1)).toBe(10);
        
        expect(calculator.Add(2,5)).toBe(7);
        expect(calculator.set_slot(2));
        expect(calculator.get_slot(2)).toBe(7);
        expect(calculator.Last);

        expect(calculator.Add(calculator.get_slot(1), 5)); 
        expect(calculator.Multiply(calculator.get_slot(2), 7));

    });

});
