/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


function Time() {
 // Creating object of the Date class
 var date = new Date();
 // Get current hour
 var hour = date.getHours();
 // Get current minute
 var minute = date.getMinutes();
 // Get current second
 var second = date.getSeconds();
 // Variable to store AM / PM
 var period = "";
 // Assigning AM / PM according to the current hour
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 }
 // Converting the hour in 12-hour format
 if (hour == 0) {
 hour = 12;
 } else {
 if (hour > 12) {
 hour = hour - 12;
 }
 }
 // Updating hour, minute, and second
 // if they are less than 10
 hour = update(hour);
 minute = update(minute);
 second = update(second);
 // Adding time elements to the div
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
 // Set Timer to 1 sec (1000 ms)
 setTimeout(Time, 1000);
}
 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}
Time();


/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




