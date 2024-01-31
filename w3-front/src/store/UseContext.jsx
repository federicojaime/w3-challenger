import { useReducer } from "react";
import Context from "./Context";
import { defaultvalue, NEW_SEARCH } from "./constantes";
import PropTypes from "prop-types";

const reducer = (state, action) => {
	switch (action.type) {
		case NEW_SEARCH:
			return ({ ...state, search: action.payload });
		default:
			break;
	}
};

const UseContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultvalue);

	return(
		<Context.Provider value={{state, dispatch}}>
			{ children }
		</Context.Provider>
	);
};

UseContext.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UseContext;