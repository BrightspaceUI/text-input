/**
`d2l-text-input`
Polymer-based web component for D2L text inputs

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { FocusableBehavior } from '../d2l-polymer-behaviors/d2l-focusable-behavior.js';
import './d2l-text-input-shared-styles.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { PolymerElement } from '../@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="d2l-text-input">
	<template strip-whitespace="">
		<style>

			:host {
				display: inline-block;
				width: 100%
			}

			input {
				position: relative;
				font-family: inherit;
				@apply --d2l-input;
			}
			input::placeholder {
				@apply --d2l-input-placeholder;
			}
			input:hover:disabled {
				@apply --d2l-input-disabled-hover;
			}
			input:hover,
			input:focus,
			input.d2l-text-input-focus {
				@apply --d2l-input-hover;
			}

			input:disabled {
				@apply --d2l-input-disabled;
			}

			input:invalid,
			input[aria-invalid='true'] {
				@apply --d2l-input-invalid;
			}

			input::-webkit-search-cancel-button {
				@apply --d2l-input-webkit-search-cancel;
			}
			input::-ms-clear {
				@apply --d2l-input-ms-clear;
			}

		</style>
		<input aria-invalid$="[[ariaInvalid]]" aria-label$="[[ariaLabel]]" aria-labelledby$="[[ariaLabelledby]]" autofocus$="[[autofocus]]" class="d2l-focusable" disabled$="[[disabled]]" list$="[[list]]" max$="[[max]]" maxlength$="[[maxlength]]" min$="[[min]]" minlength$="[[minlength]]" name$="[[name]]" on-change="_handleChange" on-keypress="_handleKeypress" pattern$="[[pattern]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" size$="[[size]]" step$="[[step]]" tabindex$="[[tabIndex]]" type$="[[type]]" value="{{value::input}}">
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-text-input',

	behaviors: [
		FocusableBehavior
	],

	properties: {
		/**
		 * Fired when the input changes due to user interaction.
		 *
		 * @event change
		*/

		/**
		 * Gets or sets the [aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute),
		 * which contains the IDs of the elements that describe the input.
		 */
		ariaDescribedby: {
			type: String
		},
		/**
		 * Gets or sets the [aria-invalid attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute),
		 * which is used to indicate that the value entered into the input field does not conform to the format expected.
		 */
		ariaInvalid: {
			type: String
		},
		/**
		 * Gets or sets the [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
		 * attribute, which defines a string label for the input.
		 */
		ariaLabel: {
			type: String
		},
		/**
		 * Gets or sets the [aria-labelledby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute),
		 * which contains the IDs of labels for the input.
		 */
		ariaLabelledby: {
			type: String
		},
		/**
		 * When true, will automatically focus on the input when the page loads.
		 */
		autofocus: {
			type: Boolean,
			value: false
		},
		/**
		 * Gets or sets the disabled state of the input, `true` is disabled and `false` is enabled.
		 */
		disabled: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		},
		/**
		 * List of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document.
		 */
		list: {
			type: String
		},
		/**
		 * The maximum numeric value for this item, which must not be less than its minimum (min attribute) value.
		 */
		max: {
			type: String
		},
		/**
		 * Maximum number of characters that the user can enter.
		 */
		maxlength: {
			type: Number
		},
		/**
		 * The minimum numeric value for this item, which must not be greater than its maximum (max attribute) value.
		 */
		min: {
			type: String
		},
		/**
		 * Minimum number of characters that the user can enter.
		 */
		minlength: {
			type: Number
		},
		/**
		 * A regular expression that the control's value is checked against.
		 */
		pattern: {
			type: String
		},
		/**
		 * A hint to the user of what can be entered in the control.
		 */
		placeholder: {
			type: String
		},
		/**
		 * Indicates that the form will not be submitted when the user presses enter within the input cell.
		 */
		preventSubmit: {
			type: Boolean,
			value: false,
		},
		/**
		 * Indicates that the user cannot modify the value of the control.
		 */
		readonly: {
			type: Boolean,
			value: false
		},
		/**
		 * Specifies that the user must fill in a value before submitting a form.
		*/
		required: {
			type: Boolean,
			value: false
		},
		/**
		 * The initial size of the control as an integer number of characters.
		*/
		size: {
			type: Number
		},
		/**
		 * Works with the min and max attributes to limit the increments at which a numeric value can be set.
		*/
		step: {
			type: String
		},
		/**
		 * The name of the control, which is submitted with the form data.
		 */
		name: {
			type: String
		},
		/**
		 * Gets or sets the text input type, one of "text" (default), "number", "email", "password", "url".
		 */
		type: {
			type: String
		},
		/**
		 * Value of the input.
		 */
		value: {
			type: String,
			notify: true
		}
	},
	_handleChange: function() {
		if (PolymerElement) {
			// This custom focus event is only needed for Polymer 1. We should
			// be able to remove this event once we move to Polymer 2.
			this.dispatchEvent(new CustomEvent(
				'change',
				{bubbles: true, composed: false}
			));
		}
	},
	_handleKeypress: function(e) {
		if (this.preventSubmit && e.keyCode === 13) {
			e.preventDefault();
			return false;
		}
		return true;
	}
});
