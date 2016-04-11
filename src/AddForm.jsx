import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo} from './redux/actions'


class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return <form>
            <input 
                onChange={(e) => this.onChange(e)}
                value={this.state.value} />
            <button type="button" onClick={() => this.add()}>Add</button>
        </form>
    }
    add(){
        var value = this.state.value;
        if (value != ''){
            this.props.addTodo(value);
            this.setState({value: ''})    
        }        
    }
    onChange(e){
        var value = e.target.value;
        this.setState({
            value: value
        })
    }
}

AddForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddForm
