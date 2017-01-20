import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey50} from 'material-ui/styles/colors';

const ListIndexItem = ({list}) => (
  <li className='list-box'>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Link to={`/lists/${list.id}`} style={{ textDecoration: 'none' }}>
        <Card className="list-card">
          <CardTitle title={list.title} titleStyle={{ fontSize: 18, color: grey50 }}/>
        </Card>
      </Link>
    </MuiThemeProvider>
  </li>
);

export default ListIndexItem;
