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
    