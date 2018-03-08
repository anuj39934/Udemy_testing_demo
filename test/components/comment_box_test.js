import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	it('has a correct class', () => {
		expect(component).to.have.class('comment_box');
	});
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});
	describe('entering text', () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new comment');
		});

		it('show the text entered by the user', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('clear the input once submitted', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});

	});
});

