const logos = document.querySelector('#logo')

let load = 0

let int = setInterval(blurring, 80)
function blurring() {
   load++
   if(load > 99){
     clearInterval (int)
  }
   // loadText.innerText = `${load}`
   logos.style.opacity = scale(load, 0, 100, 0, 1)
   //bg.style.filter = blur(${scale(load,0 ,100, 30, 0)}px)
   //collegeName.style.opacity = scale(load, 0, 100, 0, 1)
}
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers -->
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}