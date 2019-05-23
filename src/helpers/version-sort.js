const sortBy = key => (a, b) =>
  a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;

export function sortVersions(versions) {
  const ordered = versions.reduce((arr, v) => {
    const version = v.split('-')[0]; // remove beta or alpha flag
    const preNum = version.split('.').map(subNum => {
      if (subNum.length === 1) {
        return `0${subNum}`;
      }
      if (subNum.length === 2) {
        return subNum;
      }
    });
    const num = parseInt(preNum.join('')); // parse version as number
    arr.push({ version, num, v });
    return arr;
  }, []);

  const allVersionsOrdered = [
    ...new Set( // make uniq
      ordered
        .sort(sortBy('num')) // sort by the integer
        .reverse() // put in descending order
        .map(a => a.v)
    )
  ];

  const latestStable = allVersionsOrdered
    .filter(version => {
      return /alpha|beta|rc|pre/.test(version) === false;
    })
    .slice(0, 1)[0];

  const allLatestVersion = new RegExp(`^${latestStable}.+`);

  const newestPreRelease = allVersionsOrdered
    .reduce((arr, version, index) => {
      if (
        index < allVersionsOrdered.indexOf(latestStable) &&
        !allLatestVersion.test(version)
      )
        arr.push({ version });
      return arr;
    }, [])
    .sort(sortBy('version'))
    .reverse()
    .map(v => v.version);

  const versionsToDisplay = allVersionsOrdered.filter(version => {
    return !/^(\d|\.)+-(alpha|beta|rc|pre).+/.test(version);
  });

  return {
    allVersionsOrdered,
    latestStable,
    allLatestVersion,
    newestPreRelease,
    versionsToDisplay
  };
}
