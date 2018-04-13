import React, {Component} from 'react';


class EditBag extends Component {
    render() {
        return (
            <div>

                <form action="">
                    <input type ="text"
                    name = "bagname"/>

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
