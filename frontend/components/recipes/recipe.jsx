import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Paper from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import moment from 'moment';
import {fetchRecipesIDs, fetchRecipes} from '../../actions/spoonacular_api_actions';

class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients: '',
      recipeIDs: []
    };
    this.nearExpiration = this.nearExpiration.bind(this);
    this.getIDs = this.getIDs.bind(this);
  }

  componentWillMount(){
    this.props.fetchList(this.props.listId)
    .then(() => this.props.fetchColumns(this.props.listId)).then(() => this.nearExpiration()).then(() => this.props.fetchRecipeIDs(this.state.ingredients.toString()).then((result) =>
    this.setState({recipeIDs: result.recipeIDs}))).then(() => this.getIDs()).then(() =>
    this.props.fetchRecipes(this.state.recipeIDs[0].toString())).then((result) => this.setState({recipe1Name: result.recipes.title, recipe1Instructions: result.recipes.instructions})).then(() =>
    this.props.fetchRecipes(this.state.recipeIDs[1].toString())).then((result) => this.setState({recipe2Name: result.recipes.title, recipe2Instructions: result.recipes.instructions})).then(() =>
    this.props.fetchRecipes(this.state.recipeIDs[2].toString())).then((result) => this.setState({recipe3Name: result.recipes.title, recipe3Instructions: result.recipes.instructions}));
  }

  nearExpiration(){
    let ingredients = [];
    for (var i = 0; i < this.props.columns.length; i++) {
      if (this.props.columns[i].title == "To Buy" || this.props.columns[i].title == "Bought"){
        for (var j = 0; j <   this.props.columns[i].gitems.length; j++) {
          let date = moment();
          var gitemdate = moment(this.props.columns[i].gitems[j].expire_date);
          if (date.diff(gitemdate, 'days') < 7){
            ingredients.push(this.props.columns[i].gitems[j].title);
          }
        }
      }
    }
    this.setState({ingredients: ingredients});
  }

  getIDs(){
    let ids = [];
    for (var i = 0; i < this.state.recipeIDs.length; i++) {
      ids.push(this.state.recipeIDs[i].id);
    }
    this.setState({recipe1IMG: this.state.recipeIDs[0].image});
    this.setState({recipe2IMG: this.state.recipeIDs[1].image});
    this.setState({recipe3IMG: this.state.recipeIDs[2].image});
    this.setState({recipeIDs: ids});
  }



  render(){
    return(
      <ul>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className='recipe'>
            <CardMedia overlay={<CardTitle className='overlay' title='Recipe #1' subtitle={this.state.recipe1Name}/>}>
              <img className='recipeIMG' src={this.state.recipe1IMG}/>
            </CardMedia>
            <CardText>
              {this.state.recipe1Instructions}
            </CardText>
          </Card>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className='recipe'>
            <CardMedia overlay={<CardTitle className='overlay' title='Recipe #2' subtitle={this.state.recipe2Name}/>}>
              <img className='recipeIMG' src={this.state.recipe2IMG}/>
            </CardMedia>
            <CardText>
              {this.state.recipe2Instructions}
            </CardText>
          </Card>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className='recipe'>
            <CardMedia overlay={<CardTitle className='overlay' title='Recipe #3' subtitle={this.state.recipe3Name}/>}>
              <img className='recipeIMG' src={this.state.recipe3IMG}/>
            </CardMedia>
            <CardText>
              {this.state.recipe3Instructions}
            </CardText>
          </Card>
        </MuiThemeProvider>
      </ul>
    );
  }
}

export default Recipe;
