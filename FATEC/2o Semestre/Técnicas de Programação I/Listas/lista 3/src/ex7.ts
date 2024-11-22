let vet:number[]=[]

for(let i:number=1;i<=10;i++){
    vet.push(i);
}


let sum: number = 0;
let i: number = 0;
while (i < vet.length) {
    sum += vet[i];
    i++;
}

console.log(sum);