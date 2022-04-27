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

const removeLine = () => {
    const wordInputs = document.querySelectorAll('.word-input');
    for(let i = 0; i < 5; i++){
        wordInputs[i].value='';
    }
}

const gameResult = () => {
    console.log("win!");
}


const keyboardColor = (value, status) => {
    console.log(value);
    for(let i = 0; i < wordInputButton.length; i++){
        console.log(wordInputButton[i]);
        if(wordInputButton[i].textContent === value){
            
            switch(status){
                case 'correct' :
                    wordInputButton[i].classList.add("correct");
                    break;
                case 'approached' :
                    wordInputButton[i].classList.add("approached");
                    break;
                default :
                wordInputButton[i].classList.add("wrong");
                    break;
            }
        }
    }
}

const onSubmitAnswer = () =>{
    let submitAnswer = [];
    let correctCount = 0;
    const wordInputs = document.querySelectorAll('.word-input');
    wordInputs.forEach(wordInput =>{
        submitAnswer.push(wordInput.value);
    });
    if(!WORDS.includes(submitAnswer.join(''))){
        alert('올바른 단어를 입력해주세요');
        removeLine();
        return;
    }
    for(let i = 0; i < 5; i++)
    {
        if(submitAnswer[i] === ANSWER[i]){
            wordInputs[i].classList.add("correct");
            keyboardColor(submitAnswer[i], 'correct');
            correctCount++;
        }
        else if(ANSWER.includes(submitAnswer[i])){
            wordInputs[i].classList.add("approached");
            keyboardColor(submitAnswer[i], 'approached');
        }
        else{
            wordInputs[i].classList.add("wrong");
            keyboardColor(submitAnswer[i], 'wrong');
        }
        wordInputs[i].removeEventListener('keyup', checkCharacter);
        wordInputs[i].setAttribute('disable', '');
        wordInputs[i].classList.remove('word-input');
    }
    if(correctCount === 5){
        gameResult();
        return;
    }
    if(count < MAX_COUNT)
    {
        count++;
    }
    createNewLine(5*count);
    submitAnswer=[];
}



const deleteCharacter = (target) => {
    console.log(target);
    target.focus();
    target.textContent='';
}

const checkCharacter = (event) => {

    event.preventDefault();
        if(event.keyCode === 8){
            deleteCharacter(event.target.previousElementSibling);
        }
        else if(event.keyCode !== 16){
            event.target.nextElementSibling.focus();
        }
}

wordInputButton.forEach(wordInput =>{
    wordInput.addEventListener('click', (event)=>{
        const wordInputs = document.querySelectorAll('.word-input');
        let currentIndex;
        for(let i = 0; i < wordInputs.length; i++){
            if(wordInputs[i].value == ''){
                console.log(`index=${i}`);
                currentIndex = i;
                console.log(currentIndex);
                break;
            }
            else if(wordInputs[4].value !== ''){
                console.log('four');
                currentIndex = 4;
                break;
            }
        }
        if(event.target.textContent !== "삭제" && event.target.textContent !== "확인"){
            wordInputs[currentIndex].value = event.target.textContent;
            }
        else if(event.target.textContent == "삭제"){
            console.log(currentIndex);
                if(currentIndex === 4 && wordInputs[4].value !== ''){
                    wordInputs[currentIndex].value='';
                }
                else{
                    wordInputs[currentIndex-1].value='';
                    currentIndex--;  
                }
           }
    })
})


wordInputs.forEach(wordInput => {
    wordInput.addEventListener('keyup', checkCharacter);
});

wordSubmit.addEventListener('click', onSubmitAnswer);