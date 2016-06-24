'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var choice = "sidebar-footbar";

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mathematical ' + chalk.red('generator-moog-layout-generator') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'sidebar',
      message: 'Do you want to keep the side bar?',
      default: true
    },{
      type: 'confirm',
      name: 'footbar',
      message: 'Do you want to keep the foot bar?',
      default: true
    }];
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      var sidebar = props.sidebar;
      var footbar = props.footbar;
       if(sidebar == true && footbar == true){
         choice = "sidebar-footbar";
       }else if(sidebar == false && footbar == true){
         choice = "footbar";
       }else if(sidebar == true && footbar == false){
         choice = "sidebar";
       }else if(sidebar == false && footbar == false){
         choice = "no-sidebar-footbar";
       }      
    }.bind(this));
  },

  writing: function () {

    this.fs.copy(
      this.templatePath(choice+'/index.html'),//copy different html files in for different templates
      this.destinationPath('index.html')
    ); 
    this.fs.copy(
      this.templatePath(choice+'/css/main.css'),
      this.destinationPath('css/main.css')
    );
    this.fs.copy(
      this.templatePath('css/moog-angular-css.css'),
      this.destinationPath('css/moog-angular-css.css')
    );     
    this.fs.copy(
      this.templatePath('images/logo.png'),
      this.destinationPath('images/logo.png')
    ); 
    this.fs.copy(
      this.templatePath('images/icon-system-info.png'),
      this.destinationPath('images/icon_system-info.png')
    );  
    this.fs.copy(
      this.templatePath('images/icon_arrow_left.png'),
      this.destinationPath('images/icon_arrow_left.png')
    );  
    this.fs.copy(
      this.templatePath('images/glow.png'),
      this.destinationPath('images/glow.png')
    ); 
    this.fs.copy(
      this.templatePath('images/navigation-panel_icon_expanded.png'),
      this.destinationPath('images/navigation-panel_icon_expanded.png')
    );     
    this.fs.copy(
      this.templatePath('images/icon_arrow_left.png'),
      this.destinationPath('images/icon_arrow_left.png')
    );                   
  },

  install: function () {
    this.installDependencies();
  }
});
