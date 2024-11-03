import { ReactNode, Children, isValidElement, cloneElement } from "react";

type Props = { [key: string]: any };
type RenderProps = (childProps: Props) => Props;

interface Arguments {
  children: ReactNode;
  renderProps: RenderProps;
}

function mapChildrenWithProps({ children, renderProps }: Arguments): ReactNode {
  return Children.map(children, (child) => {
    // * checks for texts or anything thats not a element
    if (!isValidElement(child)) return child;

    const extraProps = renderProps(child.props);
    return cloneElement(child, {
      ...child.props,
      ...extraProps,
      children: mapChildrenWithProps({
        children: child.props.children,
        renderProps: renderProps,
      }),
    });
  });
}

export default mapChildrenWithProps;