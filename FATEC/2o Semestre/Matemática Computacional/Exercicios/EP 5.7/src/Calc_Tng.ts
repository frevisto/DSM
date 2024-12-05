

function grausParaRadianos(graus: number): number {
    return graus * (Math.PI / 180);
}

export function calcularCatetoAdjacente(angulo: number, catetoOposto: number): void {


    if (angulo <= 0 || angulo >= 90) {
        console.error("Erro: O ângulo deve estar no intervalo 0°, 90°.");
        return;
    }

    if (catetoOposto <= 0) {
        console.error("Erro: O cateto oposto deve ser maior que zero.");
        return;
    }

    const anguloRadianos = grausParaRadianos(angulo);

    const catetoAdjacente = (catetoOposto / Math.tan(anguloRadianos)).toFixed(3);

    console.log("VALOR de D:\n", catetoAdjacente, "METROS.");
}




