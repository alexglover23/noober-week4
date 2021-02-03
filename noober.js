async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  


  // define the function which writes the html for levelOfService
  let renderLevelOfService = function(variable) {
    return `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${levelOfService} </span>
      </h1>
  `}
    
  // define the function which writes the html for rideLegs
  let renderRideLegs = function(variable) {
      return `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${rideLegs.passengerDetails.first}</h2>
            <p class="font-bold text-gray-600">(312) 555-1212</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              2 passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>123 Main St</p>
            <p>Chicago, IL 60603</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>123 Main St</p>
            <p>Chicago, IL 60603</p>
          </div>
        </div>
      </div>
    `}


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
      
      // assign levelOfService for each rideRequest, based on info from rideLegs
      if (rideRequests.length > 1) {
        levelOfService = 'Noober Pool'
      } else if (rideRequests[0].purpleRequested) {
        levelOfService = 'Noober Purple'
      } else if (rideRequests[0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
      } else {
        levelOfService = 'Noober X'
      }
      
      // assign level of service to the html string
      
    
      
      // assign rider information to the html string
      let elementTwo = document.querySelector('.rides')
      console.log(elementTwo)
      //console.log(product)
      elementTwo.insertAdjacentHTML('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${rideLegs.passengerDetails.first}</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            2 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>
  `)

      

    }
    let elementOne = document.querySelector('.rides')
      console.log(elementOne)
      //console.log(product)
      elementOne.insertAdjacentHTML('beforeend', `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span> ${levelOfService} </span>
      </h1>`)

    console.log(levelOfService)
    //console.log(ride)
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

