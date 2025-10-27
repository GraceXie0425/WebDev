/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button');

// Step 2: Write your code to manipulate the DOM here
const addParticipant = (person) => {

  // Get user inputs
  const name = person.name;
  const eventSelected = person.event;

  // Create a new <p> element for the participant
  const newEntry = document.createElement('p');

  // Get a display-friendly version of the event name
  let displayEvent = '';
  if (eventSelected === 'share-your-story-day') {
    displayEvent = 'Share Your Story Day';
  } else if (eventSelected === 'words-of-encouragement-week') {
    displayEvent = 'Words of Encouragement Week';
  } else if (eventSelected === 'let-it-go-challenge') {
    displayEvent = 'Let It Go Challenge';
  }

  // Set the content with an emoji and details
  newEntry.textContent = `🎉 ${name} has RSVP'd for ${displayEvent}.`;

  // Append the new <p> to the .rsvp-participants container
  const participantsDiv = document.querySelector('.rsvp-participants');
  participantsDiv.appendChild(newEntry);

  // Optional: Reset the form after submission
  document.getElementById('rsvp-form').reset();
};

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const eventSelect = document.getElementById("event");

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  eventSelect.classList.remove("error");

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    containsErrors = true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("error");
    containsErrors = true;
  }

  if (eventSelect.value === "None") {
    eventSelect.classList.add("error");
    containsErrors = true;
  }
  
  if (!containsErrors) {
    let person = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      event: eventSelect.value
    };
    addParticipant(person);
    toggleModal(person); 
  }
  
};

rsvpButton.addEventListener('click', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
let rotateFactor = 10;  // This will alternate between 0 and -10 for rotation
let modalImage = document.getElementById("modal-image");  // Assuming you have an image with id 'modal-image'

const animateImage = () => {
  if (modalImage) {  // Ensure the modal image is available
    // Alternate between 0 and -10 degrees for rotation
    rotateFactor = rotateFactor === 2 ? -2 : 2;

    modalImage.style.transition = "transform 0.5s ease-in-out";  
    // Apply the rotation to the modal image
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  }
};

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");  // Get the modal element
  const modalText = document.getElementById("modal-text");  // Get the text element inside the modal
  
  // Check if the modal exists
  if (modal && modalText) {
    // Display the modal (set display to flex to make it visible)
    modal.style.display = "flex"; 

    // Update the modal text with the personalized message
    modalText.innerHTML = `✅ You're Signed Up! We're excited to have you join the event.<br><br>Thanks for RSVP, <strong>${person.name}</strong>!`;

    setInterval(animateImage, 600);
    // Set a timeout to hide the modal after 5 seconds
    setTimeout(() => {
      modal.style.display = "none";  // Hide the modal
    }, 5000);  // 5000 milliseconds (5 seconds)
  }
};



