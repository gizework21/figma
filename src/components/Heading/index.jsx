import React from "react";

const sizes = {
  xs: "text-5xl font-bold leading-[58px] md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-euclidcirculara ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
