import React from "react";
import PropTypes from "prop-types";

const HeaderComponent = ({
  children,
  className,
  datatestid,
  id,
  image,
  name,
  isopen,
  onClick,
}) => {
  return (
    <div
      className={className}
      datatestid={datatestid}
      id={id}
      image={image}
      isopen={isopen}
      name={name}
      onClick={onClick}
    >
      {
        children
        // = {// <div>
        //     <img className={className} alt="logo" src={logo} />
        // </div>
        // <h2>Header</h2>
        // <h5>Subheader</h5>}
      }
    </div>
  );
};

HeaderComponent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  datatestid: PropTypes.string,
  id: PropTypes.string,
  isopen: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default HeaderComponent;