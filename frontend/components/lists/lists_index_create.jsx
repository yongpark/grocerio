import React from 'react';
import ToggleMenu from '../general/toggle_menu';
import ListCreateFormContainer from './list_create_form_container';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class ListsIndexCreate extends ToggleMenu{
  render(){
    const menuContent = (
      <ListCreateFormContainer
        show={ this.props.show }
        toggle={ this.props.toggle }/>
    );

    return(
      <li className="list-create">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card onClick={this.toggle} className="list-create">
              <CardTitle title="Create new list..."/>
          </Card>
        </MuiThemeProvider>
          {this.renderMenu('Create Grocery List', menuContent, "list-create-menu")}
      </li>
    );
  }
}

export default ListsIndexCreate;
