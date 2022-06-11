let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Number_Previews_V = document.getElementById('calculator_input_Number_Previews');

let Calculator_input_AC_V = document.getElementById('Calculator_input_AC');

let DisplayValue;

function display(DisplayValue){
    calculator_input_Number_V.value+=DisplayValue;

}

Calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value="";
    calculator_input_Number_Previews_V.value="";

})

function displaySolve(){

    let eq = calculator_input_Number_V.value;

    calculator_input_Number_Previews_V.value=eq;

    let y= eval(eq);

    calculator_input_Number_V.value=y;


}

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');

// Set up the time
const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    if (currentHour > 12) {
      currentHour -= 12;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
  }
  setInterval(updateTime, 1000);
  updateTime();