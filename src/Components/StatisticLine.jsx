export const StatisticLine = ({ name, value }) => {
  return (
    <p key={name}>
      {name}
      <span> {value}</span>
    </p>
  );
};
