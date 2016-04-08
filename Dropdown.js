(function () {
	'use strict';

	class Dropdown {
		constructor (options) {
			this.el = options.el;
			this.title = this.el.querySelector('.js-title');
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
			if (event.target.classList.contains('dropdown__item'))
				this.select(event.target);
			this.toggle(); 
		}
		
		/**
		 * Dispatch event 'menu.open'
		 */
		_onOpen () {
			this.el.dispatchEvent(new CustomEvent('menu.open', {
				bubbles: false,
				detail: {
					menu: this
				}
			}));
		}
		
		/**
		 * Dispatch event 'menu.close'
		 */
		_onClose () {
			this.el.dispatchEvent(new CustomEvent('menu.close', {
				bubbles: false,
				detail: {
					menu: this
				}
			}));
		}
		
		/**
		 * Dispatch event 'menu.select'
		 */
		_onSelect (selectedItem) {
			this.el.dispatchEvent(new CustomEvent('menu.select', {
				bubbles: false,
				detail: {
					menu: this,
					selectedItem
				}
			}));
		}
		
		/**
		 * Register new event listener
		 */
		on (eventName, callback) {
			this.el.addEventListener(eventName, callback);
			return this;
		}
		
		/**
		 * Remove event listener
		 */
		off (eventName) {
			this.el.removeEventListener(eventName);
			return this;
		}
		
		//TODO: method addItem
	}

	//EXPORT
	window.Dropdown = Dropdown;

})();
