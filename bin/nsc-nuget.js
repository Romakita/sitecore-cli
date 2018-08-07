#!/usr/bin/env node
const path = require('path');
const nuget = require('../src/nuget');
const getArgs = require('../src/utils/get-args');

const options = getArgs(path.basename(__filename));

nuget.exec(options.command, ...options.args);
