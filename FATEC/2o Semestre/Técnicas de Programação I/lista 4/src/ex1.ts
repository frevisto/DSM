
function ex1(){
var num : number []= Array(5);
for(let i:number=0;i<=5;++i){
    num[i]=Math.floor(Math.random()*100+1)
}
for(let i_1:number=0;i_1<=5;++i_1){
    console.log(num[i_1]);
} 
};
ex1();