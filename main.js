import { WORDS } from './data/wordlist.js';

const wordInputs = document.querySelectorAll('input');
const wordInputButton = document.querySelectorAll('.keyboard-item');
const wordSubmit = document.querySelector('.word-submit');
const ANSWER = WORDS[Math.floor(Math.random() * (WORDS.length - 0) + 0)];

console.log(ANSWER);


let count = 0;

const MAX_COUNT = 5;

const createNewLine = (index) =>{
    for(let i = index; i < index+5; i++){
        wordInputs[i].classList.add('word-input');
    }
    wordInputs[index].focus();
}

const onSubmitAnswer = () =>{
    let submitAnswer = [];
    const wordInputs = document.querySelectorAll('.word-input');
    wordInputs.forEach(wordInput =>{
        submitAnswer.push(wordInput.value);
    });
    if(!WORDS.includes(submitAnswer.join(''))){
        alert('올바른 단어를 입력해주세요');
        return;
    }
    for(let i = 0; i < 5; i++)
    {
        if(submitAnswer[i] === ANSWER[i]){
            wordInputs[i].classList.add("correct");
        }
        else if(ANSWER.includes(submitAnswer[i])){
            wordInputs[i].classList.add("approached");
        }
        else{
            wordInputs[i].classList.add("wrong");
        }
        wordInputs[i].removeEventListener('keyup', checkCharacter);
        wordInputs[i].setAttribute('disable', '');
        wordInputs[i].classList.remove('word-input');
    }
    if(count < MAX_COUNT)
    {
        count++;
    }
    createNewLine(5*count);
    submitAnswer=[];
}

const checkCharacter = (event) => {

    event.preventDefault();
        console.log(event);
        if(event.keyCode === 8){
            event.target.previousElementSibling.focus();
        }
        else if(event.keyCode !== 16){
            event.target.nextElementSibling.focus();
        }
}

wordInputButton.forEach(wordInput =>{
    wordInput.addEventListener('click', (event)=>{
        const wordInputs = document.querySelectorAll('.word-input');
        console.log(wordInputs);
        for(let i = 0; i < wordInputs.length; i++){
            console.log(wordInputs[i].value);
           if(wordInputs[i].value == ''){
            console.log('true!');
                wordInputs[i].value = event.target.textContent;
                break;
           }
           
        }
    })
})


wordInputs.forEach(wordInput => {
    wordInput.addEventListener('keyup', checkCharacter);
});

wordSubmit.addEventListener('click', onSubmitAnswer);