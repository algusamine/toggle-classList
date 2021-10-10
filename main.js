document.querySelector('button').addEventListener('click', switchColors)
    function switchColors(){
        let toggleColors = document.querySelector('.toggle');
        toggleColors.classList.toggle('active')

    }
    document.querySelector('#hide').addEventListener('click', hideIt)
    function hideIt(){
       let x = document.querySelector('#hide-me');
       if (x.style.display === "none") {
        x.style.display = "block";
        document.querySelector('#hide').textContent = 'Make it disappear!'
        } else {
        x.style.display = "none";
        document.querySelector('#hide').textContent = 'Make it appear!'
      } 
    }
    let numbers = [1, 2, 3, 4];
   numbers.forEach(x => {
     let individualDiv = document.createElement('div');
     individualDiv.className = `number${x}`;
     let number = document.createElement('p');
     number.textContent = x;
     individualDiv.append(number);
     document.querySelector('#numbers').append(individualDiv)
   })

   document.querySelector('.group-one').addEventListener('click', ()=> {
     document.querySelector(`.number1`).classList.toggle('hidden')
   })
   document.querySelector('.group-two').addEventListener('click', ()=> {
    document.querySelector(`.number2`).classList.toggle('hidden')
   })
   document.querySelector('.group-three').addEventListener('click', ()=> {
    document.querySelector(`.number3`).classList.toggle('hidden')
   })
   document.querySelector('.group-four').addEventListener('click', ()=> {
    document.querySelector(`.number4`).classList.toggle('hidden')
   })
    