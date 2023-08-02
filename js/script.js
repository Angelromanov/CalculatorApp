const buttons = document.querySelector('.grid');
const calc = document.querySelector('.calc')

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operation = ['C', '÷', '%', '←', '✕', '−', '+', '=']
let first = '', second = '', sign= '', results;

function buttonsClick(e){
    if(!e.target.classList.contains('btn')) return;
    let key = e.target.textContent;
    if(number.includes(key)){
        if(second === '' && sign === ''){
            first+=key;
            calc.value +=key;
            console.log(first, second, sign)
        } else if(first!=='' && second!=='' && sign ===''){
            calc.value +=key;
            console.log(first, second, sign)
        } else{
            second+=key;
            calc.value +=key;
            console.log(first, second, sign)
        }
    } else if(operation.includes(key)){
        if(key === 'C'){
            first = '', second = '', sign= '', results ='';
            calc.value = '';
            console.log(first, second, sign)
        } else if(first!=='' && second!==''){
            switch(sign){
                case '÷':{
                    results = first/second;
                    break;
                }
                case '%':{
                    results = first%second;
                    break;
                }
                case '✕':{
                    results = first*second;
                    break;
                }
                case '+':{
                    results = +first+ +second;
                    break;
                }
                case '−':{
                    results = first-second;
                    break;
                }
            }
            calc.value = results;
            sign = key;
            key === '=' ? sign = '' : calc.value +=key;
            first = results;
            second = ''
            console.log(first, second, sign)
        } else{
            sign = key;
            calc.value += key;
            console.log(first, second, sign)
        }
    }
}

buttons.addEventListener("click", buttonsClick);

