function converter(){
    let to = document.getElementById('to').value ;
    let from = document.getElementById('from').value;
    let temp = parseFloat(document.getElementById('temp').value);
    let new_result = document.getElementById('result');

    let result;
    if(to=='C' && from=='F'){
        result = temp*(9/5)+32;
    }
    else if(to=='C' && from=='K'){
        result = temp+273.15;
    }
    else if(to=='F' && from=='C'){
        result = (temp-32)*(5/9);
    }
    else if(to=='F' && from=='K'){
        result= (temp - 32) * (5/9) + 273.15;
    }
    else if(to=='K' && from=='C'){
        result=temp-273.15;
    }
    else if(to=='K' && from=='F'){
        result= (temp - 273.15) * (9/5) + 32
    }
    else{
        result=temp;
    }

    new_result.value = result.toFixed(2);
}