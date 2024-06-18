const hello = () => "hello from Akshay";

console.log(hello());


const double = (x) => x*x;

console.log(double(5));

const isEven = (x) => {
    if (x % 2 == 0){
        console.log("even");
        return true;
    }
    else{
        console.log("odd");
        return false;
    }   

}

console.log(isEven(4));
console.log(isEven(5));