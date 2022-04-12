import { Link } from "react-router-dom";

//info list
export const infoList = [
  {
    title: "Collision Damage Insurance",
    content:
      "Your credit card will be charged now for the collision damage coverage.",
  },
  {
    title: "Payment",
    content:
      "Payment for this reservation is due when the car is picked up and will be charged by Midway Car Rental.",
    content2:
      "Additional charges may apply at the counter if you pick up or drop off the car at a different date, time, or location than you requested for your reservation.",
  },
  {
    title: "Driver",
    content:
      "Only the driver will be able to pick up this rental car at the counter. An additional driver may be added at the counter for a fee payable directly to the rental car company.",
    content2: "Additional charges may apply for drivers under the age of 25.",
    content3:
      " Midway Car Rental will charge the driver at the rental counter for optional items added to the reservation, including any child seats or special requests.",
  },
  {
    title: "Identification",
    content:
      "The driver will be required to present a valid driver's license and a valid credit card in his/her name at the counter for the refundable security deposit. Rental car companies may have different requirements for customers who will only have a debit card at the time of pick-up, such as multiple forms of identifications, age restrictions, or proof of round-trip airline travel. For more specific information or to determine whether a debit card deposit is allowed, please review acceptable payment options in the partner's policy information. Pre-paid cards or cash will not be accepted for the security deposit.",
    content2:
      "If you are renting locally, please review the location specific rental policy for potential additional restrictions. Qualifying a local renter varies by rental company, but they will typically use the address on your license, or the issuing state of your license, to determine locality.",
  },
  {
    title: "Mileage",
    content:
      "Your car will be reserved for unlimited mileage, but some car companies have additional restrictions regarding mileage such as boundary and local renter restrictions.",
    content2:
      "Some states collect fees, or tolls, for access to certain roadways. Some tolls may be cashless and fees are paid via an electronic toll collection program. Midway Car Rental may have a specific policy regarding cashless tolls, or offer the option to participate in their electronic toll collection program. We recommend you speak to the counter agent upon arrival about whether this may affect you.",
  },
  {
    title: "Payment options",
    content: (
      <>
        Some locations also accept debit cards; however rental partners have
        different requirements for customers who will only have a debit card at
        the time of pickup. For more specific information please review
        <Link to="/home">Payment Method Options.</Link>
      </>
    ),
    content2: "International rentals may require additional insurance.",
    content3: (
      <>
        Please see location specific <Link to="/home">rental policy</Link> and
        <Link to="/home">rules information</Link>.
      </>
    ),
    content4: (
      <>
        You hereby agree to abide by our
        <Link to="/home">terms and conditions</Link> and
        <Link to="/home">privacy policy</Link>.
      </>
    ),
  },
];
