import React, {Component} from 'react';
import axios from 'axios'


class EditBag extends Component {

    state = {
        bag: {
            bagname: '',
            weight:'',
            fragile: ''

        }
    }

  
    handleChange = (event) => {
        const editState = { ...this.state.bag}
        editState[event.target.name] = event.target.value

        this.setState({ bag: editState })
    }

    submitNewBag = (event) => {
        event.preventDefault()
        const payload = {
            bagname: this.state.user.bagname,
            weight: this.state.user.weight,
            fragile: this.state.user.fragile

        }

        axios.patch(`/api/users/${this.props.userId}/bags/${this.props.id}`, payload).then((res) => {
             console.log(res.data)
            this.setState({ user: res.data })
            window.location.reload()

        })
    }

    render() {
        return (
            <div>
                    <form OnSubmit ={this.submitNewBag}>
                    <input type ="text" name = "bagname" onChange={this.handleChange} value={this.state.username}/>

                     <input type ="text" name = "weight" onChange={this.handleChange} value={this.state.weight}/>
    
                     <input type ="text"  name = "fragile" onChange={this.handleChange} value={this.state.fragile}/>

                     <button type = 'submit'> Update Bag </button>
                </form>

            </div>
        );
    }
}

export default EditBag;
