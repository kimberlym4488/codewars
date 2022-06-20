function isTriangle(a,b,c)
{
  //add any two sides and it should be greater than the remaining side. 
  // we are returning a true or a false only.
return (a+b <= c || a+c<=b ||b+c<=a) ? false: true
 
}