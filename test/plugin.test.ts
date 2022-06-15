import expect from 'expect';
// @ts-ignore
import InversifyPlugin from '../src/plugin';
// @ts-ignore
import { SimpleCommand } from './commands.setup';

describe('Oclif plugin', () => {

    it('returns commands', () => {
        const plugin = new InversifyPlugin({ root: '' });

        expect(plugin.commands).toContain(SimpleCommand);
    });

});
