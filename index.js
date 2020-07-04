#!/usr/bin/env node
const argvStore = require('argv_store');
const devServer = require('./devServer');
const build = require('./build');
const deploy = require('./deploy');
const dll = require('./dll');
const packageJson = require('./package.json');

const program = new argvStore();

program
    .version(packageJson.version)
    .command('build', '构建', build)
    .command('build:pre', '预生产', () => build({isPre: true}))
    .command('dev', '开发', devServer)
    .command('analyz', '分析', () => build({isAnalyz: true}))
    .command('deploy', '部署', deploy)
    .command('build:lib', 'dll文件构建', dll)
    .parse();