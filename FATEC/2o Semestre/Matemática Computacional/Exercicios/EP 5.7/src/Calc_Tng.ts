function grausParaRadianos(graus: number): number {

    return graus * (Math.PI / 180);

}

export function calcularCatetoAdjacente(angulo: number, catetoOposto: number): void {

    const anguloRadianos = grausParaRadianos(angulo);

    const catetoAdjacente = (catetoOposto / Math.tan(anguloRadianos)).toFixed(3);


    console.log("VALOR de D:\n", catetoAdjacente,"METROS.")
}



