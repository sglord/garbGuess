import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClothing } from '../store/clothing';
import { Container, Button, Divider } from 'semantic-ui-react';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			type: {},
			warmth: {},
			occasion: {}
		};
	}

	handleSubmit() {
		let { type, warmth, occasion } = this.state;
		console.log(this.state);
		this.props.fetchClothing(type, warmth, occasion);
	}

	handleSelection(kind, evt) {
		this.setState({ [`${kind}`]: evt.target.name });
	}
	render() {
		return (
			<Container>
				<p> Clothing type:</p>
				<Button.Group>
					<Button
						name="hat"
						onClick={evt => {
							this.handleSelection('type', evt);
						}}>
						Hat
					</Button>
					<Button.Or />

					<Button
						name="shirt"
						onClick={evt => {
							this.handleSelection('type', evt);
						}}>
						Shirt
					</Button>
					<Button.Or />

					<Button
						name="pants"
						onClick={evt => {
							this.handleSelection('type', evt);
						}}>
						Pants
					</Button>
					<Button.Or />

					<Button
						name="shoes"
						onClick={evt => {
							this.handleSelection('type', evt);
						}}>
						Shoes
					</Button>
				</Button.Group>
				<p> Warmth Level:</p>
				<div>
					<Button.Group>
						<Button
							name="light"
							onClick={evt => {
								this.handleSelection('warmth', evt);
							}}>
							Light
						</Button>
						<Button.Or />

						<Button
							name="medium"
							onClick={evt => {
								this.handleSelection('warmth', evt);
							}}>
							Medium
						</Button>
						<Button.Or />

						<Button
							name="heavy"
							onClick={evt => {
								this.handleSelection('warmth', evt);
							}}>
							Heavy
						</Button>
					</Button.Group>
				</div>
				<p>Occasion:</p>
				<div>
					<Button.Group>
						<Button
							name="casual"
							onClick={evt => {
								this.handleSelection('occasion', evt);
							}}>
							Casual
						</Button>
						<Button.Or />

						<Button
							name="smart"
							onClick={evt => {
								this.handleSelection('occasion', evt);
							}}>
							Smart
						</Button>
						<Button.Or />

						<Button
							name="formal"
							onClick={evt => {
								this.handleSelection('occasion', evt);
							}}>
							Formal
						</Button>
					</Button.Group>
				</div>
				<Divider hidden />
				<Button size="huge" onClick={() => this.handleSubmit()}>
					Submit
				</Button>
			</Container>
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
		fetchClothing: (type, warmth, occasion) =>
			dispatch(fetchClothing(type, warmth, occasion))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
