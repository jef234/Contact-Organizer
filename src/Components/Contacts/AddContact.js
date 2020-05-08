import React, { Component } from 'react'
import TextInputGroup from '../Layout/TextInputGroup'
import { connect } from 'react-redux'
import { addContact } from '../../actions/contactActions'
import PropTypes from 'prop-types'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    validate_keys = () => {
        const { name, email, phone } = this.state
        let errName, errEmail, errPhone, errFlag = 0
        if (name === '') { errName = 'Name is required'; errFlag = 1 }
        if (email === '') { errEmail = 'Email is required'; errFlag = 1 }
        if (phone === '') { errPhone = 'Phone is required'; errFlag = 1 }

        this.setState({ errors: { name: errName, email: errEmail, phone: errPhone } })
        return errFlag
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const { name, email, phone } = this.state

        if (this.validate_keys() === 1) {
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }

        this.props.addContact(newContact)

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onKeyUp = e => this.validate_keys()

    render() {
        const { name, email, phone, errors } = this.state


        return (
            <React.Fragment>
                <h1 className="display-4 mb-3 mt-2" >
                    <span className="text-danger">Add</span> Contact
                        </h1>
                <div className="card mb-3">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="Name"
                                name="name"
                                placeholder="Enter Name.."
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                                onKeyUp={this.onKeyUp}
                            />
                            <TextInputGroup
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter Email.."
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                                onKeyUp={this.onKeyUp}
                            />
                            <TextInputGroup
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone.."
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
                                onKeyUp={this.onKeyUp}
                            />
                            <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(null, { addContact })(AddContact)
