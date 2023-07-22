import { createElement } from 'lwc';
import SecondCom_TemplateLooping from 'c/secondCom_TemplateLooping';

describe('c-second-com-template-looping', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-second-com-template-looping', {
            is: SecondCom_TemplateLooping
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});