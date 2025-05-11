const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: string | number;
  quality: string | number;
}) => {
  return `${process.env.NEXT_PUBLIC_SERVER}${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default imageLoader;
