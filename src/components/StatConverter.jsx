import ThemedText from "./ThemedText";

const StatConverter = ({ count }) => {
  const formatCount = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return `${value}`;
  };
  return <ThemedText fontWeight="bold">{formatCount(count)}</ThemedText>;
};
export default StatConverter;
