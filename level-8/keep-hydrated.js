// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  //   he drinks .5 litres of water per hour. If he cycles 2 hours, he will need 1 litre of water. If he cycles 1 hour he will need .5 litrs, or 0 rounded to the smallest.
  //   I can use Math.floor to round the litres to the lowest whole number. We'll multiply the time by .5 since it is .5 litrs  per 1 hour.
  return Math.floor(time * 0.5);
}
