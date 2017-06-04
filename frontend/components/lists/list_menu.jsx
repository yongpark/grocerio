import React from 'react';
import {withRouter} from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey50} from 'material-ui/styles/colors';

const ListMenu = ({listId, deleteList, router}) => {
  return(
  <div className="list-menu">
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Card style={{backgroundColor: lightBlue300}}>
        <CardTitle title="List Menu" titleStyle={{color: grey50, fontSize: 18}}/>
        <RaisedButton className="list-menu-button" onClick={() => deleteList(listId)
          .then(router.push('/lists'))} label="Delete List" secondary={true}/>
      </Card>
    </MuiThemeProvider>
  </div>
  );
};


export default withRouter(ListMenu);
