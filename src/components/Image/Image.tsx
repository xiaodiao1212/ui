import React from "react";
import classnames from "classnames";
import { ImageProps } from "./Image.types";
import useStyles from "../../hooks/useStyles";

const Image = ({
  circle = false,
  loading = "lazy",
  src,
  alt,
  filter,
  fit,
  className,
  ...props
}: ImageProps) => {
  const classes = useStyles(
    (theme) => ({
      image: ({ filter, fit }) => ({
        filter,
        objectFit: fit,
        width: "100%",
        height: "auto",
      }),
      circle: {
        borderRadius: "50%",
      },
    }),
    { filter, fit },
    { classNamePrefix: "Image" }
  );
  const handleClickImage = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    props?.onClick(e);
  };
  const cns = classnames(
    classes.image,
    { [classes.circle]: circle },
    className
  );

  return (
    <img
      className={cns}
      src={src}
      alt={alt}
      onClick={handleClickImage}
      loading={loading}
      {...props}
    />
  );
};

export default Image;
