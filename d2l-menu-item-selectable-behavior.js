import '@polymer/polymer/polymer-legacy.js';
import './d2l-menu-item-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};

/** @polymerBehavior D2L.PolymerBehaviors.MenuItemSelectableBehavior */
D2L.PolymerBehaviors.MenuItemSelectableBehaviorImpl = {

	/**
	 * Triggered when the selected state of the selectable menu item changes.
	 * @event d2l-menu-item-change
	 * @param {Boolean} selected The new selected state of the item.
	 * @param {String} value The value associated with the item.
	 */

	properties: {

		/**
		 * Whether the menu item is selected/checked.
		 */
		selected: {
			type: Boolean,
			observer: '__onSelectedChanged',
			reflectToAttribute: true
		},

		/**
		 * The value associated with the item.
		 */
		value: String
	},

	__onSelect: function(e) {
		e.preventDefault();
		e.stopPropagation();
		this.fire('d2l-menu-item-change', {
			value: this.value,
			selected: this.selected
		});
	},

	__onSelectedChanged: function(selected) {
		selected ? this.setAttribute('aria-checked', true) : this.removeAttribute('aria-checked');
	}

};

/** @polymerBehavior D2L.PolymerBehaviors.MenuItemSelectableBehavior */
D2L.PolymerBehaviors.MenuItemSelectableBehavior = [
	D2L.PolymerBehaviors.MenuItemSelectableBehaviorImpl,
	D2L.PolymerBehaviors.MenuItemBehavior
];
