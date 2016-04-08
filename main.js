(function () {
	//Use our component
	window.menu = new Dropdown({
		el: document.querySelector('.js-dropdown')
	}).on('menu.open', (event) => {
		console.log('MENU OPEN!');
	}).on('menu.close', (event) => {
		console.log('MENU CLOSE!');
	}).on('menu.select', (event) => {
		console.log('MENU SELECT!', event.detail.selectedItem);
	}).on('menu.select', (event) => {
		console.log('MENU SELECT2!');
	});
})();
