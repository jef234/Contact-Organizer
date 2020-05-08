import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteContact } from '../../actions/contactActions'

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    }

    onDeleteClick = async (id) => {
        this.props.deleteContact(id)
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}&nbsp;
                                <i onClick={this.onShowClick} className={showContactInfo ? "fas fa-caret-square-up" : "far fa-caret-square-down"} style={{ cursor: 'pointer' }} />
                    <i onClick={this.onDeleteClick.bind(this, id)} className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
                    <Link to={`/Contacts/Edit/${id}`}><i className="fas fa-pencil-alt mr-3" style={{ cursor: 'pointer', float: 'right', color: 'black', fontSize: '1.17rem' }} /></Link>
                </h4>
                {showContactInfo ?
                    (<ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>)
                    : null}

            </div>
        )
    }
}

Contact.protoType = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default connect(null,{deleteContact})(Contact);