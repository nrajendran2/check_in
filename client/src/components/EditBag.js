import React, {Component} from 'react';
import axios from 'axios'

class EditBag extends Component {

    state = {
        bag: {}
    }

    componentDidMount() {
        this.getBag()
    }

    getBag = async() => {
        const res = await axios.get(`/api/users/${this.props.userId}/bags/${this.props.id}`)
        this.setState({bag: res.data.bag_name})

    }

    handleChange = (event) => {
        const editState = {
            ...this.state.bag
        }
        editState[event.target.name] = event.target.value

        this.setState({bag: editState})
    }

    submitNewBag = (event) => {
        alert("submitting new bag")
        event.preventDefault()
        const payload = {
            name: this.state.bag.name,
            weight: this.state.bag.weight,
            fragile: this.state.bag.fragile

        }
        console.log(payload)
        axios
            .patch(`/api/users/${this.props.userId}/bags/${this.props.id}`, payload)
            .then((res) => {
                console.log(res.data)
                this.setState({bag: res.data})

            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitNewBag}>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}/>

                    <input
                        type="text"
                        name="weight"
                        onChange={this.handleChange}
                        value={this.state.weight}/>

                    <input
                        type="text"
                        name="fragile"
                        onChange={this.handleChange}
                        value={this.state.fragile}/>

                    <button type="submit">
                        Update Bag
                    </button>
                </form>

            </div>
        );
    }
}

export default EditBag;
