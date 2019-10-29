function add(){
    var summed = 0 ;
	for(var i = 0;i<arguments.length;i++){
		summed += arguments[i];
	}return summed;
} 

function multiply(){
    var product = 1 ;
	for(var i = 0;i<arguments.length;i++){
		product *= arguments[i];
	}return product;
} 


module.exports = {
    add,multiply
}