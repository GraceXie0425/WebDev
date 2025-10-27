// Dark Mode
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// RSVP Form
const rsvpButton = document.getElementById('rsvp-button');

function addParticipant(person){
    const participantsDiv = document.querySelector('.rsvp-participants');
    let displayEvent = '';
    if(person.event==='share-your-story-day') displayEvent='Share Your Story Day';
    else if(person.event==='words-of-encouragement-week') displayEvent='Words of Encouragement Week';
    else if(person.event==='let-it-go-challenge') displayEvent='Let It Go Challenge';

    const p = document.createElement('p');
    p.textContent = `🎉 ${person.name} has RSVP'd for ${displayEvent}.`;
    participantsDiv.appendChild(p);

    document.getElementById('rsvp-form').reset();
}

// Form Validation
function validateForm(e){
    e.preventDefault();
    let hasErrors=false;

    const nameInput=document.getElementById('name');
    const emailInput=document.getElementById('email');
    const eventSelect=document.getElementById('event');

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    eventSelect.classList.remove('error');

    if(nameInput.value.trim()===''){ nameInput.classList.add('error'); hasErrors=true; }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailInput.value.trim())){ emailInput.classList.add('error'); hasErrors=true; }

    if(eventSelect.value==='None'){ eventSelect.classList.add('error'); hasErrors=true; }

    if(!hasErrors){
        const person={name:nameInput.value.trim(),email:emailInput.value.trim(),event:eventSelect.value};
        addParticipant(person);
        toggleModal(person);
    }
}

rsvpButton.addEventListener('click',
