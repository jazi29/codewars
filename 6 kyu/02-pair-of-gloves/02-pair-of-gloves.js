function numberOfPairs(gloves) {

  let pairs = 0
  ,  counts = {};
  
  for (let color of gloves) {
  
    if (!counts.hasOwnProperty(color))
      counts[color] = 0;

    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }
  }
    
  return pairs;
}
