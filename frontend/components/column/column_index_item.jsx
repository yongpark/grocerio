import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardTitle} from 'material-ui/Card';

const ColumnIndexItem = ({column, listId}) => (
  <li className="column-index-item-container">
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Card className="column-index-item">
        <CardTitle title={column.title}/>
    
      </Card>
    </MuiThemeProvider>
  </li>
);

export default ColumnIndexItem;
