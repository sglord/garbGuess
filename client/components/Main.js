import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchClothing from '../store/clothing';
import { Container, Button } from 'semantic-ui-react';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			type: {},
			warmth: {},
			occasion: {}
		};
	}

	handleSubmit(evt) {
		evt.preventDefault();
		let { type, warmth, occasion } = this.state;
		this.props.selectClothing(type, warmth, occasion);
	}

	handleSelection(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleButtonClick(evt) {
		console.log(evt.target);
	}

	render() {
		return (
			<div>
				<p> item type:</p>
				<Button.Group>
					<Button
						kind="type"
						name="hat"
						onClick={evt => {
							this.handleButtonClick(evt);
						}}>
						hat
					</Button>
					<Button.Or />

					<Button
						name="shirt"
						onClick={evt => {
							this.handleButtonClick(evt);
						}}>
						shirt
					</Button>
					<Button.Or />

					<Button
						name="pants"
						onClick={evt => {
							this.handleButtonClick(evt);
						}}>
						pants
					</Button>
					<Button.Or />

					<Button
						name="shoes"
						onClick={evt => {
							this.handleButtonClick(evt);
						}}>
						shoes
					</Button>
				</Button.Group>
				<p> warmth level:</p>
				<div>
					<Button.Group>
						<Button
							name="light"
							onClick={evt => {
								this.handleButtonClick(evt);
							}}>
							light
						</Button>
						<Button.Or />

						<Button
							name="medium"
							onClick={evt => {
								this.handleButtonClick(evt);
							}}>
							medium
						</Button>
						<Button.Or />

						<Button
							name="heavy"
							onClick={evt => {
								this.handleButtonClick(evt);
							}}>
							heavy
						</Button>
					</Button.Group>
				</div>
				<Button size="huge" onClick={() => this.handleSubmit}>
					Submit
				</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		clothingItem: state.clothingItem
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectClothing: (type, warmth, occasion) =>
			dispatch(fetchClothing(type, warmth, occasion))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
