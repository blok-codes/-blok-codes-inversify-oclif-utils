@blok-codes/inversify-oclif-utils
======================

Create [oclif](https://oclif.io/) commands with [InversifyJS](http://inversify.io/).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

## Getting Started

These instructions will get you up and running.

### Prerequisites

Make sure you have InversifyJS and Oclif installed.

 * [Oclif instructions](https://oclif.io/docs/introduction)
 * [InversifyJS instructions](https://github.com/inversify/InversifyJS/blob/master/wiki/installation.md)

It's best to start with a fresh Oclif installation and add InversifyJS to it. Ofcourse you could install Oclif in an existing project manually (but you have to figure this out on your own).

### Installing

Install this plugin with npm:

```bash
npm install @blok-codes/inversify-oclif-utils --save
```

Or with Yarn:

```bash
yarn add @blok-codes/inversify-oclif-utils
```

Afterwards add it to your package.json:

```json
{
  ...,
  "oclif": {
    ...,
    "plugins": {
      "@blok-codes/inversify-oclif-utils"
    }
  }
}
```

## Creating Commands

Now we will get you started with creating commands.

### ... injecting Services

If you want to inject other services into your commands, you must setup the container like this:

```typescript
import { useContainer } from '@blok-codes/inversify-oclif-utils'
import { Container } from 'inversify'

const container = new Container();

useContainer(container);
```

You do this before running any Oclif commands. For example, at the top of your Oclif "binary" in the `/bin` folder.

Afterwards you can inject other services in your commands like this:

```typescript
import { Command } from '@blok-codes/inversify-oclif-utils'
import { inject } from 'inversify'

export class YourCommand extends Command {

  @inject(FooService)
  protected foo!: FooService

  async run () {
    this.log(this.foo.bar())
    return true
  }
}
```

Please note, that you have to use my implementation of the Command class for it to work.

### ... loading Commands dynamically

If you want to dynamically load your commands into Oclif without putting them in a specified command directory (the default way in Oclif). You can use our `@command()` decorator.

```typescript
import { command } from '@blok-codes/inversify-oclif-utils'
import { Command } from '@oclif/core'

@command('your:command')
export class YourCommand extends Command {
  ...
}
```

The command can then be run by:

```bash
./bin/YOURBIN your:command
```

Make sure you put commands that are loaded with the decorator not into the Oclif command directory. Otherwise it might be loaded twice.

### ... or both

You can do both things at once.

```typescript
import { Command, command } from '@blok-codes/inversify-oclif-utils'
import { inject } from 'inversify'

@command('your:command')
export class YourCommand extends Command {

  @inject(FooService)
  protected foo!: FooService

  async run () {
    this.log(this.foo.bar())
    return true
  }
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/marvinrabe/@blok-codes/inversify-oclif-utils/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* `command` Decorator is based on work by [inversify-express-utils](https://github.com/inversify/inversify-express-utils)
* This package is a fork of [inversify-oclif-utils](https://github.com/marvinrabe/inversify-oclif-utils) by Marvin Rabe adapted to support recent versions of Oclif. 
