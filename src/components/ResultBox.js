export function ResultBox({ fraction, lcd }) {
  const multiplier = lcd / fraction.split("/")[1];
  const result = `${fraction.split("/")[0] * multiplier}/${lcd}`;

  return (
    <div className="result">
      {fraction} = {result}
    </div>
  );
}
