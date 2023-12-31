import { createElement } from 'lwc';
import SixteenCom_Pubsub_Publisher from 'c/sixteenCom_Pubsub_Publisher';

describe('c-sixteen-com-pubsub-publisher', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-sixteen-com-pubsub-publisher', {
            is: SixteenCom_Pubsub_Publisher
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});