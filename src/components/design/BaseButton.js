const BaseButton = ({ color, backgroundColor, children, body, border }) => (
	<div className="s-h-right">
		<button>{children}</button>
	</div>
);

export default BaseButton;
