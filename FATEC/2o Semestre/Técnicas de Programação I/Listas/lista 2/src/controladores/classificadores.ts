export function classificarTriangulo(a:number[]):string{
    if(a[0]==a[1]&&a[2]==a[1]){
        return `Os lados ${a[0]}, ${a[1]}, ${a[2]} formam um Triângulo Equilátero`
    }else if(a[0]==a[1] || a[1]==a[2] || a[0]==a[2] ){
        return `Os lados ${a[0]}, ${a[1]}, ${a[2]} formam um Triângulo Isóceles`
    } else {
        return `Os lados ${a[0]}, ${a[1]}, ${a[2]} formam um Triângulo Escaleno`
    }
}