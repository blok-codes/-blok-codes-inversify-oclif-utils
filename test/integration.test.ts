import { expect, test } from '@oclif/test'
import { container } from '../src'
import { FooService } from './commands.setup'

describe('Integration', () => {
  test
    .stdout()
    .command(['help'])
    .it('displays simple command in help', ctx => {
      expect(ctx.stdout).to.contain('simple')
    })

  test
    .stdout()
    .command(['help', 'complex'])
    .it('displays complex command in its own help', ctx => {
      expect(ctx.stdout).to.contain('complex:foo')
    })

  test
    .stdout()
    .command(['simple'])
    .it('runs commands', ctx => {
      expect(ctx.stdout).to.equal('Hello World.\n')
    })

  test
    .stdout()
    .command(['complex:foo'])
    .it('prints message from FooService', ctx => {
      expect(ctx.stdout).to.equal('Hello World from FooService.\n')
    })
})
