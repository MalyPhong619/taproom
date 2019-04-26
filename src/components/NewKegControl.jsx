import React from 'react';
import NewKegTicket from './NewKegTicket';


class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKegForm: false
    };
    this.addKeg = this.addKeg.bind(this)
  }

  addKeg(){
    this.setState({newKegForm: true});
  }

  render() {
    let visibleComponent = null;
    if (this.state.newKegForm === true) {
      visibleComponent = <NewKegTicket/> ;
    }

    return(
      <div>
        <button onClick={this.addKeg}>Add New Keg</button>
        {visibleComponent}
      </div>
    );
  }
}

export default NewKegControl;
