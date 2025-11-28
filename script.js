const input1 = document.getElementById('input_h')
const input2 = document.getElementById('input_w')
const btn = document.getElementById('button')
const display = document.getElementById('display')

btn.addEventListener('click',()=>{
  const input_h = parseFloat(input1.value)
  const input_w = parseFloat(input2.value)
   if(input_h<=0 || input_w<=0){
    display.textContent = 'please enter the valid details'
   }
   //convert height into meters
   const person_hg = input_h/100
    
   //claculating the bmi
   const bmi = input_w / (person_hg*person_hg)
    const bmi_round = bmi.toFixed(1)

   if(bmi<18.5){
    display.textContent =`${bmi_round }'underweight'`
   }
   else if(bmi >= 18.5 && bmi<=24.9){
    display.textContent = `${bmi_round }'Normal weight'`
   }
   else if(bmi >=25 && bmi <=29.9){
    display.textContent = `${bmi_round }'overweight'`
   }
   else{
    display.textContent = `${bmi_round }'Please take care of your health'`
   }
})