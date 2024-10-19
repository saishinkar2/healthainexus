document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("riskCheckerForm");
    const resultDiv = document.getElementById("result");

    document.getElementById("calculateButton").addEventListener("click", function () {
        
        const age = parseInt(document.getElementById("age").value);
        const familyHistory = document.querySelector('input[name="familyHistory"]:checked').value;
        const BMI = parseFloat(document.getElementById("BMI").value);
        const exercise = parseFloat(document.getElementById("exercise").value);
        const diet = document.querySelector('input[name="diet"]:checked').value;
        let count = 0 ;
        let run = false;
        document.querySelectorAll("input").forEach(element => {
            if(element.getAttribute("type") == "number"){
              if(parseFloat(element.value)){
              }
              else{
                count +=1 
                
              }
            }
            if (count > 0) {
                run = false
            }else{
                run = true
            }
          })
diabetesFinal(run,familyHistory,BMI,exercise,diet)
 

    });
});
function diabetesFinal(correct,familyHistory,BMI,exercise,diet){
if(correct){
    if (correct) {
        let risk = 0;
    
        if (age >= 40) {
            risk += 2;
        }
    
        if (familyHistory === "Yes") {
            risk += 3;
        }
    
        if (BMI >= 30) {
            risk += 5;
        }
    
        if (exercise < 3) {
            risk += 3;
        }
    
        if (diet === "NotHealthy") {
            risk += 4;
        }
        alert(`Your diabetes risk score: ${risk}`);
    
      }
}else{
    alert("Please enter a valid number")
}
}