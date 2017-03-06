import React, { Component } from 'react';
import { withRouter } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class Recipe extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.listId)
    .then(() => this.props.fetchColumns(this.props.listId));
  }

  nearExpiration(){

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
