console.log('Bienvenido a Calculator')

function printOperations() {
    let option = prompt('Teclea la opcion que necesites:\n1)Sumar\n2)Restar\n3)Multiplicar\n4)Dividir')
    console.log(option)

    switch (option) {
        case '1':
            console.log(option);
            let val = prompt('Ingresa el primer numero');
            let val1 = Number(val);
            console.log(val1)
            let val2 = prompt('Ingresa el segundo valor');
            let valu2 = Number(val2);
            console.log(valu2)
            let suma = val1 + valu2;
            console.log(suma)
            alert(suma);
            break;
        case '2':
            console.log(option);
            let value1 = prompt('Ingresa el primer numero');
            x1 = Number(value1);
            break;
        case '3':
            console.log(option)
            break;
        case '4':
            console.log(option)
            break;
    }
}


printOperations()