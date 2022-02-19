import { decorate, injectable, unmanaged } from 'inversify'
import { Command as OclifCommand, Config, Interfaces } from '@oclif/core'
import { resolve } from './container'

decorate(injectable(), OclifCommand)
decorate(unmanaged() as ParameterDecorator, OclifCommand, 0)
decorate(unmanaged() as ParameterDecorator, OclifCommand, 1)

export abstract class Command extends OclifCommand {
    constructor() {
        super([], {} as any)
    }

    static run: Interfaces.Command.Class['run'] = async function (this: Interfaces.Command.Class, argv?: string[], opts?) {
        const command = resolve(this) as Command

        command.argv = argv || process.argv.slice(2)
        command.config = await Config.load(opts || module.parent && module.parent.parent && module.parent.parent.filename || __dirname) as Config

        return command._run()
    }
}
