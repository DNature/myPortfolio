// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const portrait = document.querySelector('.portrait');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of the menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		portrait.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach(item => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		portrait.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));

		// Set Menu State
		showMenu = false;
	}
}

// Select Dom Items for Icon Navigation
const iconBtn = document.querySelector('.menu-navigator');
const iconNav = document.querySelector('.iconnav');
const iconNavNav = document.querySelector('.iconnav-nav');
const navList = document.querySelectorAll('.iconnav-list');

// Set Initial State of Icon Menu

let showIcon = false;

iconBtn.addEventListener('click', toggleMenu2);

function toggleMenu2() {
	if (!showIcon) {
		iconBtn.classList.add('close');
		iconNav.classList.add('show');
		iconNavNav.classList.add('show');
		navList.forEach(item => item.classList.add('show'));

		// Set Icon Menu State

		showIcon = true;
	} else {
		iconBtn.classList.remove('close');
		iconNav.classList.remove('show');
		iconNavNav.classList.remove('show');
		navList.forEach(item => item.classList.remove('show'));

		// Set Icon Menu State

		showIcon = false;
	}
}

/*
 * ---------------------------------------------------------------
 * -- Define constiables
 * -- Calculate the document height and set offset to a quarter of        that valu
 * -- Add Event Listener
 * --
 * --
 * ---------------------------------------------------------------
 */

// const btt = document.getElementById('back-to-top'),
// 	body = document.body,
// 	docElem = document.documentElement,
// 	offset = 100,
// 	scrollPos,
// 	docHeight;

// // calculate document height
// docHeight = Math.max(
// 	body.scrollHeight,
// 	body.offsetHeight,
// 	docElem.clientHeight,
// 	docElem.scrollHeight,
// 	docElem.offsetHeight
// );
// if (docHeight != 'undefined') {
// 	offset = docHeight / 6;
// }

// //Add scroll event listener
// window.addEventListener('scroll', () => {
// 	scrollPos = body.scrollTop || docElem.scrollTop;

// 	btt.className = scrollPos > offset ? 'visible' : '';
// });
