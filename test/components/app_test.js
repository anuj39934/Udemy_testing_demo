import {renderComponent, expect } from "../test_helper.js";
import App from "../../src/components/app.js";

describe('App',() => {
	let component;
	beforeEach(() =>{
		component = renderComponent(App);
	})
	it('show a comment box',() =>{

		expect(component.find('.comment_box')).to.exist;
	})
});

