let button = document.getElementById('finish');

button.addEventListener('click', checkTest);

function checkTest(){
  let result = 0
  let a1 = document.getElementById('q1').value;
  let a2 = document.getElementById('q2').value;
  let a3 = document.getElementById('q3').value;
  let a4 = document.getElementById('q4').value;
  let a5 = document.getElementById('q5').value;
  let a6 = document.getElementById('q6').value;
  let a7 = document.getElementById('q7').value;
  let a8 = document.getElementById('q8').value;
  
  let question = [a1, a2, a3, a4, a5, a6, a7, a8]
  let answers = [4, 4, 1, 15, 28, 48, 4, 40]

  

  for(let i = 0; i < question.length; i++){
    if(answers[i] == question[i]){
      result++
    }
    else {
      console.log(`answer ${i+1}`, question[i], 'not is', answers[i])
    }
  }
  console.log(result)
}