import { Interfaces, Plugin } from '@oclif/core'
import { getCommandMetadata } from './reflection'

export default class InversifyPlugin extends Plugin {
    constructor(options: Interfaces.PluginOptions) {
        super(options)
        this.hooks = {}

        this.commands = getCommandMetadata().map(({ target, command }) => {
            target.id = command
            target.load = () => target
            return target
        })
    }

    get topics() {
        return []
    }
}
