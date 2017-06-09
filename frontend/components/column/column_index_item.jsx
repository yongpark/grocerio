import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardTitle} from 'material-ui/Card';
import GItemCreateFormContainer from '../gitem/gitem_create_form_container';
import GItemIndexContainer from '../gitem/gitem_index_container';
import {grey50,lightBlue400} from 'material-ui/styles/colors';
import {blueGrey500} from 'material-ui/styles/colors';


const ColumnIndexItem = ({column, listId}) => (
  <li className="column-index-item-container">
    <ul>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Card className="column-index-item">
          <CardTitle className='column-title' title={column.title} titleStyle={{ color: blueGrey500}}   bodyStyle={{backgroundColor: grey50}}/>
          <GItemIndexContainer columnId={column.id} listId={listId}/>
          <GItemCreateFormContainer columnId={column.id} columnTitle={column.title}/>
        </Card>
      </MuiThemeProvider>
    </ul>
  </li>
);

export default ColumnIndexItem;
