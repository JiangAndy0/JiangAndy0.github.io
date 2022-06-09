//tab elements
const tabAboutMe = document.getElementById("about-me-tab");
const tabSkills = document.getElementById("skills-tab");
const tabProjects = document.getElementById("projects-tab");
const tabContact = document.getElementById("contact-tab");

const tabs = [tabAboutMe, tabSkills, tabProjects, tabContact];

//change active tab color to slate gray
tabs[0].style.backgroundColor = 'slategray';


//returns all tabs to original background color and event listeners
function resetTabs () {
    for (let i = 0; i < tabs.length; i++){
        tabs[i].style.backgroundColor = 'hsl(200, 50%, 20%)';
        tabs[i].addEventListener('mouseover', lightenTab);
        tabs[i].addEventListener('mouseout', returnTab);
    }
}

//changes active tab shown to user
function changeTab ( tab ) {
    tab.style.backgroundColor = 'slategray'; //changes tab to active tab background color
    //remove hover color changes for the active tab
    tab.removeEventListener( 'mouseover', lightenTab);
    tab.removeEventListener( 'mouseout', returnTab);
}

//lightens background color of a tab - for mouseover events
function lightenTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 25%)';
}
//darkens background color of a tab - for mouseout events
function returnTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 20%)';
}

//Following functions changes the fake browser to display different address bars/pages
function changeToAboutMe () {
    resetTabs();
    changeTab(tabAboutMe);
}

function changeToSkills () {
    resetTabs();
    changeTab(tabSkills);
}

function changeToProjects () {
    resetTabs();
    changeTab(tabProjects);
}

function changeToContact () {
    resetTabs();
    changeTab(tabContact);
}


//add event listeners to all the tabs
tabAboutMe.addEventListener('click', changeToAboutMe);
tabSkills.addEventListener('click', changeToSkills);
tabProjects.addEventListener('click', changeToProjects);
tabContact.addEventListener('click', changeToContact);
