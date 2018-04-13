import React, {Component} from 'react';


class EditBag extends Component {

    state = {
        bag: {
            bagname: '',
            weight:'',
            fragile: ''

        }
    }

  
    handleChange = (event) => {
        const editState = { ...this.state.user }
        editState[event.target.name] = event.target.value

        this.setState({ user: editState })
    }

    submitNewUserName = (event) => {
        event.preventDefault()
        const payload = {
            bagname: this.state.user.bagname,
            weight: this.state.user.weight,
            fragile: this.state.user.fragile

        }

        axios.patch(`/api/users/${this.props.userId.userid}`, payload).then((res) => {

            console.log(res.data)
            this.setState({ user: res.data })
            window.location.reload()

        })
    }

    render() {
        return (
            <div>

                <form action="">
                    <input type ="text" name = "bagname"/>

                     <input type ="text"
                    name = "weight"/>


                     <input type ="text"
                    name = "fragile"/>
                </form>

            </div>
        );
    }
}

export default EditBag;
