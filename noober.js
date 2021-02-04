async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  

  // look at json structure -- it's an array with 100 rides. each ride is an array of objects, with each object containing rider data
  console.log(json)
  console.log(json.length)

  let levelOfService
  for (let i = 0; i < json.length; i++) {
    let rideRequests = json[i]
    console.log(rideRequests)

    // assign levelOfService for each rideRequest, which consists of one or more groups of people taking a ride
    if (rideRequests.length > 1) {
      levelOfService = 'Noober Pool'
    } else if (rideRequests[0].purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (rideRequests[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }

    // assign levelOfService to the html string
    let elementOne = document.querySelector('.rides')
    elementOne.insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${levelOfService} </span>
      </h1>
    `)

    // isolates the individual objects within the rideRequests array. this represents the ride legs
    for (let ii = 0; ii < rideRequests.length; ii++) {
      let rideLegs = rideRequests[ii]
      
      // Noober purple design features defined
      let rideLegBorderColor
      let passengerBoxColor
      if (levelOfService == 'Noober Purple') {
        rideLegBorderColor = '"border-4 border-purple-500 p-4 my-4 text-left"'
        passengerBoxColor = '"rounded-xl bg-purple-600 text-white p-2"'
      } else {
        rideLegBorderColor = '"border-4 border-gray-900 p-4 my-4 text-left"'
        passengerBoxColor = '"rounded-xl bg-gray-600 text-white p-2"'
      }
      
      // assign rider information to the html string
      let elementTwo = document.querySelector('.rides')
      elementTwo.insertAdjacentHTML('beforeend', `
        <div class=${rideLegBorderColor}>
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${rideLegs.passengerDetails.first } ${rideLegs.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${rideLegs.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class=${passengerBoxColor}>
                ${rideLegs.numberOfPassengers } passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${rideLegs.pickupLocation.address}</p>
              <p>${rideLegs.pickupLocation.city}, ${rideLegs.pickupLocation.state } ${rideLegs.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${rideLegs.dropoffLocation.address}</p>
              <p>${rideLegs.dropoffLocation.city}, ${rideLegs.dropoffLocation.state } ${rideLegs.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }

  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

