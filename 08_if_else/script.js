let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click',function(){ 
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    minValue.value = (minValue.value <= 0)? minValue.value = 0 :(minValue.value >= 0)? minValue.value = 0 : minValue.value;
    maxValue.value = (maxValue.value <= 100)? maxValue.value = 100 :(maxValue.value >= 100)? maxValue.value = 100 : minValue.value;
    if (parseInt(maxValue.value) < parseInt(minValue.value)){
        [maxValue.value, minValue.value] = [minValue.value, maxValue.value];
    }
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    //minValue = 0;
    //maxValue = 100;
    //orderNumber = 0;
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()* 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()* 4);
            if (phraseRandom === 1){
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
            } else
            if (phraseRandom === 2){
                answerField.innerText = `Это число ${answerNumber }?`;
            } else
            if (phraseRandom === 3){
                answerField.innerText = `Может это ${answerNumber }?`;
            } 
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()* 4);
            if (phraseRandom === 1){
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}` ;
            } else
            if (phraseRandom === 2){
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else
            if (phraseRandom === 3){
                answerPhrase = `Ты меня одолел!\n\u{1F914}` ;
            } 
           
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()* 4);
            if (phraseRandom === 1){
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
            } else
            if (phraseRandom === 2){
                answerField.innerText = `Это число ${answerNumber }?`;
            } else
            if (phraseRandom === 3){
                answerField.innerText = `Может это ${answerNumber }?`;
            } 
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()* 4);
        if (phraseRandom === 1){
            answerField.innerText = `Ура!`;
        } else
        if (phraseRandom === 2){
            answerField.innerText = `Это было не сложно!`;
        } else
        if (phraseRandom === 3){
            answerField.innerText = `Проще простого!`;
        } 
        gameRun = false;
    }
})
