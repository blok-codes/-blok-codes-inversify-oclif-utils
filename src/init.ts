import { Hook } from '@oclif/core'
import InversifyPlugin from './plugin'

const hook: Hook<'init'> = async function () {

    this.config.plugins.push(new InversifyPlugin(this.config))

}

export default hook
