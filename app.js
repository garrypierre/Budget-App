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
        newItem= new Expense(ID,des,val);
      } else if(type ==="inc"){
        newItem= new Income(ID,des,val);
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
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expenseContainer: '.expenses__list'
    };

return {
    getinput: function (){
        return{
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputeDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value
        };
        
     },

addListItem: function(obj,type){
    var html, newHtml, element;
    // create HTML string with placeholder text
         if(type==='inc') {
             element = DOMstrings.incomeContainer;
            html='<div class="item clearfix" id="income-%id%"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
         } else if(type==='exp'){
             element= DOMstrings.expenseContainer;
             html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
         }

            
    // replace the placeholder text with the sojme actual data

         newHtml = html.replace('%id%', obj.id);
         newHtml = newHtml.replace('%description%', obj.description);
         newHtml = newHtml.replace('%value%', obj.value);
   
         // Insert the HTML into the DOM
         document.querySelector(element).insertAdjacentElement('beforeend', newHtml);
},


     getDomstrings: function (){
         return DOMstrings;
     }
};



})();















// Global App Controller 
var controller = (function(budgetCtrl,UTCtrl){


var setupEventListeners = function() {
    var DOM = UTCtrl.getDomstrings();
    
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
UTCtrl.addListItem(newItem, input.type);
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