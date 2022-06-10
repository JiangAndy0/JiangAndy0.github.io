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

//stores current tab, address, and page
let currentTab = tabAbout;
let currentAddress = addressAbout;
let currentPage = pageAbout;

//lightens background color of a tab - for mouseover events
function lightenTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 25%)';
}
//darkens background color of a tab - for mouseout events
function returnTab ( event ) {
    event.target.style.backgroundColor = 'hsl(200, 50%, 20%)';
}

//removes focus on the current tab, removes current address and page
function resetBrowser () {
    resetTab();
    currentAddress.style.display = 'none';
    currentPage.style.display = 'none';
}

//removes focus on the current tab
function resetTab () {
    currentTab.style.backgroundColor = 'hsl(200, 50%, 20%)';
    currentTab.addEventListener('mouseover', lightenTab);
    currentTab.addEventListener('mouseout', returnTab);
}


//changes tab shown as active
function makeTabActive ( tab ) {
    tab.style.backgroundColor = 'slategray'; //changes tab to active tab background color
    //remove hover color changes for the active tab
    tab.removeEventListener( 'mouseover', lightenTab);
    tab.removeEventListener( 'mouseout', returnTab);

    currentTab = tab; //update current tab
}



//changes address to address provided 
function showAddress (address) {
    address.style.display = 'block';
    
    currentAddress = address; //update current address
}

//changes page to page provided 
function showPage (page) {
    page.style.display = 'block';

    currentPage = page; //update current page
}

//launches when a tab is clicked to change the active 'website' shown to user
function changeActive (event) {
    resetBrowser();
    makeTabActive(event.target);
    let index = tabs.indexOf(event.target);
    showAddress(addresses[index]);
    showPage(pages[index]);
}

//change active tab color to slate gray
tabs[0].style.backgroundColor = 'slategray';

//add event listeners to all the tabs
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', changeActive);
}
