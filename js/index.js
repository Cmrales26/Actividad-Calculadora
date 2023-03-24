let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let operacion = document.getElementById('operacion')

const resultado = document.getElementById('resultado')

const calcular =() =>{
    if(num1.value == '' || num2.value == '' || operacion.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'DEBE RELLENAR TODOS LOS VALORES',
            confirmButtonColor: "#6acce7"
        })
    }else{
        if(operacion.value == '+'){
            resultado.innerHTML = `El resultado de la operacion ${num1.value} + ${num2.value} es igual a ${parseInt(num1.value) + parseInt(num2.value)}`
        }else if(operacion.value == '-'){
            resultado.innerHTML = `El resultado de la operacion ${num1.value} - ${num2.value} es igual a ${parseInt(num1.value) - parseInt(num2.value)}`
        }else if(operacion.value == '*'){
            resultado.innerHTML = `El resultado de la operacion ${num1.value} * ${num2.value} es igual a ${parseInt(num1.value) * parseInt(num2.value)}`
        }else if(operacion.value == '/'){
            resultado.innerHTML = `El resultado de la operacion ${num1.value} / ${num2.value} es igual a ${parseInt(num1.value) / parseInt(num2.value)}`
        }else{
            alert("Error")
        }
    }
}
const reiniciar = () =>{
    num1.value = ''
    num2.value = ''
    operacion.value = ''
    resultado.innerHTML = ''
}