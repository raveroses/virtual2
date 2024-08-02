document.addEventListener("DOMContentLoaded", function() {
    // Elements for sidebar interaction
    let bars = document.querySelector(".fa-bars");
    let anchors = document.querySelector(".first-anchor");
    let sideBar = document.querySelector(".sidebar");
    let times = document.querySelector(".fa-times");

    // Check if elements exist before adding event listeners
    if (bars && times) {
        // Sidebar interaction
        bars.addEventListener("click", function() {
            if (anchors) {
                anchors.classList.remove("hidden");
            }
            times.style.display = "block";
            bars.style.display = "none";
        });

        times.addEventListener("click", function() {
            if (anchors) {
                anchors.classList.add("hidden");
            }
            times.style.display = "none";
            bars.style.display = "block";
        });
    }

    // Elements for contact interaction
    let textPlace = document.querySelector(".textPlace");
    let emailInput = document.querySelector(".emailInput");
    let btnsubmit = document.querySelector(".Btn-submit");
    let textArea = document.querySelector(".textArea");
    let messagepart = document.querySelector(".messagepart");
    let outCome = document.querySelector(".outCome");
    let emailOutcome = document.querySelector(".emailOutcome");
    let textAreaOutcome = document.querySelector(".textAreaOutcome");

    if (btnsubmit) {
        // Contact Interaction function
        function ContactInteraction() {
            let textInput = textPlace.value.trim();
            let emailText = emailInput.value.trim();
            let textMessage = textArea.value.trim();
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isFormValid = true;

            if (textInput === "") {
                outCome.textContent = "This field is required!";
                outCome.style.fontSize = "13px";
                outCome.style.color = "red";
                isFormValid = false;
            } else if (textInput.charAt(0) !== textInput.charAt(0).toUpperCase()) {
                outCome.textContent = "Start with UpperCase";
                outCome.style.fontSize = "13px";
                outCome.style.color = "red";
                isFormValid = false;
            } else {
                outCome.textContent = "Move to the next field";
                outCome.style.fontSize = "13px";
                outCome.style.color = "green";
            }

            if (emailText === "") {
                emailOutcome.textContent = "This field is required!";
                emailOutcome.style.fontSize = "13px";
                emailOutcome.style.color = "red";
                isFormValid = false;
            } else if (emailRegEx.test(emailText)) {
                emailOutcome.textContent = "Valid email address";
                emailOutcome.style.fontSize = "13px";
                emailOutcome.style.color = "green";
            } else {
                emailOutcome.textContent = "Invalid email address";
                emailOutcome.style.fontSize = "13px";
                emailOutcome.style.color = "red";
            }

            if (textMessage === "") {
                textAreaOutcome.textContent = "This field is required!";
                textAreaOutcome.style.fontSize = "13px";
                textAreaOutcome.style.color = "red";
            } else {
                messagepart.textContent = `(${WordCount(textMessage)} characters)`;
                messagepart.style.color = "blanchedalmond";
            }

            if (isFormValid) {
                clearContactForm();
            }
        }

        // Function to count words
        function WordCount(text) {
            let convert = text.toLowerCase();
            let splits = convert.split(" ");
            let count = 0;
            for (let i = 0; i < splits.length; i++) {
                if (splits[i]) {
                    count++;
                }
            }
            return count;
        }

        // Function to clear the contact form
        function clearContactForm() {
            textPlace.value = "";
            emailInput.value = "";
            textArea.value = "";
            outCome.textContent = "";
            emailOutcome.textContent = "";
            textAreaOutcome.textContent = "";
            messagepart.textContent = "";
        }

        // Add event listener for the contact form submit button
        btnsubmit.addEventListener("click", function(e) {
            e.preventDefault();
            ContactInteraction();
        });

        // Add event listener for text area input
        textArea.addEventListener("input", function() {
            messagepart.textContent = `(${WordCount(textArea.value)} characters)`;
            messagepart.style.color = "blanchedalmond";
        });
    }

    // Elements for registration interaction
    let teamName = document.querySelector("#TeamName");
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#Email");
    let project = document.querySelector("#project");
    let category = document.querySelector("#category");
    let checkers = document.querySelector("#checker");
    let submitBtn = document.querySelector(".submitBtn");
    let groupSize = document.querySelector("#Group-size");
   
    // Elements for messages
    let teamText = document.querySelector(".teamText");
    let teamPhone = document.querySelector(".teamPhone");
    let teamEmail = document.querySelector(".teamEmail");
    let teamProject = document.querySelector(".teamProject");

    if (submitBtn) {
        // Register Interaction function
        function RegisterInteraction() {
            let textInput = teamName.value.trim();
            let emailText = email.value.trim();
            let projectInput = project.value.trim();
            let phoneInput = phone.value;
            const phonePattern = /^\+\d{13}$/;
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isFormValid = true;

            if (textInput === "") {
                teamText.textContent = "This field is required!";
                teamText.style.fontSize = "13px";
                teamText.style.color = "red";
                teamText.style.marginLeft="70px";
                isFormValid = false;
            } else if (textInput.charAt(0) !== textInput.charAt(0).toUpperCase()) {
                teamText.textContent = "Start with UpperCase";
                teamText.style.fontSize = "13px";
                teamText.style.color = "red";
                teamText.style.marginLeft="70px";
                isFormValid = false;
            } else {
                teamText.textContent = "Move to the next field";
                teamText.style.fontSize = "13px";
                teamText.style.color = "green";
                teamText.style.marginLeft="70px";
            }

            if (phoneInput === "") {
                teamPhone.textContent = "This field is required!";
                teamPhone.style.fontSize = "13px";
                teamPhone.style.color = "red";
                teamPhone.style.marginLeft="70px";
                isFormValid = false;
            } else if (!phonePattern.test(phoneInput)) {
                teamPhone.textContent = "Phone number must start with a plus and be exactly 14 digits long!";
                teamPhone.style.fontSize = "13px";
                teamPhone.style.color = "red";
                teamPhone.style.marginLeft="70px";
                isFormValid = false;
            } else {
                teamPhone.textContent = "Valid Phone Number!";
                teamPhone.style.fontSize = "13px";
                teamPhone.style.color = "green";
                teamPhone.style.marginLeft="70px";
            }

            if (emailText === "") {
                teamEmail.textContent = "This field is required!";
                teamEmail.style.fontSize = "13px";
                teamEmail.style.color = "red";
                teamEmail.style.marginLeft="70px";
                isFormValid = false;
            } else if (emailRegEx.test(emailText)) {
                teamEmail.textContent = "Valid email address";
                teamEmail.style.fontSize = "13px";
                teamEmail.style.color = "green";
                teamEmail.style.marginLeft="70px";
            } else {
                teamEmail.textContent = "Invalid email address";
                teamEmail.style.fontSize = "13px";
                teamEmail.style.color = "red";
                teamEmail.style.marginLeft="70px";
                isFormValid = false;
            }

            if (projectInput === "") {
                teamProject.textContent = "This field is required!";
                teamProject.style.fontSize = "13px";
                teamProject.style.color = "red";
                teamProject.style.marginLeft="70px";
                isFormValid = false;
            } else if (projectInput.charAt(0) !== projectInput.charAt(0).toUpperCase()) {
                teamProject.textContent = "Start with UpperCase";
                teamProject.style.fontSize = "13px";
                teamProject.style.color = "red";
                teamProject.style.marginLeft="70px";
                isFormValid = false;
            } else {
                teamProject.textContent = "Move to the next field";
                teamProject.style.fontSize = "13px";
                teamProject.style.color = "green";
                teamProject.style.marginLeft="70px";
            }

            // Ensure policy checkbox is checked
            if (!checkers.checked) {
                alert("You must agree to the policy!");
                isFormValid = false;
            }

            if (isFormValid) {
                clearRegistrationForm();
                congratulationDisplay();
            }
        }

        // Function to clear the registration form
        function clearRegistrationForm() {
            teamName.value = "";
            phone.value = "";
            email.value = "";
            project.value = "";
            category.selectedIndex = 0; // Reset to the default selected option
            groupSize.selectedIndex = 0; // Reset to the default selected option
            checkers.checked = false; // Uncheck the policy checkbox
            teamText.textContent = "";
            teamPhone.textContent = "";
            teamEmail.textContent = "";
            teamProject.textContent = "";
        }

        // Add event listener for the submit button
        submitBtn.addEventListener("click", function(e) {
            e.preventDefault();
            RegisterInteraction()
           
        });
    }
});


let congratulation= document.querySelector(".overlay-congratulation")
let overlay= document.querySelector(".backdrop");
let backs= document.querySelector(".backs")


function congratulationDisplay(){

    congratulation.classList.remove("hiddens");
    overlay.classList.remove("hiddens")
}




backs.addEventListener("click", function(){
    congratulation.classList.add("hiddens");
    overlay.classList.add("hiddens")
})










