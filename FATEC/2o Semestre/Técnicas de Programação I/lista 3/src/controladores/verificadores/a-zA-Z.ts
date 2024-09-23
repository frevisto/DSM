export function isAbc(a:string){
    for (let i: number = 0; i < a.length; i++){
        if (/[a-zA-Z]/.test(a[i])){
            return a[i];
        } 
    }
};