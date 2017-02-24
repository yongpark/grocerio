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
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';


class GItemCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      gitem: props.gitem
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.handleDatepickerOnShow = this.handleDatepickerOnShow.bind(this);
    this.handleDatepickerOnClose = this.handleDatepickerOnClose.bind(this);
  }

   componentDidMount() {
     document.addEventListener('click',
       this.handleClickOutside, true);
   }

   componentWillUnmount() {
     document.removeEventListener('click',
     this.handleClickOutside, true);
   }

   handleClickOutside(event) {
     console.log(this.datepickerOpen);
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
      console.log(e);
      const gitem = merge({}, this.state.gitem, {
        [prop]: e.target.value
      });
      this.setState({gitem});
    };
  }

   updateDate(e, date){
     console.log(date);
     let formattedDate = moment(date).format("YYYY-MM-DD");
     console.log(formattedDate);
     const gitem = merge({}, this.state.gitem, {expire_date: formattedDate});
     this.setState({gitem});
    //  debugger;
   }

   handleSubmit(e){
     console.log();
     e.preventDefault();
     if(this.state.gitem){
       this.props.createGItem(this.state.gitem).then(this.hide);
     }
   }

   handleDatepickerOnShow(e){
     this.datepickerOpen = true;
   }

   handleDatepickerOnClose(e){
     this.datepickerOpen = false;
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
           <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
             <Card>
               <CardTitle className="card-subtitle" title="Grocery Item" subtitle="Grocery Name" titleStyle={{ fontSize: 18, color: grey50 }}/>
                 <TextField
                   id="titleinput"
                   type="text"
                   placeholder="Add a Grocery Item"
                   onChange={this.update('title')}
                 />
               <DatePicker className="grocery-item-datepicker" onTouchTap={this.handleDatepickerOnShow}
               onChange={this.updateDate}
               onDismiss={this.handleDatepickerOnClose}
               container="inline" mode="landscape"/>
             <RaisedButton type="submit" secondary={true} label="Save"/>
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
