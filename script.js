//button to scroll to the window or up
const scrollButton = document.getElementById("scroll-button");
const chevronIcon = document.getElementById("chevron-icon")
scrollButton.addEventListener('click', () => {
    if(chevronIcon.classList.contains('fa-chevron-down')){ //window not currently fully showing, scroll down
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    } else { //window currently fully showing, scroll up
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
})

//change scroll button based on whether #window is fully visible
const observer = new IntersectionObserver(entries => {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){ //#window is fully visible, show up chevron
        chevronIcon.classList.remove('fa-chevron-down');
        chevronIcon.classList.add('fa-chevron-up'); //replace down chevron with up chevron
    } else { //#window is not fully visible, show down chevron
        chevronIcon.classList.remove('fa-chevron-up');
        chevronIcon.classList.add('fa-chevron-down'); //replace up chevron with down chevron
    }
}, { threshold: [1] });

observer.observe(document.querySelector("#window"));

//tab bar elements
const tabBar = document.getElementById("tab-bar");

const tabAbout = document.getElementById("about-me-tab");
const tabSkills = document.getElementById("skills-tab");
const tabProjects = document.getElementById("projects-tab");
const tabContact = document.getElementById("contact-tab");

const tabs = [tabAbout, tabSkills, tabProjects, tabContact];

//navigation bar elements
const navigationBar = document.getElementById("navigation-bar");

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

//navigation bar button elements
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const refresh = document.getElementById("refresh");
const tabButton = document.getElementById("tabs-button"); //only appears when window size < 900px
const pullUp = document.getElementById("pull-up"); //only appears when window size < 900px

//stores current tab, address, and page
let currentTab = tabAbout;
let currentAddress = addressAbout;
let currentPage = pageAbout;

//variable to alternate between animations
let evenTurn = true;

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
function highlightTab ( tab ) {
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
    //pull up tab bar and nav bar if window width is less than 900px
     if (window.innerWidth < 900){
        upBars();
        currentPage.style.top = '0'; //make sure the current page is moved up before changing current page
    }
    page.style.display = 'block';

    currentPage = page; //update current page

}

//changes the active 'site' in the browser
function changeSiteTo ( siteIndex ) {
    resetBrowser();
    highlightTab(tabs[siteIndex]);
    showAddress(addresses[siteIndex]);
    showPage(pages[siteIndex]);
    currentPage.style.animation = '';
}

//launches when a tab is clicked to change the active 'site' in the browser
function tabEventHandler (event) {
    let index = tabs.indexOf(event.target); //find index of tab that got clicked on
    changeSiteTo(index);
}

//Goes to the 'site' of the tab to the left of the current tab, if possible
function toLeftSite () {
    let index = tabs.indexOf(currentTab);
    if (index !== 0){ //if the current site is not the leftmost site
        changeSiteTo(index - 1);
    }
}

//Goes to the 'site' of the tab to the right of the current tab, if possible
function toRightSite () {
    let index = tabs.indexOf(currentTab);
    if (index !== tabs.length - 1 ){ //if the current site is not the rightmost site
        changeSiteTo(index + 1);
    } 
}

//"Refreshes" the current page by making it invisible and slowly increasing its opacity
function refreshPage () {
    currentPage.style.opacity = '0';
    if (evenTurn){
        currentPage.style.animation = 'reappear1 1s ease-in 0.5s forwards';
        evenTurn = false;
    } else {
        currentPage.style.animation = 'reappear2 1s ease-in 0.5s forwards';
        evenTurn = true;
    }
    currentPage.style.opacity = '100';

}


//"Pulls down" the tab bar, nav bar, and page by changing their position
function downBars () {
    tabBar.style.top = '0'; //from -135px to 0
    navigationBar.style.top = '135px'; //from 0 to 135px
    currentPage.style.top = '135px'; //from 0 to 135px
    tabButton.style.display = 'none'; //make tab button disappear
    pullUp.style.display = 'block'; //make pull up button appear
}

//"Pulls up" the tab bar and nav bar by changing their position
function upBars () {
    tabBar.style.top = '-135px'; //from 0 to -135px
    navigationBar.style.top = '0'; //from 135px to 0
    currentPage.style.top = '0'; //from 135px to 0
    tabButton.style.display = 'block'; //make tab button appear
    pullUp.style.display = 'none'; //make pull up button disappear
}

//Adjusts what buttons are displayed based on screen size
function windowResizeHandler () {
    if (window.innerWidth > 900){ //if the window width is greater than 900px, hide tab-button/pull up button
        tabButton.style.display = 'none';
        pullUp.style.display = 'none';
        currentPage.style.top = '0';
    } else {
        upBars(); //ensure the default tab/navigation bar position is shown
    }
}
//add event listeners to all the tabs
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', tabEventHandler);
}

//add event listeners to the navigation bar buttons
arrowLeft.addEventListener('click', toLeftSite);
arrowRight.addEventListener('click', toRightSite);
refresh.addEventListener('click', refreshPage);
tabButton.addEventListener('click', downBars);
pullUp.addEventListener('click', upBars);

//add an event listener to the window so resizing can trigger a function
window.addEventListener('resize', windowResizeHandler);

//change active tab color to slate gray
tabs[0].style.backgroundColor = 'slategray';
