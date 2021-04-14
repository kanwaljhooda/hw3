// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Parse the attributes of "ride" object and store each data element individually

  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip
  let numberOfRiders = ride.numberOfPassengers
  let purpleRequest = ride.purpleRequested

  // Define variable for ride type
  let rideType

  // Define logic for determining ride type
  
    // If purple ride has been requested than set it to Purple
    if (purpleRequest == true){
      rideType = `Purple`
    }

    // If a purple ride is not requested but there are more than 3 passengers on a requested ride then set it to "XL" 
    else if (numberOfRiders > 3) {
      rideType = `XL`
    }

    // If neither purple ride is requested nor more than 3 passengers, then set it to "X" 
    else {
      rideType = `X`
    }

  // Create human-readable description of the ride
  let output = `Noober ${rideType} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`

  // Display human-readable description of the ride on the console
  console.log(output)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
