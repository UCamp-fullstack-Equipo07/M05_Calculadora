console.log('Bienvenido a Calculator')

function printOperations() {
    let option = prompt('Teclea la opcion que necesites:\n1)Sumar\n2)Restar\n3)Multiplicar\n4)Dividir')
    console.log(option)

    switch (option) {
        case '1':
            console.log('Elegiste la opción ' + option + ': suma');
            let val = prompt('Ingresa el primer numero');
            let val1 = Number(val);
            console.log('El primer valor es: ' + val1)
            let val2 = prompt('Ingresa el segundo valor');
            let valu2 = Number(val2);
            console.log('El segundo valor es: ' + valu2);
            let suma = val1 + valu2;
            console.log('El resultado es: ' + suma);
            alert('El resultado de la operación es: ' + suma);
            break;
        case '2':
            console.log('Elegiste la opción ' + option + ': resta');
            let x1 = prompt('Ingresa el primer numero');
            let x = Number(x1);
            console.log('El primer valor es: ' + x)
            let y1 = prompt('Ingresa el segundo valor');
            let y = Number(y1);
            console.log('El segundo valor es: ' + y)
            let resta = x - y;
            console.log('El resultado es: ' + resta)
            alert('El resultado de la operación es: ' + resta);
            break;
        case '3':
            console.log('Elegiste la opción ' + option + ': multiplicación');
            let value1 = prompt('Ingresa el primer numero');
            let valueFirst = Number(value1);
            console.log('El primer valor es: ' + valueFirst)
            let value2 = prompt('Ingresa el segundo valor');
            let valueSecond = Number(value2);
            console.log('El segundo valor es: ' + valueSecond)
            let multiplicación = valueFirst * valueSecond;
            console.log('El resultado es: ' + multiplicación)
            alert('El resultado de la operación es: ' + multiplicación);
            break;
        case '4':
            console.log('Elegiste la opción ' + option + ': división');
            let va1 = prompt('Ingresa el primer numero');
            let firstValue = Number(va1);
            console.log('El primer valor es: ' + firstValue)
            let va2 = prompt('Ingresa el segundo valor');
            let secondValue = Number(va2);
            if (secondValue == 0) {
                console.log('El segundo valor es ' + secondValue + ' y no se puede dividir')
                alert('No se puede dividir entre ' + secondValue);
            } else {
                console.log('El segundo valor es: ' + secondValue)
                let division = firstValue / secondValue;
                console.log('El resultado es: ' + division)
                alert('El resultado de la operación es: ' + division);
            }
            break;
    }
}


printOperations()