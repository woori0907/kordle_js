const wordInputs = document.querySelectorAll('input');
const wordSubmit = document.querySelector('.word-submit');
console.log(wordInputs);
const ANSWER = ['ㄱ','ㅗ','ㅂ','ㅏ','ㅣ','ㄱ'];

let count = 0;

const MAX_COUNT = 5;

const createNewLine = (index) =>{
    for(i = index; i < index+6; i++){
        wordInputs[i].classList.add('word-input');
    }
}

const onSubmitAnswer = () =>{
    let submitAnswer = [];
    const wordInputs = document.querySelectorAll('.word-input');
    wordInputs.forEach(wordInput =>{
        submitAnswer.push(wordInput.value);
    });
    for(i = 0; i < 6; i++)
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
    console.log(count)
    createNewLine(6*count);
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

wordInputs.forEach(wordInput => {
    wordInput.addEventListener('keyup', checkCharacter);
});

wordSubmit.addEventListener('click', onSubmitAnswer);