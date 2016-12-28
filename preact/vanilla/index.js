/** h(type, props, ...children) */

const { Component, h, render } = window.preact;

class App extends Component {
	componentDidMount() {
		this.setState({ message: "Vanilla Preact -- No Babel or JSX...just h() " });
	}
	render(props, state) {
		return (
			h("div", {id:"app"},
				h(Header, { message: state.message }),
				h(Main)
			)
		);
	}
}

/** Components can just be pure functions */
const Header = (props) => {
	return h("header", null,
		        h("h1", null, "App"),
		        props.message && h("h2", null, props.message)
	       );
};



class Main extends Component {
	render(props, state) {
		return (
			h("main", null,
				h("ol", null, [1,2,3,4,5].map( (item) => h("li", {id:item}, "Item") ))
			)
		);
	}
}


render(h(App), document.getElementById("app-container"));