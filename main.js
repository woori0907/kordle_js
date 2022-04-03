const wordInputs = document.querySelectorAll('.word-input');
const wordSubmit = document.querySelector('.word-submit');
console.log(wordInputs);
const ANSWER = ['ㄱ','ㅗ','ㅂ','ㅏ','ㅣ','ㄱ'];

const onSubmitAnswer = () =>{
    console.log(wordInputs);
    const submitAnswer = [];
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
    }
}

wordInputs.forEach(wordInput => {
    wordInput.addEventListener('keyup', (event) => {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === 229){
            if(event.keyCode === 16){
                wordInput.textContent='';
                return;
            }
            wordInput.nextElementSibling.focus();
        }
        if(event.keyCode === 8){
            wordInput.previousElementSibling.focus();
        }
        if(event.keyCode === 16){
            wordInput.textContent='';
        }
    });
});

wordSubmit.addEventListener('click', onSubmitAnswer);