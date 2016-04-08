(function () {
	'use strict';

	class Dropdown {
		constructor (options) {
			this.el = options.el;
			this.title = this.el.querySelector('.js-title');
			this.handlers = {};
			this._initEvents();
		}
		
		/**
		 * Add classname dropdown_open to element
		 */
		open () {
			this.el.classList.add('dropdown_open');
			this._onOpen();
		}

		/**
		 * Remove classname dropdown_open to element
		 */
		close () {
			this.el.classList.remove('dropdown_open');
			this._onClose();
		}
		
		/**
		 * Select item
		 */
		select (item) {
			this.title.innerHTML = item.innerText;
			this._onSelect(event.target);
		}
		
		/**
		 * Open or close?
		 */
		toggle () {
			if (this.isOpen()) {
				this.close();
			} else {
				this.open();
			}
		}

		isOpen () {
			return this.el.classList.contains('dropdown_open');
		}

		/**
		 * Bind initial events
		 */
		_initEvents () {
			this.el.addEventListener('click', this._actionSelectItem.bind(this));
		}

		/**
		 * Action select item
		 */
		_actionSelectItem (event) {
			var target = event.target;
			
			if (target.classList.contains('dropdown__item')) {
				this.select(target);
			}
			
			this.toggle();
		}
		
		/**
		 * Dispatch event 'menu.open'
		 */
		_onOpen () {
			if (this.handlers['menu.open'])
				this.handlers['menu.open'].forEach((callback) => {
					callback();
				});
		}
		
		/**
		 * Dispatch event 'menu.close'
		 */
		_onClose () {
			if (this.handlers['menu.close'])
				this.handlers['menu.close'].forEach((callback) => {
					callback();
				});
		}
		
		/**
		 * Dispatch event 'menu.select'
		 */
		_onSelect (selectedItem) {
			if (this.handlers['menu.select'])
				this.handlers['menu.select'].forEach((callback) => {
					callback(selectedItem);
				});
		}
		
		/**
		 * Register new event listener
		 */
		on (eventName, callback) {
			if (!this.handlers[eventName])
				this.handlers[eventName] = [];
			this.handlers[eventName].push(callback);
			return this;
		}
		
		/**
		 * Remove event listener
		 */
		off (eventName, callback) {
			this.handlers[eventName].remove(callback);
			return this;
		}
		
		//TODO: method addItem
	}

	//EXPORT
	window.Dropdown = Dropdown;

})();
