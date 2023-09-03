import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {name: ''};

      this.handleNameChange = this.handleNameChange.bind(this);
      
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='id-name' >Your Name:</label>
                    <input 
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id='id-name' 
                        type='text' 
                        name='name' 
                    />
                    <input type='submit' value="submit" />
                </form>
            </div>
        )
  }
}

export default ControlledForm