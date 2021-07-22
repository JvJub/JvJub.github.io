import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="263" rx="6" ry="6" width="280" height="26" />
    <rect x="0" y="304" rx="6" ry="6" width="280" height="73" />
    <rect x="0" y="401" rx="6" ry="6" width="91" height="31" />
    <rect x="133" y="395" rx="20" ry="20" width="141" height="41" />
  </ContentLoader>
);

export default Loader;
