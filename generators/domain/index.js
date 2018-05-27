'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const rename = require('gulp-rename');
const mkdirp = require('mkdirp');
const path = require('path');
const randomstring = require("randomstring");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the good ${chalk.red('generator-jzyunqi-dubbo')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'micro_name',
        message: 'Your micro service name?(eg: `mcenter`)'
      },
      {
        type: 'input',
        name: 'domain_name',
        message: 'Your module_name?(eg: `member`)'
      },
      {
        type: 'input',
        name: 'table_name',
        message: 'Your table_name?(eg: `mc_member`)'
      }
    ];

    this.ROOT_PATH = process.cwd();
    return this.prompt(prompts).then(props => {
      const list = props.full_name.split(' ');
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.serialVersionUID = this.serialVersionUID;
      yoHelper.rewriteProps(this.props);
    });
  }

  serialVersionUID(){
    const symbol = ['', '-'].find((item) => { return Math.random() > 0.5 });
    const str = String(+randomstring.generate({ length: 18, charset: 'numeric' }));
    return `${symbol}${str}L`;
  }

  writing() {
    this._apiConstant();
  }

  install() {
    console.log('use `npm install --registry=https://registry.npm.taobao.org`');
  }
};
