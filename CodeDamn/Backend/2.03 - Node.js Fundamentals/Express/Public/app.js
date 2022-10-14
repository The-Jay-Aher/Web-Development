const counterEl = document.getElementById('counter');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const ulItems = document.getElementById('list-item');
let counterValue = 0;

function incrementCounter() {
   counterValue++;
   counterEl.innerText = counterValue;
   const li = document.createElement('li');
   li.innerHTML = '<b> Sentence </b>' + counterValue;
   li.setAttribute('data-counter', counterValue); // Create a new Attribute name
   //data-counter it has value of counterValue
   if (counterValue % 2 === 0) {
      li.style.background = 'red'
      li.style.padding = '10px'
   } else {
      li.style.background = 'yellow'
      li.style.padding = '20px'
   }
   console.log(li);
   ulItems.appendChild(li);
}

function decrementCounter() {
   const li = ulItems.querySelector('[data-counter = "' + counterValue + '"]');
   const number = li.getAttribute('data-counter');
   li.remove();
   counterValue--;
   counterEl.innerText = counterValue;
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
