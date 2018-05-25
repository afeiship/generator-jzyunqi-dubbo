'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const rename = require('gulp-rename');
const mkdirp = require('mkdirp');
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
        name: 'micro_name',
        message: 'Your micro service name?(eg: `mcenter`)'
      },
      {
        type: 'input',
        name: 'full_name',
        message: 'Your module_name?(eg: `mcenter` | `uaa` | `oc-order`)'
      }
    ];

    this.ROOT_PATH = process.cwd();
    return this.prompt(prompts).then(props => {
      const list = props.full_name.split(' ');
      // To access props later use this.props.someAnswer;
      this.props = props;
      yoHelper.rewriteProps(this.props);
      this.props.module_name = list[0];
      this.props.class_name = list[1];
      this.props.table_name = list[2];
    });
  }

  writing() {
    this._apiConstant();
  }

  _apiConstant(){
    const { micro_name, module_name, class_name } = this.props;
    const targetPath = 'jzyunqi-microservices/service-TMPL/service-TMPL-api/src/main/java/cn/jzyunqi/ms/TMPL/constant';
    const _targetPath = targetPath.replace(/TMPL/g, micro_name);


    this.fs.copyTpl(
      this.templatePath('api/constant/TemplateCache.java'),
      this.destinationPath(`${_targetPath}/${class_name}Cache.java`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('api/constant/TemplateMessageConstant.java'),
      this.destinationPath(`${_targetPath}/${class_name}MessageConstant.java`),
      this.props
    );
  }

  _scaffoldFolders() {
    mkdirp.sync(path.join(this.destinationPath(), 'app/test/by/fei'));
  }

  install() {
    console.log('use `npm install --registry=https://registry.npm.taobao.org`');
  }
};
