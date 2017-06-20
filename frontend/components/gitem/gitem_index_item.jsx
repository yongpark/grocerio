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
import {grey50} from 'material-ui/styles/colors';
import {lightBlue300, lightBlue400} from 'material-ui/styles/colors';
import {blueGrey300, blueGrey600, blueGrey700} from 'material-ui/styles/colors';
import {blueGrey900} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: lightBlue400,
  },
   flatButton: {
     primaryTextColor: lightBlue400,
   }
});


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
    this.expired = this.expired.bind(this);
    this.editDate = this.editDate.bind(this);
    this.handleDatepicker2OnShow = this.handleDatepicker2OnShow.bind(this);
    this.handleDatepicker2OnClose = this.handleDatepicker2OnClose.bind(this);
    this.formatDateString = this.formatDateString.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props.gitem.id);
  }

  activate(active){
    return e => this.setState({active});
  }

  expired(){
    let date = moment();
    let gitemdate = moment(this.state.gitem.expire_date);
    if (date.diff(gitemdate, 'days') === 0 || date.diff(gitemdate, 'days') > 0  ){
      if (this.state.gitem.column.title == "To Buy"){
        var updatedGItem = this.state.gitem;
        updatedGItem.column_id = updatedGItem.column_id + 2;
        this.props.updateGItem(updatedGItem);
      }
      if (this.state.gitem.column.title == "Bought"){
        var updatedGItem = this.state.gitem;
        updatedGItem.column_id = updatedGItem.column_id + 1;
        this.props.updateGItem(updatedGItem);
      }
    }
  }

  handleClickOutside(e){
    if (this.datepicker2Open){
      return;
    }
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.hide();
    }
  }

  componentDidMount(){
    this.refs.gitemupdate.style.display = 'none';
    document.addEventListener('click', this.handleClickOutside, true);
    this.expired();
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

  handleDelete(e){
    e.preventDefault();
    this.props.deleteGitem(this.props.gitem.id).then(this.hide());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateGItem(this.state.gitem).then(this.hide());
  }

  handleDatepicker2OnShow(e){
    this.datepicker2Open = true;
  }

  handleDatepicker2OnClose(e){
    this.datepicker2Open = false;
  }

  editDate(e, date){
    let formattedDate = moment(date).format("YYYY-MM-DD");
    const gitem = merge({}, this.state.gitem, {expire_date: formattedDate});
    this.setState({gitem});
   //  debugger;
  }

  formatDateString(date){
    if (date === null) {
      return null;
    } else {
      let parsedDate = Date.parse(date);
      let newDate = new Date(parsedDate);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    }
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
            className="gitem-index-item"
            onClick={this.show}>
            <CardTitle title={this.state.gitem.title} titleStyle={{ fontSize: 18, color: grey50}}/>
          </Card>
        </MuiThemeProvider>
          <form onSubmit={this.handleSubmit} className="gitem-update" ref='gitemupdate'>
            <MuiThemeProvider  muiTheme={muiTheme}>
              <Card className='gitem-edit-form'>
                <CardTitle title='Edit Grocery Item' titleStyle={{color: blueGrey900, fontSize: 18}} subtitleStyle={{color: blueGrey900}}/>
                <TextField
                  id="titleinput"
                  value={this.state.gitem.title}
                  floatingLabelText="Grocery Item Name"
                  hintText="Grocery Item Name"
                  onChange={this.update('title')}
                  inputStyle={{paddingLeft: 5, paddingRight: 5, color: blueGrey900, width:'100%'}}
                  floatingLabelStyle={{color: blueGrey600,  left: '5px'}}
                  floatingLabelFocusStyle={{color: blueGrey600}}
                  hintStyle={{color: blueGrey900}}
                  underlineFocusStyle={{width: '200px', borderColor:blueGrey700}}
                />
              <DatePicker className="grocery-item-datepicker"
                floatingLabelText="Expiration Date"
                floatingLabelStyle={{color: blueGrey600,  left: '5px'}}
                style={{color:lightBlue400}}
                onTouchTap={this.handleDatepicker2OnShow}
                onChange={this.editDate}
                onDismiss={this.handleDatepicker2OnClose}
                defaultDate={this.formatDateString(this.state.gitem.expire_date)}
                container="inline" mode="landscape"
                underlineFocusStyle={{width: '200px', borderColor:blueGrey700}}/>
              <RaisedButton onTouchTap={this.handleDelete} backgroundColor="#ef5350" labelStyle={{fontWeight: 300, color: grey50}} label="Delete"/>
              <RaisedButton type="submit" label="Update" backgroundColor="#263238" labelStyle={{fontWeight: 300, color: grey50}}/>
              </Card>
            </MuiThemeProvider>
          </form>
      </section>
    );
  }
}

export default DragSource(ItemTypes.GITEM, gitemSource, collect)(withRouter(GItemIndexItem));
