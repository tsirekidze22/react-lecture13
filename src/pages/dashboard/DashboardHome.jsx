import _ from "lodash";

const DashboardHome = () => {
  const randomNums = _.shuffle([1, 2, 3, 4, 5]);
  return (
    <>
      <h1>DashboardHome Page</h1>

      {randomNums.map((item) => (
        <h2 key={item}>{item}</h2>
      ))}
    </>
  );
};

export default DashboardHome;
