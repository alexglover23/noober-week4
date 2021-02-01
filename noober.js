async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  // look at json structure -- it's an array with 100 rides. each ride is an array of objects, with each object containing rider data
  //console.log(json)
  console.log(json.length)
  for(let i = 0; i < json.length; i++) {
    let rideRequests = json[i]
    console.log(rideRequests)
    for(let ii = 0; ii < rideRequests.length; ii++) {
      // isolates the individual objects within the rideRequests array. this represents the ride legs
      let rideLegs = rideRequests[ii]
      //console.log(rideLegs)
      //console.log(rideLegs.length)
      
      // access details for each individual rider
      let rideLegsPassengerDetails = rideLegs.passengerDetails.first
      console.log(rideLegsPassengerDetails)
      
    }
    //console.log(ride)
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

