import { createElement } from 'lwc';
import ThirtyOneCom_GetRecordId_ObjectName from 'c/thirtyOneCom_GetRecordId_ObjectName';

describe('c-thirty-one-com-get-record-id-object-name', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-thirty-one-com-get-record-id-object-name', {
            is: ThirtyOneCom_GetRecordId_ObjectName
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});