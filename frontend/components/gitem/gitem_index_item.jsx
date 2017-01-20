import React from 'react';
import { withRouter } from 'react-router';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';
import merge from 'lodash/merge';

const gitemSource = {
  beginDrag: (props) => ({
    gitem: props.gitem
  }),
  canDrag: ({disabled}) =>
  (
    !disabled
  ),
  isDragging: (props, monitor) => (
    props.gitem.id === monitor.getItem().gitem.id
  ),
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});


class GItemIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      active: false,
      gitem: props.gitem,
    };
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.activate = this.activate.bind(this);
  }

  activate(active){
    return e => this.setState({active});
  }

  handleClickOutside(e){
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.hide();
    }
  }

  componentDidMount(){
    this.refs.gitemupdate.style.display = 'none';
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  componentWillReceiveProps(newProps){
    this.state.gitem = newProps.gitem;
  }

  show(){
    this.refs.gitemupdate.style.display = 'flex';
    this.setState({show: true});
  }

  hide(){
    this.refs.gitemupdate.style.display = 'none';
    this.setState({show: false});
  }

  update(prop){
    return e => {
      const gitem = merge({}, this.state.gitem, {
        [prop]: e.target.value
      });
      this.setState({gitem});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateGItem(this.state.gitem).then(this.hide);
  }

  render(){

    const {gitem, disabled, connectDragSource, isDragging} = this.props;
    const {active} = this.state;
    let gitemClass = isDragging ? "gitem dragging" : "gitem";
    if (active) gitemClass += "active";

    return connectDragSource(
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card
            className={gitemClass}
            onMouseEnter={this.activate(true)}
            onMouseLeave={this.activate(false)}
            className="gitem-index-item">
            <CardTitle title={this.state.gitem.title}/>
            <RaisedButton onClick={this.show} secondary={true} style={{fontWeight: 300}} label="Edit"/>
          </Card>
        </MuiThemeProvider>
            <div ref='gitemupdate'>
              <form onSubmit={this.handleSubmit}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                  <Card>
                    <CardTitle title='Rename Grocery Item'/>
                    <TextField
                      id="titleinput"
                      value={this.state.gitem.title}
                      placeholder="Grocery Item Name"
                      onChange={this.update('title')}
                    />
                  <RaisedButton type="submit" secondary={true} label="update"/>
                  </Card>
                </MuiThemeProvider>
              </form>
            </div>
      </section>
    );
  }
}

export default DragSource(ItemTypes.GITEM, gitemSource, collect)(withRouter(GItemIndexItem));
