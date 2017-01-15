import React from 'react';

class ToggleMenu extends React.Component {
  constructor(){
    super();
    this.toggle = this.toggle.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  toggle(e){
    this.stopPropagation(e);
    if(!this.props.disabled){
      this.props.toggle();
    }
  }

  stopPropagation(e){
    if(e) e.stopPropagation();
  }

  renderMenu(title, menuContent){
    const {children, show, disable} = this.props;
    let titleContent = '';
    if(title) {
      titleContent = (
        <section>
          <span onClick={this.toggle} className="menu-close"/>
          <section className='menu-header'>
            {title}
          </section>
        </section>
      );
    }

    return (
      <section onClick={this.stopPropagation}>
        {titleContent}
        {menuContent}
      </section>
    );
  }
}

export default ToggleMenu;
