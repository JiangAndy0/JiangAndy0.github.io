//tab elements
const tabAbout = document.getElementById("about-me-tab");
const tabSkills = document.getElementById("skills-tab");
const tabProjects = document.getElementById("projects-tab");
const tabContact = document.getElementById("contact-tab");

const tabs = [tabAbout, tabSkills, tabProjects, tabContact];

//address elements
const addressAbout = document.getElementById("address-about");
const addressSkills = document.getElementById("address-skills");
const addressProjects = document.getElementById("address-projects");
const addressContact = document.getElementById("address-contact");

const addresses = [addressAbout, addressSkills, addressProjects, addressContact];

//page elements
const pageAbout = document.getElementById("about-page");
const pageSkills = document.getElementById("skills-page");
const pageProjects = document.getElementById("projects-page");
const pageContact = document.getElementById("contact-page");

const pages = [pageAbout, pageSkills, pageProjects, pageContact];



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
    resetTabs();
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

//makes all addresses invisible
function resetAddresses () {
    for (let i = 0; i < addresses.length; i++){
        addresses[i].style.display = 'none';
    }
}
//changes address to address provided 
function changeAddress (address) {
    resetAddresses();
    address.style.display = 'block';
}

//makes all pages invisible
function resetPages () {
    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
}



//Following functions changes the fake browser to display different address bars/pages
function changeToAboutMe () {
    changeTab(tabAbout);
    changeAddress(addressAbout);
    resetPages();
    pageAbout.style.display = 'flex';
}

function changeToSkills () {
    changeTab(tabSkills);
    changeAddress(addressSkills)
    resetPages();
    pageSkills.style.display = 'block';
}

function changeToProjects () {
    changeTab(tabProjects);
    changeAddress(addressProjects);
    resetPages();
    pageProjects.style.display = 'block';
}

function changeToContact () {
    changeTab(tabContact);
    changeAddress(addressContact);
    resetPages();
    pageContact.style.display = 'flex';
}

//change active tab color to slate gray
tabs[0].style.backgroundColor = 'slategray';

//add event listeners to all the tabs
tabAbout.addEventListener('click', changeToAboutMe);
tabSkills.addEventListener('click', changeToSkills);
tabProjects.addEventListener('click', changeToProjects);
tabContact.addEventListener('click', changeToContact);
