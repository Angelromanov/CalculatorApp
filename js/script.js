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
        } else if(first!=='' && second!=='' && sign ==''){
            calc.value +=key;
        } else{
            second+=key;
            calc.value +=key;
        }
    } else if(operation.includes(key)){
        if(key === 'C'){
            first = '', second = '', sign= '', results ='';
            calc.value = '';
        } else if(first!=='' && second!==''){
            switch(sign){
                case '÷':{
                    results = first/second;
                    calc.value = results;
                    sign = key;
                    if(key !== '=') calc.value +=key;
                    first = results;
                    second = '';
                    break;
                }
                case '%':{
                    results = first%second;
                    calc.value = results;
                    sign = key;
                    if(key !== '=') calc.value +=key;
                    first = results;
                    second = ''
                    break;
                }
                case '✕':{
                    results = first*second;
                    calc.value = results;
                    sign = key;
                    if(key !== '=') calc.value +=key;
                    first = results;
                    second = ''
                    break;
                }
                case '+':{
                    results = +first+ +second;
                    calc.value = results;
                    sign = key;
                    if(key !== '=') calc.value +=key;
                    first = results;
                    second = ''
                    break;
                }
                case '−':{
                    results = first-second;
                    calc.value = results;
                    sign = key;
                    if(key !== '=') calc.value +=key;
                    first = results;
                    second = ''
                    break;
                }
            }
        } else{
            sign = key;
            calc.value += key;
        }
    }
}

buttons.addEventListener("click", buttonsClick);

