const fArrow = (v1:number[],v2:string[]):any[]=>{
    let res = [];
    for(let i = 0; i < v1.length; i++){
    res[i] = v1[i] + v2[i];
    }
    return res;
    };

    const l1:number[] = [5,3,1,8,2];
    
    const l2:string[] = ["M","a","r","i","a"];

console.log(fArrow(l1,l2));