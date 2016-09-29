function myMessage(){
    console.log("This is my first function!");
}
//add(3,5)
function add(x,y){
    //var x=5;
    //var y=8;
    console.log("inside function "+(x+y));
    return "PUPPIES";
    // I was working on this example with Tim & Dan and wanted to keep this example so it's a bit different than instructions
}

function add2(x,y){
    var total = x + y;
    return total;
}

var add2result = add2(10,36);


function cardFlip(element){
    $(element).hide();
}

var result = add2(add2(5,10), add2(20,30));
console.log(result);
