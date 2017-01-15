import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ListIndexItem = ({list}) => (
  <li className='list-box'>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Link to={`/lists/${list.id}`}  style={{ textDecoration: 'none' }}>
        <Card className="list-box">
          <CardTitle title={list.title}/>
        </Card>
      </Link>
    </MuiThemeProvider>
  </li>
);

export default ListIndexItem;
