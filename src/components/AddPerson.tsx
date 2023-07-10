import * as React from 'react';
import { IAppState } from '../reducers';
import { addPerson, IAddPersonAction } from '../actions';
import { connect } from 'react-redux';
import PersonForm from './raw/PersonForm';
import { Dispatch } from 'redux';

interface IAddPersonProps {
	dispatchAddPerson: (name: string) => void;
}

class AddPersonRaw extends React.Component<IAddPersonProps> {
	render() {
		return <PersonForm onSubmit={(name: string) => this.handleSubmit(name)} isCreateForm={true} />;
	}

	handleSubmit(value: string) {
		console.log('AddPerson handle submit');
		this.props.dispatchAddPerson(value);
	}
}

const mapStateToProps = (state: IAppState, ownProps: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: Dispatch<IAddPersonAction>, ownProps: any) => {
	return {
		dispatchAddPerson: (name: string) => dispatch(addPerson(name))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonRaw);
