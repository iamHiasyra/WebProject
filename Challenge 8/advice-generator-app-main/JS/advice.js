const adviceText = document.querySelector('.advice-text');
const adviceID = document.querySelector('#advice-id');


fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        adviceID.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
    })
