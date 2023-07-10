import * as React from 'react';
import { IAppState } from '../reducers';
import { Dispatch } from 'redux';
import { addProduct, IAddProductAction } from '../actions';
import { connect } from 'react-redux';
import ProductForm from './raw/ProductForm';
import { Person } from '../Logic';

interface IAddProductProps {
	isPersonSelected: boolean;
	selectedPersonName: string | null;
	dispatchAddProduct: (name: string, price: number) => void;
}

class AddProductRaw extends React.Component<IAddProductProps> {
	render() {
		if (!this.props.isPersonSelected) return this.renderInfoMessage();
		return (
			<ProductForm
				ownerName={this.props.selectedPersonName || 'N/A'}
				onSubmit={(name: string, price: number) => this.handleSubmit(name, price)}
				isCreateForm={true}
				children={undefined}
			/>
		);
	}

	renderInfoMessage() {
		return <p>No product owner is selected! Please select a person first to add product!</p>;
	}

	handleSubmit(name: string, price: number) {
		console.log('AddProduct handle submit');
		this.props.dispatchAddProduct(name, price);
	}
}

const mapStateToProps = (state: IAppState, ownProps: any) => {
	const isPersonSelected = state.selectedPersonId !== null;
	let selectedPersonName = null;
	if (isPersonSelected) {
		const selectedPerson: Person | null = state.selectedPersonId
			? Person.findById(state.selectedPersonId, state.people)
			: null;

		if (selectedPerson) {
			selectedPersonName = selectedPerson.name;
		}
	}
	return {
		isPersonSelected: isPersonSelected,
		selectedPersonName: selectedPersonName
	};
};

const mapDispatchToProps = (dispatch: Dispatch<IAddProductAction>, ownProps: any) => {
	return {
		dispatchAddProduct: (name: string, price: number) => dispatch(addProduct(name, price))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductRaw);
