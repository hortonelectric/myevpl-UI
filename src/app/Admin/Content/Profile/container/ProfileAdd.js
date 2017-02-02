import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import { connect } from 'react-redux'

import { addProfile } from '../middleware/middleware'

import Personal from '../component/AddForm/Personal'
import Venue from '../component/AddForm/Venue'
import Catering from '../component/AddForm/Catering'

class ProfileAdd extends Component {

    _handleSubmitForm = (value) => {
		this.props.dispatch(
			addProfile(value)	
		)
    }
	
    _handleChangeType = (value) => {
		this.props.dispatch(
			changeAddProfileFormType(value)
		)
    }

	_renderProfileType = () => {
		if(this.props.profileType === 'Catering'){
			return <Catering  {...this.props} />	
		}	
		if(this.props.profileType === 'Venue'){
			return <Venue  {...this.props} />	
		}	
	}

    render () {
        return (
			<section>
				<form>
					<Personal {...this.props} />				
					<br />
					<div className="p25">
						<h3>Select Profile Type</h3>
						<div className="row">
							<div className="col-xs-6">
								<Dropdown
									auto
									onChange={this._handleChangeType}
									source={type}
									value={this.props.profileType}
								/>
							</div>
						</div>
					</div>
					<br />
					{ this._renderProfileType() }	
					<br />
					<button onClick={this.props.handleSubmit(values => this._handleSubmitForm(values))}>Submit</button>
				</form>
			</section>	
		)
    }
}

const type = [
  { value: 'Venue', 	label: 'Venue' },
  { value: 'Catering', 	label: 'Catering'}
];

ProfileAdd = connect( state => ({
	profileType: state.admin.profile.addProfileFormType	
}) )(ProfileAdd)

ProfileAdd = reduxForm({
	form: 'AddProfileForm'
})(ProfileAdd)

export default ProfileAdd