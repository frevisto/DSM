var vet_4: number[] = [];

for (let ct_5: number = 0; ct_5 < 20; ++ct_5) {
    vet_4.push(Math.floor(Math.random() * 100 + 1));
}

vet_4.sort((a, b) => a - b);

console.log(vet_4);