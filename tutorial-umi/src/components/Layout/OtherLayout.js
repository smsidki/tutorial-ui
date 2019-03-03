export default (props) => (
  <div>
    {props.children.props.route.x}
    {props.children}
  </div>
);
