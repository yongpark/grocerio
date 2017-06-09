import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';
import {grey50} from 'material-ui/styles/colors';
import {lightBlue300, lightBlue400} from 'material-ui/styles/colors';
import {blueGrey300, blueGrey600, blueGrey700} from 'material-ui/styles/colors';
import {blueGrey900, green400} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

const labelstyle={
  fontWeight: 300,
  color: grey50
};

const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: lightBlue400,
  },
   flatButton: {
     primaryTextColor: lightBlue400,
   }
});

class GItemCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      gitem: props.gitem
    };
    //this.copyState = this.copyState.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.handleDatepickerOnShow = this.handleDatepickerOnShow.bind(this);
    this.handleDatepickerOnClose = this.handleDatepickerOnClose.bind(this);
    this.reset = this.reset.bind(this);
    this.initialState = this.state.gitem;
    this.formatDateString = this.formatDateString.bind(this);
    this.clearDate = this.clearDate.bind(this);
  }

   componentDidMount() {
     document.addEventListener('click',
       this.handleClickOutside, true);
     //this.copyState();
   }

   componentWillUnmount() {
     document.removeEventListener('click',
     this.handleClickOutside, true);
   }

  //  copyState(){
  //    const initialState = this.state;
  //  }

   reset() {
      this.setState({gitem: this.initialState});
    }

   handleClickOutside(event) {
     if (this.datepickerOpen) {
       return;
     }
     const domNode = ReactDOM.findDOMNode(this);
     if (!domNode || !domNode.contains(event.target)) {
         this.hide();
     }
   }

   componentWillReceiveProps(newProps) {
     this.setState({ gitem: newProps.gitem });
   }

   show(e){
     this.refs.create2.style.display = 'flex';
     e.stopPropagation();
     this.setState({show: true});
   }

   hide(){
     this.refs.create2.style.display = 'none';
     this.setState({
       show: false,
       gitem: this.props.gitem
     });
   }
   //
  //  handleChange = (event, date) => {
  //    this.setState({
  //      controlledDate: date,
  //    });
  //  };

  update(prop){
    return e => {
      const gitem = merge({}, this.state.gitem, {
        [prop]: e.target.value
      });
      this.setState({gitem});
    };
  }

    updateDate(e, date){
      let formattedDate = moment(date).format("YYYY-MM-DD");
      const gitem = merge({}, this.state.gitem, {expire_date: formattedDate});
      this.setState({gitem});
     //  debugger;
    }

   handleSubmit(e){
     e.preventDefault();
     if(this.state.gitem){
       this.props.createGItem(this.state.gitem).then(this.setState({gitem:this.initialState})).then(this.reset).then(this.clearDate).then(this.hide());
     }
   }

   handleDatepickerOnShow(e){
     this.datepickerOpen = true;
   }

   handleDatepickerOnClose(e){
     this.datepickerOpen = false;
   }

   formatDateString(date){
     let parsedDate = Date.parse(date);
     let newDate = new Date(parsedDate);
     newDate.setHours(0, 0, 0, 0);
   }

   clearDate (event) {
       // We manually reach into the composed component and set it's date to null.
       let newDate = null;
       this.refs.datePicker.setState({
           date: newDate
       }, () => {
           this.refs.datePicker.props.onChange(null, newDate);
       });
   }

  //  this.renderCreateForm = this.state.gitem.column_title === 'To Buy' || this.state.gitem.column_title === 'Bought'

   render(){
     if(this.state.gitem.column_title === 'To Buy' || this.state.gitem.column_title === 'Bought'){
     return(
     <ul onClick={this.show} className='gitem-index-container'>
       <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
         <Card className="gitem-create">
           <CardTitle title="Add a Grocery Item..." titleStyle={{ fontSize: 18, color: grey50}}/>
         </Card>
       </MuiThemeProvider>
       <div className="list-create-container" ref='create2'>
         <form onSubmit={this.handleSubmit}>
           <MuiThemeProvider muiTheme={muiTheme}>
             <Card className='create-form'>
               <CardTitle title="Grocery Item" subtitle="Add a new grocery item" titleStyle={{color: blueGrey900, fontSize: 18}} subtitleStyle={{color: blueGrey900}}/>
                 <TextField
                   id="titleinput"
                   type="text"
                   floatingLabelText="Grocery Item Name"
                   hintText="Grocery Item Name"
                   inputStyle={{paddingLeft: 5, paddingRight: 5, color: blueGrey900, width:'100%'}}
                   floatingLabelStyle={{color: blueGrey600,  left: '5px'}}
                   floatingLabelFocusStyle={{color: blueGrey600}}
                   hintStyle={{color: blueGrey900}}
                   underlineFocusStyle={{width: '200px', borderColor:blueGrey700}}
                   onChange={this.update('title')}
                   value={this.state.gitem.title}
                   className='create-text-input'
                 />
               <DatePicker className="grocery-item-datepicker"
               floatingLabelText="Expiration Date"
               floatingLabelStyle={{color: blueGrey600,  left: '5px'}}
               onTouchTap={this.handleDatepickerOnShow}
               onChange={this.updateDate}
               ref="datePicker"
               value={this.state.gitem.expire_date ? new Date(this.state.gitem.expire_date) : null}
               onDismiss={this.handleDatepickerOnClose}
               container="inline" mode="landscape"
               underlineFocusStyle={{width: '200px', borderColor:blueGrey700}}/>
             <RaisedButton ref="submit" type="submit" label="Save" backgroundColor="#263238" labelStyle={{fontWeight: 300, color: grey50}}/>
           </Card>
           </MuiThemeProvider>
         </form>
       </div>
     </ul>
   );}
   return(
     <ul></ul>
   );
  }
}

export default GItemCreateForm;
