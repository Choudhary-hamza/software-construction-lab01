let num=17;
function checkisPrime(num){
    if (num<2){
        return false;
    }
    for(let i=2; i<num; i++) 
        {
        if (num%i===0) {
            return false;
        }
        else{
            return true;
        }
    }
}
if(checkisPrime(num)){
    console.log("The number is prime");
} else {
    console.log("The number is not prime");
}