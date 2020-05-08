import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getContacts } from '../../actions/contactActions'

class Contacts extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-3">
                    <span className="text-danger">Contacts</span> List
                            </h1>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
})

Contacts.protoTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getContacts })(Contacts);