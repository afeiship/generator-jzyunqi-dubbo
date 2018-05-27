'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const rename = require('gulp-rename');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the good ${chalk.red('generator-jzyunqi-dubbo')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'module_name',
        message: 'Your module_name?(eg: uaa)'
      }
    ];

    this.ROOT_PATH = process.cwd();
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      yoHelper.rewriteProps(this.props);
    });
  }

  writing() {
    this.registerTransformStream(
      rename(path => {
        path.dirname = path.dirname.replace(/template/g, this.props.module_name);
        path.dirname = path.dirname.replace(/Template/g, this.props.ModuleName);
        path.basename = path.basename.replace(/template/g, this.props.module_name);
        path.basename = path.basename.replace(/Template/g, this.props.ModuleName);
        return path;
      })
    );

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath('jzyunqi-microservices'),
      this.props
    );
  }

  install() {
    console.log('use `npm install --registry=https://registry.npm.taobao.org`');
  }
};
