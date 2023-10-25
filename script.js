
const buttons = document.querySelectorAll('.btn');
const submitButton = document.querySelector('.submit-btn');

let feedback = 0;

buttons.forEach(button => {
  button.onclick = () => selectedButton(button);
})

function selectedButton (btn) {
  feedback = btn.value;

  buttons.forEach(btnOff => {
    btnOff.classList.remove('selected-btn');
  })

  btn.classList.add('selected-btn');

  console.log(feedback);
}


function showResult () {
  if (feedback === 0) {
    return
  }

  document.getElementById('feedback-article')
    .innerHTML = `
    <div class="thank-you-div">
      <img src="images/illustration-thank-you.svg" alt="Thank you image" title="Thank you very much&excl;" class="thank-you-image">
    </div>
  
    <div class="feedback-stat">
      <p class="js-feedback-result">You selected ${feedback} out of 5</p>
    </div>
  
    <div class="thank-you-tittle-container">
      <h3>Thank you&excl;</h3>
      <p>We appreciate you taking the time to give a rating. if you ever need more support, don&apos;t hesitate to get in touch&excl;</p>
    </div>

    `;
}
