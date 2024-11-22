
var cidades:string[]=['São Paulo','Rio de Janeiro','Salvador','Belo Horizonte','Porto Alegre'];

for(let ct:number=0;ct<=3;++ct){
    let ca:string[]=['Brasilia','Campo Grande','Cuiaba']
    cidades.push(ca[ct])
}
for(let ct_2:number=0;ct_2<(cidades.length-1);++ct_2){
    console.log(cidades[ct_2])
};
