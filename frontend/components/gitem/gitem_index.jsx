import React from 'react';
import GItemHolder from './gitem_holder';
import GItemTarget from './drop_target';

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
          ))}
          <GItemTarget columnId={this.props.columnId} gitems={this.props.gitems}/>
      </ul>
    );
  }
}

export default GItemIndex;
