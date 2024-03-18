const peso = "44"
const altura = "1.70"
const imc = peso/(altura*altura)

if(imc > 40){
  console.log('Obesidade grau III')
} else if(imc >= 35 && imc <= 39.9){
  console.log('Obesidade grau II')
} else if(imc >= 30 && imc <= 34.9){
  console.log('Obesidade grau I')
}else if(imc >= 25 && imc <= 29.9){
  console.log('Sobrepeso')
}else if(imc >= 18.5 && imc <= 24.9){
  console.log('Peso normal')
}else{
  console.log('Abaixo do peso')
}