const fAnon = function(v1:number[],v2:string[]):any[]{
    let res = [];
    for(let i = 0; i < v1.length; i++){
    res[i] = v1[i] + v2[i];
    }
    return res;
    };


const vt1:number[] = [5,3,1,8,2];
    
const vt2:string[] = ["M","a","r","i","a"];

console.log(fAnon(vt1,vt2));