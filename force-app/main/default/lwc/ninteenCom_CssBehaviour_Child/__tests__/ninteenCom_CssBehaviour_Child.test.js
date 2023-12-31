import { createElement } from 'lwc';
import NinteenCom_CssBehaviour_Child from 'c/ninteenCom_CssBehaviour_Child';

describe('c-ninteen-com-css-behaviour-child', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-ninteen-com-css-behaviour-child', {
            is: NinteenCom_CssBehaviour_Child
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});