//how to compare the JSON have the same properties without order?
//let obj1={"name":"person" , "age":"5};
//let obj2= {"age":"5","name":"person"};


var obj1 = {"name":"person","age":"5"};
var obj2 = {"age":"5","name":"person"};

var content=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            content=false;
            break;
        }
    }   
}
console.log("is object equal"+content); 

