var vet_5: number[] = [];

for (let ct_6: number = 0; ct_6 < 30; ++ct_6) {
    vet_5.push(Math.floor(Math.random() * 100 + 1));
}

console.log("Vetor gerado:", vet_5);

let mx_v = Math.max(...vet_5);
let mn_v = Math.min(...vet_5);

let mx_i = vet_5.indexOf(mx_v);
let mn_i = vet_5.indexOf(mn_v);

console.log("Maior número:", mx_v, "na posição:", mx_i);
console.log("Menor número:", mn_v, "na posição:", mn_i);
