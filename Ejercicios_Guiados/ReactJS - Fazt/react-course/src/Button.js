import PropTypes from 'prop-types'

export function Button({ text, name = 'Some User'}) {
  console.log(text);
  if (!text) {
    console.error("Prop text is required");
  }
  return (
    <button
      onClick={function () {
        console.log("Hola Mundo");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

// Button.defaultProps = {
//     name: 'Some User'
// }

export default Button;
