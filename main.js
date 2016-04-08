(function () {
	//Use our component
	window.menu = new Dropdown({
		el: document.querySelector('.js-dropdown')
	}).on('menu.open', () => {
		console.log('MENU OPEN!');
	}).on('menu.close', () => {
		console.log('MENU CLOSE!');
	}).on('menu.select', (selectedItem) => {
		console.log('MENU SELECT!', selectedItem);
	}).on('menu.select', () => {
		console.log('MENU SELECT2!');
	});
})();
