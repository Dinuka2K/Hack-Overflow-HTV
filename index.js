let numers = [1,2,3];
let length = numers.length;

const reverseArray = (array,lenth) =>{
    let newarray = [];
 
    for(let i  = length-1 ; i>=0;i--){
        newarray.push(array[i]);
       
    }
    console.log(array.join(' '));
    console.log(newarray.join(' '));
}

reverseArray(numers,length);