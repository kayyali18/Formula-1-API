function driverCleaner(names, teams, points) {
  let cleaned = names.reduce((acc, curr) => {
    let obj = {
      name: curr,
      team: teams[acc.length],
      points: points[acc.length]
    };

    acc.push(obj);
    return acc;
  }, []);

  return cleaned;
}

module.exports.driverCleaner = driverCleaner;
