type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex items-center justify-center w-full px-10 min-w-[1500px] max-w-[1500px]">
      {children}
    </div>
  );
};

export default Container;
