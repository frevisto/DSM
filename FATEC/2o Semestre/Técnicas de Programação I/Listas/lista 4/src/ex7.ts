var vet_1: number[] = [];
var vet_2: number[] = [];

for (let ct_5: number = 0; ct_5 < 10; ++ct_5) {
    vet_1.push(Math.floor(Math.random() * 100 + 1));
    vet_2.push(Math.floor(Math.random() * 100 + 1));
}


var vet_3: number[] = [...vet_1, ...vet_2];
console.log(vet_3);