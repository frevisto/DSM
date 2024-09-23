var nmos:number[]=[];
for(let ct_4:number=0;ct_4<=20;++ct_4)
{
    nmos.push(Math.floor(Math.random()*100+1))
}
const maior:number= nmos.reduce((a:number,b:number)=>{
    return a>b?a:b;
})
console.log(nmos);
console.log(maior);