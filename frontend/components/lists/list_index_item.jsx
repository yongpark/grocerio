import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  height: 80,
  width: 100,
  margin: 20,
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
};


const ListIndexItem = ({list}) => (
  <li className='list-box'>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Link to={`/lists/${list.id}`}>
        <Paper style={style} zDepth={2}>
          {list.title}
        </Paper>
      </Link>
    </MuiThemeProvider>
  </li>
);

export default ListIndexItem;
