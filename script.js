
    
    
  
async function fetchAdvice() {
   let myAdvice = fetch('https://api.adviceslip.com/advice')
   .then((response) => response.json())
   .then((data) =>{ 
    
    let res = data['slip']['advice']
    document.getElementById("advice_of_the_day").innerHTML=res
})

}
fetchAdvice();