export const ThreeDProjects = ({
  image,
  title,
  year,
  setThreeDHoverPath,
}: {
  image: string;
  title: string;
  year: string;
  setThreeDHoverPath: any;
}) => {
  return (
    <div
      onMouseEnter={() => {
        setThreeDHoverPath(image);
      }}
      className="border-t h-20 border-light-tertiary flex items-center sm:pl-32 pl-4"
    >
      <p>{year}</p>
      <p className="uppercase ml-32 text-lg sm:text-2xl">{title}</p>
    </div>
  );
};
