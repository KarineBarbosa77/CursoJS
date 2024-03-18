const peso = 65
const altura = 1.70
const imc = peso/(altura*altura)

if (imc > 40 ) {
  console.log('Obesidade grave III')
} else if (imc >= 38 && imc <= 39.9 ) {
    console.log('Obesidade II')
}else if (imc >= 25 && imc <= 29.9){
  console.log('Sobrepeso')
}else if (imc >= 18.5 && imc <= 24.9){
  console.log('Normal')
}else (imc < 18.5){
  console.log('Magreza')
}