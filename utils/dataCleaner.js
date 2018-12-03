function cleaner(names, teams, points) {
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

function readify(names, teams, points) {
  names = [].slice.call(names);
  teams = [].slice.call(teams);
  points = [].slice.call(points);
  names = names.map(node => node.innerText);
  teams = teams.map(node => node.innerText);
  points = points.map(node => node.innerText);
}

module.exports = cleaner;
