


// Ask the user to input the temperature in Celsius.
// Use if conditions to print:
// "Freezing" if temperature <= 0
// "Cold" if temperature > 0 and <= 15
// "Warm" if temperature > 15 and <= 30
// "Hot" if temperature > 30


var temperature = prompt(" Enter Temperture in celsius:")

if (temperature <= 0)
     {
    console.log("Freezing");
    } 
  else if (temperature > 0 && temperature <= 15)
     {
    console.log("Cold");
   }
 else if (temperature > 15 && temperature <= 30)
     {
    console.log("Warm");
   }
 else if (temperature > 30)
    {
    console.log("Hot");
   } 


