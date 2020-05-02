// BUDGET CONTROLLER 
var budgetController = (function(){

    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value= value;
    };

    var Income = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value= value;
    };


var data = {

    allItems: {
        exp: [],
        inc:[]
    },

    totals: {
        exp: 0,
        inc: 0
    }
  
};

return {
    addItem: function(type,des,val){
      var newItem,ID;

      // Create new ID
      if(data.allItems[type].length > 0){
        ID= data.allItems[type][data.allItems[type].length-1].id + 1;
      } else {
          ID=0;
      }
      
      
      // Create new item based on 'inc' or 'exp' type
      
      if(type ==='exp'){
        newItem= new Expense(id,des,val);
      } else if(type ==="inc"){
        newItem= new Income(id,des,val);
      }
      
      // Push it into our data structure
       data.allItems[type].push(newItem);
       
       // Return the new element
       return newItem;

    },
    
};


})();



















// UI Controller 
var UIController = (function(){




    var DOMstrings = {
        inputType: '.add__type',
        inputeDescription:'.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

return {
    getinput: function (){
        
        return{
             type : document.querySelector(DOMstrings.inputType).value,
             description : document.querySelector(DOMstrings.inputeDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
        };
        
     },

addListItem: function(obj,type){
    var html;
    // create HTML string with placeholder text
         if(type==='inc') {
            html='<div class="item clearfix" id="income-%id%"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
         } else if(type==='exp'){
             html = '<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
         }

            
    // replace the placeholder text with the sojme actual data


    // Insert the HTML into the DOM
},


     getDomstrings: function (){
         return DOMstrings;
     }
};



})();















// Global App Controller 
var controller = (function(budgetCtrl,UTCtrl){


var setupEventListeners = function() {
    
    var DOM = UTCtrl.getDomstrings(
    
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode ===13 || event.which ===13){
    ctrlAddItem();
        }
        
    });
};




var ctrlAddItem = function() {
var input, newItem
    


// 1.Get the field input data 
input = UTCtrl.getinput();

// 2.Add the item to the budgetcontroller 
newItem = budgetCtrl.addItem(input.type,input.description,input.value);

// 3. Add the item to the UI
// 4. Calculate the budget
// 5. Display the budget on the UI



};

return {
    init: function(){
        console.log("application has started");
        setupEventListeners();
    }
}

})(budgetController,UIController);


controller.init();