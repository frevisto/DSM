

// instanciar = criar algo daquela classe

import {Cachorro} from "./classes"

var cachorro_1 = new Cachorro("Lhasa", 7.2);
console.log(cachorro_1.raca);
console.log(cachorro_1.peso);
console.log(cachorro_1.latir());
cachorro_1.engordar();
console.log(cachorro_1.peso);

