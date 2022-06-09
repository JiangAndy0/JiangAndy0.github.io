//tab elements
const tabAboutMe = document.getElementById("about-me-tab");
const tabSkills = document.getElementById("skills-tab");
const tabProjects = document.getElementById("projects-tab");
const tabContact = document.getElementById("contact-tab");

const tabs = [tabAboutMe, tabSkills, tabProjects, tabContact];

//change active tab color to slate gray
tabs[0].style.backgroundColor = 'slategray';


//changes active tab - the active tab's background color becomes slate gray, associated navbar and content appears
function changeTab ( event ) {
    //sets all tabs to be default color and default hover states
    for (let i = 0; i < tabs.length; i++){
        tabs[i].style.backgroundColor = 'hsl(200, 50%, 20%)';
        tabs[i].addEventListener('mouseover', lightenTab);
        tabs[i].addEventListener('mouseout', returnTab);
    }
    event.target.style.backgroundColor = 'slategray'; //changes active tab's background color 
    //remove hover color changes for the active tab
    event.target.removeEventListener( 'mouseover', lightenTab);
    event.target.removeEventListener( 'mouseout', returnTab);
}

//lightens background color of a tab - for mouseover events
function lightenTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 25%)';
}
//darkens background color of a tab - for mouseout events
function returnTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 20%)';
}

//add event listeners to all the tabs
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener( 'click', changeTab );
    tabs[i].addEventListener( 'mouseover', lightenTab);
    tabs[i].addEventListener( 'mouseout', returnTab);
}
