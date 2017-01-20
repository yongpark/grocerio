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


  update(prop){
    return e => {
      const gitem = merge({}, this.state.gitem, {
        [prop]: e.target.value
      });
      this.setState({gitem});
    };
  }

   updateDate(e, date){
     return e => {
       const gitem = merge({}, this.state.gitem, {expire_date: date});
       this.setState({gitem});
     };
   }


   handleSubmit(e){
     console.log();
     e.preventDefault();
     if(this.state.gitem){
       this.props.createGItem(this.state.gitem).then(this.hide);
     }
   }

   render(){
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
                <DatePicker hintText="Enter Expiration Date"
                  value={this.state.gitem.expire_date}
                  onChange={this.updateDate}/>
             <RaisedButton type="submit" secondary={true} label="Save"/>
           </Card>
           </MuiThemeProvider>
         </form>
       </div>
     </ul>
   );
   }
}

export default GItemCreateForm;
