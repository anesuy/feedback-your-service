import { isDisabled } from "@testing-library/user-event/dist/utils";
import PropTypes from "prop-types"

// children: rapping the component around whatever the
// text from the button 


//version: having primary or secondary and that will
// pertain to a specific class.

//type: if it's a submit button or just a regular button.
//isDisabled: id the button will be disabled

export default function Button ({ children, version, type, isDisabled }) {
    
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string, 
    isDisabled: PropTypes.bool,

}