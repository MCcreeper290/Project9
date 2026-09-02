function checkCode() {
           
            const userInput = document.getElementById("passcode").value;
            const errorDiv = document.getElementById("errorMessage");

            
            const correctCode = "Project583703546Core";

       
            if (userInput === correctCode) {
            
                errorDiv.innerText = "";
                window.location.href = "RND-Redacted.html"; 
            } else {
             
                errorDiv.innerText = "Incorrect code. Please try again.";
            }
        }
