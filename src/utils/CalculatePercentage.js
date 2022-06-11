export default function CalculatePercentage(arrayOfNums) {
  const hash = {};
  const percentageHash = {};
  let totalNumbers = 0;
  arrayOfNums.forEach((num) => {
    if (!hash[num]) {
      hash[num] = 1;
      totalNumbers += 1;
      return;
    }
    totalNumbers += 1;
    hash[num] += 1;
  });

  for (const num in hash) {
    let percentage = (hash[num] / totalNumbers) * 100;
    percentageHash[num] = percentage.toFixed(2);
  }

  return percentageHash;
}
