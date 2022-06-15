import expect from 'expect';
import { Container as InversifyContainer, injectable } from 'inversify';
// @ts-ignore
import { getContainer, resolve, useContainer } from '../src/container';

@injectable()
class MyClass {
}

describe('Container', () => {

    it('throws error when no container is specfied', () => {
        expect(() => {
            getContainer();
        }).toThrow('Container is not specified. Set it up with useContainer().');
    });

    it('assigns own container', () => {
        const myContainer = new InversifyContainer();

        useContainer(myContainer);

        expect(getContainer()).toBe(myContainer);
    });

    it('resolves a class', () => {
        const object = resolve(MyClass);

        expect(object instanceof MyClass).toBeTruthy();
    });

});
