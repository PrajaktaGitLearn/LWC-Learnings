import { createElement } from 'lwc';
import TwentyThreeCom_LMS_LWC_Subscriber from 'c/twentyThreeCom_LMS_LWC_Subscriber';

describe('c-twenty-three-com-l-m-s-l-w-c-subscriber', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-twenty-three-com-l-m-s-l-w-c-subscriber', {
            is: TwentyThreeCom_LMS_LWC_Subscriber
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});