import { createElement } from 'lwc';
import TwentyEightCom_CustomAccessLabels from 'c/twentyEightCom_CustomAccessLabels';

describe('c-twenty-eight-com-custom-access-labels', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-twenty-eight-com-custom-access-labels', {
            is: TwentyEightCom_CustomAccessLabels
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});