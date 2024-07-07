function brightest(colors){
  const sortedColors = colors;
  sortedColors.sort((a, b)=>{
    let rValue = parseInt(a.slice(1, 3), 16);
    let gValue = parseInt(a.slice(3, 5), 16);
    let bValue = parseInt(a.slice(5), 16);
    let brightness = Math.max(rValue, gValue, bValue);
    
    let rValue2 = parseInt(b.slice(1, 3), 16);
    let gValue2 = parseInt(b.slice(3, 5), 16);
    let bValue2 = parseInt(b.slice(5), 16);
    let brightness2 = Math.max(rValue2, gValue2, bValue2);
    return brightness2 - brightness;
  });
  return sortedColors[0];
}
