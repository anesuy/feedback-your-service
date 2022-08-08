import PropTypes from "prop-types";

export default function Header({ titleHeader, bgColor, textColor }) {
  //defyning your styling in a CONST, then taking the props
  // in DEFAULT PROPS for sytling

  const headerStyles = {
    backgroungColor: bgColor,
    color: textColor,
  };

  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h1> {titleHeader}</h1>
        </div>
      </header>
    </>
  );
}

//You dont need to specify your props on App.js, bc you rcan
//show them in this page but as DEFAULT.

Header.defaultProps = {
  titleHeader: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

//Same with the type of your props

Header.propTypes = {
  titleHeader: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

// You can put PROPS orrrrrrr the NAME of your props (in curly brackets)
// It means the same
// export default function Header(props) {
//   return (
//     <>
//       <div className="header" >
//         <h1> {props.titleHeader}</h1>
//       </div>
//     </>
//   );
// }
