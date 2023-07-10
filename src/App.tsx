import * as React from 'react';
import './App.css';
import './main.css';
import ProductSection from './components/ProductSection';
import PeopleSection from './components/PeopleSection';
import ResultsSection from './components/ResultsSection';
import Button from './components/ui/Button';
import { clearPeople } from './actions';

class App extends React.Component<{ store: any | undefined }> {
	render() {
		return this.renderLayout();
	}

	renderLayout() {
		return (
			<div>
				<div className='container-fluid'>
					<div className='row content'>
						<section className='col-sm-3 sidenav'>
							<h4>
								People{' '}
								<Button
									text='Clear'
									btnStyle='btn-default btn-xs'
									onClick={this.handleClearPeople.bind(this)}
								/>
							</h4>
							<PeopleSection />
						</section>
						<section className='col-sm-6'>
							<h2>RESULTS</h2>
							<ResultsSection />
						</section>
						<section className='col-sm-3 sidenav'>
							<h4>Product list</h4>
							<ProductSection />
						</section>
					</div>
				</div>
			</div>
		);
	}

	handleClearPeople() {
		this.props.store.dispatch(clearPeople());
	}
}

export default App;
