# NodeSitecore CLI

[![Build Status](https://travis-ci.org/NodeSitecore/sitecore-cli.svg?branch=master)](https://travis-ci.org/NodeSitecore/sitecore-cli)
[![Coverage Status](https://coveralls.io/repos/github/NodeSitecore/sitecore-cli/badge.svg?branch=master)](https://coveralls.io/github/NodeSitecore/sitecore-cli?branch=master)
[![npm version](https://badge.fury.io/js/%40node-sitecore%2Fcli.svg)](https://badge.fury.io/js/node-sitecore-cli)
[![Dependencies](https://david-dm.org/NodeSitecore/sitecore-cli.svg)](https://david-dm.org/NodeSitecore/sitecore-cli#info=dependencies)
[![img](https://david-dm.org/NodeSitecore/sitecore-cli/dev-status.svg)](https://david-dm.org/NodeSitecore/sitecore-cli/#info=devDependencies)
[![img](https://david-dm.org/NodeSitecore/sitecore-cli/peer-status.svg)](https://david-dm.org/NodeSitecore/sitecore-cli/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/NodeSitecore/sitecore-cli/badge.svg)](https://snyk.io/test/github/NodeSitecore/sitecore-cli)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Main repository of NodeSitecore CLI. See our documentation on https://node-sitecore.github.io/sitecore-cli/.

Sitecore-cli is a usefull command line tool to automatize tasks for a Sitecore project. Theses tasks are following:

- Build your Visual Studio solution,
- Publish your Visual Studio solution in Sitecore,
- Restore nuget package,
- Synchronise your project with [Unicorn](https://github.com/trustedsec/unicorn),
- Run PowerShell script.

The cli will be installed on a pre-installed Sitecore Project. This tool doens't generate a Sitecore project.

## Packages

This repository is base on mono-repo. That mean, we have multiple packages hosted in this repository. Theses packages are the following:

- [@node-sitecore/config](/packages/config/readme.md), a shared configuration between all other packages,
- [@node-sitecore/config-browserify](/packages/config-browserify/readme.md), specific configuration for browserify stack,
- [@node-sitecore/cli](/packages/cli/readme.md), the cli to run command across Sitecore.

## Unstable packages

- [@node-sitecore/vue-cli](/packages/cli-plugin-fractal/readme.md),
- [@node-sitecore/vue-cli](/packages/cli-plugin-browsersync/readme.md),
- [@node-sitecore/vue-cli](/packages/cli-plugin-vue/readme.md),


## Contributing

Contributors and PR are welcome. Just berofe starting to contribute, please read our [contribution documentation](https://github.com/NodeSitecore/sitecore-cli/CONTRIBUTING.md).

## License

The MIT License (MIT)

Copyright (c) 2018 NodeSitecore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/

