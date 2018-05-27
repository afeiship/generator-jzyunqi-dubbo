'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const rename = require('gulp-rename');
const NxDate = require('next-date');
require('next-serial-version-uid');

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
        message: 'Your module name?(eg: `mcenter`)'
      },
      {
        type: 'input',
        name: 'domain_name',
        message: 'Your domain_name?(eg: `member`)'
      },
      {
        type: 'input',
        name: 'table_name',
        message: 'Your table_name?(eg: `mc_member`)'
      }
    ];

    this.ROOT_PATH = process.cwd();
    return this.prompt(prompts).then(props => {
      this.props = props;
      yoHelper.rewriteProps(this.props);
      this.props.serialVersionUID = `${nx.serialVersionUid()}L`;
      this.props.currentDate = NxDate.format(new Date(), 'yyyy-mm-dd');
    });
  }

  writing() {
    this._writingApi();
    this._writingImpl();
  }

  _remame() {
    this.registerTransformStream(
      rename(path => {
        path.dirname = path.dirname.replace(/Template/g, this.props.DomainName);
        path.basename = path.basename.replace(/Template/g, this.props.DomainName);
        return path;
      })
    );
  }

  _writingApi() {
    const { module_name } = this.props;
    const _path = 'jzyunqi-microservices/service-TMPL/service-TMPL-api/src/main/java/cn/jzyunqi/ms/TMPL'.replace(/TMPL/g, module_name);
    this._remame();
    this.fs.copyTpl(
      this.templatePath('api'),
      this.destinationPath(_path),
      this.props
    );
  }

  _writingImpl() {
    const { module_name } = this.props;
    const _path = 'jzyunqi-microservices/service-TMPL/service-TMPL-impl/src/main/java/cn/jzyunqi/ms/TMPL'.replace(/TMPL/g, module_name);
    this._remame();
    this.fs.copyTpl(
      this.templatePath('impl'),
      this.destinationPath(_path),
      this.props
    );
  }

  install() {
    console.log('use `npm install --registry=https://registry.npm.taobao.org`');
  }
};
