import React from 'react';
import GItemHolder from './gitem_holder';

class GItemIndex extends React.Component{

  componentWillMount(){
    this.props.fetchGItems(this.props.listId);
  }

  render(){
    return(
      <ul>
        {
          this.props.gitems.map(gitem => (
            <GItemHolder key={gitem.id} gitem={gitem}/>
          ))
        }
      </ul>
    );
  }
}

export default GItemIndex;
