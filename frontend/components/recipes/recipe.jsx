import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Paper from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import moment from 'moment';
import {fetchRecipesIDs, fetchRecipes} from '../../actions/spoonacular_api_actions';

class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients: '',
      recipeIDs: [],
    };
    this.nearExpiration = this.nearExpiration.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.getIDs = this.getIDs.bind(this);
  }

  componentDidMount(){
    this.props.fetchList(this.props.listId)
    .then(() => this.props.fetchColumns(this.props.listId)).then(() => this.nearExpiration()).then(() => this.props.fetchRecipeIDs(this.state.ingredients.toString()).then((result) =>
    this.setState({recipeIDs: result.recipeIDs}))).then(() => this.getIDs());
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
    this.setState({recipeIds: ids});
  }



  render(){
    return(
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className='recipe'>
            <CardTitle title="Recommended Recipes"/>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Recipe;
