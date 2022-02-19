import { addCommandMetadata } from './reflection'

export function command(name: string) {
    return function (target: any) {

        addCommandMetadata({
            command: name,
            target: target
        })

    }
}
