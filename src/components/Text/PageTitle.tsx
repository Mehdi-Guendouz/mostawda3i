import React from "react";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold tracking-tight text-primary-blue">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
