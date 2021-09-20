//1  
function revendaCarros(){
    let veiculo = "hatch";
    switch (veiculo) {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedans":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case "motocicletas":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
    }
}
revendaCarros();

//2
function triangulo(){
    let a=8,b=8,c=8;
    if((a==b)&&(a==c)&&(b==c)){
        console.log("o triângulo será equilátero");
    }else if((a!=b)&&(a!=c)&&(b!=c)){
        console.log("o triângulo será escaleno");
    }else{
        console.log("o triângulo será isósceles"); 
    }
    
}
triangulo();

//3
function positivoOuNegativo(){
    let numero=5;
    if(numero>0){
        console.log("Positivo");
    }else if(numero<0){
        console.log("Negativo"); 
    }else{
        console.log("Neutro"); 
    }
}
positivoOuNegativo();