/**
 * Routes:
 *   - ./src/components/Layout/CarouselLayout.js
 */

import React from 'react';

class ProductLayout extends React.Component {

  render() {
    return (
      <>{this.props.children}</>
    );
  }

}

export default ProductLayout;
