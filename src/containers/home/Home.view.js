import React from "react";

const HomeView = ({mainData}) => {
  return (
    <>
      {mainData && mainData.map(item => {
        return <h3 key={item.id}>{item.name}</h3>
      })}
    </>
  );
};

export default HomeView;
