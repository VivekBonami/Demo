const categoriesFilter = [
  { name: "Hotel", count: 306 },
  { name: "Motel", count: 72 },
  { name: "Aparthotel", count: 9 },
  { name: "Hostel", count: 7 },
  { name: "Apartment", count: 3 },
  { name: "Bed", count: 1 },
];

const amenitiesFilter = [
  { name: "Parking Garage" },
  { name: "Outdoor Pool" },
  { name: "TV in Room" },
  { name: "Business Center" },
  { name: "Fitness Facility" },
  { name: "In House Bar" },
  { name: "Pets Allowed" },
  { name: "Kitchen" },
  { name: "Airport Transfer" },
  { name: "Children Allowed" },
  { name: "Indoor Pool" },
  { name: "Dry Cleaning" },
  { name: "Air Conditioning" },
  { name: "Valet Parking" },
  { name: "Safe" },
  { name: "Room Service" },
  { name: "Clothing Room" },
];

const flightStopsFilter = [
  { name: "flightStops", label: "Non-stop" },
  { name: "flightStops", label: "One-stop" },
  { name: "flightStops", label: "Two Stop or more" },
];

const flightAirlinesFilter = [
  { name: "flightAirlines", label: "Aeromexico (AM)" },
  { name: "flightAirlines", label: "Air France (AF)" },
  { name: "flightAirlines", label: "American Airlines (AA)" },
  { name: "flightAirlines", label: "Austrian Airways (OS)" },
  { name: "flightAirlines", label: "British Airways (BA)" },
  { name: "flightAirlines", label: "Brussels Airlines (SN)" },
  { name: "flightAirlines", label: "British Airways (BA)" },
  { name: "flightAirlines", label: "Brussels Airlines (SN)" },
];

const flightArrivalTimeFilter = [
  { name: "flightArrivalTime", label: "Before 6AM" },
  { name: "flightArrivalTime", label: "6AM - 12 Noon" },
  { name: "flightArrivalTime", label: "12 Noon - 6PM" },
  { name: "flightArrivalTime", label: "After 6AM" },
];

const flightSortOptions = [
  { value: "Price (High to Low)", label: "Price (High to Low)" },
  { value: "Price (Low to High)", label: "Price (Low to High)" },
  { value: "Duration (Early Dearture)", label: "Duration (Early Dearture)" },
  { value: "Duration (Late Dearture)", label: "Duration (Late Dearture)" },
  { value: "Arrival (Early Arrival)", label: "Arrival (Early Arrival)" },
  { value: "Arrival (Late Arrival)", label: "Arrival (Late Arrival)" },
];

const vehicleTypeOptions = [
  { name: "flightAirlines", value: "Luxury Car (16)" },
  { name: "flightAirlines", label: "Compact Car (15)" },
  { name: "flightAirlines", label: "Standart Car (15)" },
  { name: "flightAirlines", label: "Minivan (17)" },
  { name: "flightAirlines", label: "Luxury SUV (6)" },
  { name: "flightAirlines", label: "Economy Car (12)" },
  { name: "flightAirlines", label: "Standart-Size Van (10)" },
  { name: "flightAirlines", label: "Full-Size Car (19)" },
  { name: "flightAirlines", label: "SUV (17)" },
  { name: "flightAirlines", label: "Full-Size Van (10)" },
  { name: "flightAirlines", label: "Pemium SUV (10)" },
  { name: "flightAirlines", label: "Convertible (18)" },
  { name: "flightAirlines", label: "Standart-Size Pickup (8)" },
  { name: "flightAirlines", label: "Mid-Size SUV (16)" },
  { name: "flightAirlines", label: "VehStandart-Size SUV (14)icle" },
  { name: "flightAirlines", label: "Full-Size SUV (14)" },
  { name: "flightAirlines", label: "Premium Car (18)" },
  { name: "flightAirlines", label: "Mid-Size Car (19)" },
  { name: "flightAirlines", label: "Special Car (17)" },
  { name: "flightAirlines", label: "Sports Car (10)" },
  { name: "flightAirlines", label: "Intermediate Car (10)" },
  { name: "flightAirlines", label: "Mid-Size Convertible (18)" },
  { name: "flightAirlines", label: "Full-Size Wagon (8)" },
  { name: "flightAirlines", label: "Van (16)" },
  { name: "flightAirlines", label: "Speciality Car (14" },
  { name: "flightAirlines", label: "Premium Convertible (14)" },
  { name: "flightAirlines", label: "Mini Car (18)" },
];

const carCompaniesOptions = [
  { name: "flightAirlines", label: "Midway Car Rental (16)" },
  { name: "flightAirlines", label: "State Van Rental (15)" },
  { name: "flightAirlines", label: "Enteprise Rent-A-Car (15)" },
  { name: "flightAirlines", label: "Alamo Rent a Car (17)" },
  { name: "flightAirlines", label: "Sixt Rent a Car (6)" },
  { name: "flightAirlines", label: "Airport Van Rental (12)" },
];

const carFeaturesOptions = [
  { name: "flightAirlines", label: "Air Conditioning (264)" },
  { name: "flightAirlines", label: "Auto Transmission (232)" },
];

export {
  categoriesFilter,
  amenitiesFilter,
  flightStopsFilter,
  flightAirlinesFilter,
  flightArrivalTimeFilter,
  flightSortOptions,
  vehicleTypeOptions,
  carCompaniesOptions,
  carFeaturesOptions,
};
