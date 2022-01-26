import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageBox from '../MessageBox';

describe('<MessageBox />', () => {
  it('has message layout box', () => {
	window.HTMLElement.prototype.scrollIntoView = function() {};
	const { getByTestId } = render(<MessageBox />);
	getByTestId('message-layout-box');
	getByTestId('input-wrapper-box');
  });

  it('has message box', () => {
	window.HTMLElement.prototype.scrollIntoView = function() {};
	//Element.prototype.scrollIntoView = () => {};
	const utils = render(<MessageBox />);
	utils.getByPlaceholderText('Type a message.');
	
	const input = utils.getByPlaceholderText('Type a message.');
	fireEvent.change(input, {target: {value: 'aaabbb'}});
	expect(input.value).toBe('aaabbb');
  });

  it('has send button', () => {
	const utils = render(<MessageBox />);
    utils.getByText('SEND');
  });

  it('send message', () => {
    const utils = render(<MessageBox />);
	const button = utils.getByRole('button');
	const input = utils.getByPlaceholderText('Type a message.');

	fireEvent.change(input, {target: {value: 'abcd'}})
	fireEvent.click(button);
	expect(input).toHaveValue('');
    expect(screen.getByText('abcd')).toBeInTheDocument();
  });
});