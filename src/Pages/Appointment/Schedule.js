import React from "react";

const Schedule = ({ schedule }) => {
  const { id, name, slots } = schedule;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Schedule;
