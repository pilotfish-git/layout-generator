'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dandy ' + chalk.red('generator-mooglay') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'greet',
      message: 'Would you like to enable this option?',
      default: 'Amazingly it works!'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props.greet;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
