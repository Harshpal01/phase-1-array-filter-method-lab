// findMatching(drivers, query)
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

  // fuzzyMatch(drivers, query)
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }

  // matchName(drivers, query)
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
