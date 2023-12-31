import { createElement } from 'lwc';
import SeventeenCom_SetterMethod_Child from 'c/seventeenCom_SetterMethod_Child';

describe('c-seventeen-com-setter-method-child', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-seventeen-com-setter-method-child', {
            is: SeventeenCom_SetterMethod_Child
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});