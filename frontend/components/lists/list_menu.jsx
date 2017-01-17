import React from 'react';
import {withRouter} from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';

const ListMenu = ({listId, deleteList, router}) => {
  return(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Card className="list-menu">
      <CardTitle title="List Menu"/>
      <RaisedButton onClick={() => deleteList(listId)
        .then(router.push('/lists'))} label="Delete List" secondary={true}/>
    </Card>
  </MuiThemeProvider>
  );
};


export default withRouter(ListMenu);
