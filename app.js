// BUDGET CONTROLLER 
var budgetController = (function(){
// some code
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
     getDomstrings: function (){
         return DOMstrings;
     }
};



})();















// Global App Controller 
var controller = (function(budgetCtrl,UTCtrl){

var DOM = UTCtrl.getDomstrings();

var ctrlAddItem = function() {
// 1.Get the field input data 
var input = UTCtrl.getinput();
console.log(input);
// 2.Add the item to the budgetcontroller 
// 3. Add the item to the UI
// 4. Calculate the budget
// 5. Display the budget on the UI



}


document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);


document.addEventListener('keypress', function(event){
    if (event.keyCode ===13 || event.which ===13){
ctrlAddItem();
    }
    
});






})(budgetController,UIController);