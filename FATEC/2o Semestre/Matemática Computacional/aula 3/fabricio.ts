function get_x(k:number):number{
    if(k===1){
        return 1;
    }
    if(k===2){
        return 1;}
        else{
        return (0.3*get_x(k-1))+(0.4*get_x(k-2));
    }
};

console.log(get_x(1))
console.log(get_x(2))
console.log(get_x(3))
console.log(get_x(4))
console.log(get_x(5))
console.log(get_x(6))
console.log(get_x(7))
console.log(get_x(8))
console.log(get_x(9))
console.log(get_x(10))
console.log(get_x(11))
console.log(get_x(12))
console.log(get_x(13))