import HotelImg from "../Assets/img/img.png";
import Util1 from "../Assets/img/mobile-view1.png";
import Util2 from "../Assets/img/mobile-view2.png";
import Util3 from "../Assets/img/mobile-view3.png";
import Util4 from "../Assets/img/mobile-view4.png";
import Util5 from "../Assets/img/mobile-view5.png";
import Util6 from "../Assets/img/mobile-view6.png";
import Util7 from "../Assets/img/mobile-view7.png";
import Util8 from "../Assets/img/mobile-view8.png";
import Util9 from "../Assets/img/mobile-view9.png";
import StarImg from "../Assets/img/yellow-star.png";
import Theme1 from "../Assets/img/hotel/business-icon.png";
import Theme2 from "../Assets/img/hotel/love-icon.png";
import Theme3 from "../Assets/img/hotel/diamond-icon.png";
import HotelImgg from "../Assets/img/hotel-detail-thumb1.jpg";
import SwimmingImg from "../Assets/img/pool.png";
import RestaurantImg from "../Assets/img/restaurant.png";
import AccessibleImg from "../Assets/img/AccessibleRooms.png";
import WifiImg from "../Assets/img/wifi.png";
import LaundryImg from "../Assets/img/laundry.png";
import PetImg from "../Assets/img/petsAllowed.png";
import RoomImg from "../Assets/img/detail-page-image.jpg";
import BedImg from "../Assets/img/bed.png";
import Accessbility from "../Assets/img/accessibility.png";
import Reception from "../Assets/img/reception.png";
import Services from "../Assets/img/services.png";
import WorkBag from "../Assets/img/work-bag.png";
import Couple from "../Assets/img/couple.png";
import Family from "../Assets/img/family.png";
import Single from "../Assets/img/single.png";
import AusFlag from "../Assets/img/aus.png";
import HotelImgMain from "../Assets/img/hotel-detail-image.jpg";

const hotelCardData = [
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: true,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: false,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: true,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: false,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: true,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: false,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: true,
  },
  {
    name: "Sunset West Hotel, SureStay Collection By Best Western",
    address: "23627 Calabasas Road, Calabasas, US",
    image: HotelImg,
    savings: "54",
    rating: "83",
    utilities: [
      "Airport Transportation",
      "Fitness Facility",
      "Indoor Pool",
      "Parking Garage",
    ],
    utilitiesImg: [
      Util1,
      Util2,
      Util3,
      Util4,
      Util5,
      Util6,
      Util7,
      Util8,
      Util9,
    ],
    starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
    comparePrice: [
      { siteName: "Expedia", sitePrice: 260.26 },
      { siteName: "Hotels.com", sitePrice: 268.26 },
      { siteName: "CheapTickets", sitePrice: 260.26 },
      { siteName: "Booking.com", sitePrice: 272.26 },
      { siteName: "Travelocity", sitePrice: 273.26 },
      { siteName: "Orbitz", sitePrice: 276.26 },
      { siteName: "Hotwire", sitePrice: 276.8 },
      { siteName: "Priceline", sitePrice: 278.8 },
    ],
    totalPrice: { publicPrice: 200.09, from: 770.94 },
    nightPrice: { publicPrice: 570.09, from: 770.94 },
    priceDetails: {
      total: 770.94,
      savings: 285.15,
      perNight: 50,
      subPrice: [
        { title: "1 Room x 1 Night", price: 620.92 },
        { title: "Taxes and Fees", price: 100 },
        { title: "Resort Fee", price: 50 },
      ],
    },
    savingPrice: 285.15,
    isMember: false,
  },
];

const hotelDetailMockData = {
  starImgs: [StarImg, StarImg, StarImg, StarImg, StarImg],
  totalPrice: { publicPrice: 200.09, from: 770.94 },
  nightPrice: { publicPrice: 570.09, from: 770.94 },
  priceDetails: {
    total: 770.94,
    savings: 285.15,
    perNight: 50,
    subPrice: [
      { title: "1 Room x 1 Night", price: 620.92 },
      { title: "Taxes and Fees", price: 100 },
      { title: "Resort Fee", price: 50 },
    ],
  },
  savingPrice: 285.15,
  isDetailPage: true,
  name: "Crowne Plaza Redondo Beach and Marina",
  address: " 1910 Ocean Way, Los Angeles, CA, USA",
  contactNo: "1-800-238-0767",
  checkIn: "3:00 PM",
  checkOut: "12:00 PM",
  themes: [
    { image: Theme1, title: "Business" },
    { image: Theme2, title: "Romantic" },
    { image: Theme3, title: "Luxury" },
  ],
  hotelImages: [
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgg,
    HotelImgMain,
  ],
  overview: {
    amenities: [
      { image: SwimmingImg, name: "Swimming Pool" },
      { image: RestaurantImg, name: "Restaurant" },
      { image: AccessibleImg, name: "Accessible Rooms" },
      { image: WifiImg, name: "Free Internet Access" },
      { image: LaundryImg, name: "Laundry" },
      { image: PetImg, name: "Pets Allowed" },
    ],
    reviews: {
      score: {
        points: 92,
        label: "Exeptional",
      },
      reviewCount: "1,628",
      reviewTypeData: [
        { type: "Location", score: 95 },
        { type: "Service", score: 98 },
        { type: "Cleaness", score: 85 },
        { type: "Wellness Area", score: 85 },
      ],
    },
  },
  rooms: [
    {
      roomDetails: {
        roomType: "Standard Deluxe Room",
        roomImage: RoomImg,
        roomSize: "351",
        roomFacilities: [
          { image: BedImg, label: "Double Premier King Bed" },
          { image: BedImg, label: "Twin Bed" },
          { image: WifiImg, label: "Free Wi-Fi" },
          { image: BedImg, label: "Fridge" },
        ],
        occupies: 2,
      },
      roomPricedDetails: [
        {
          savings: 25,
          availableRooms: 5,
          publicPrice: 1056.09,
          from: 770.94,
          priceDetails: {
            total: 770.94,
            savings: 285.15,
            perNight: 50,
            subPrice: [
              { title: "1 Room x 1 Night", price: 620.92 },
              { title: "Taxes and Fees", price: 100 },
              { title: "Resort Fee", price: 50 },
            ],
          },
          savingPrice: 285.15,
        },
        {
          savings: 25,
          availableRooms: 5,
          publicPrice: 1056.09,
          from: 770.94,
          priceDetails: {
            total: 770.94,
            savings: 285.15,
            perNight: 50,
            subPrice: [
              { title: "1 Room x 1 Night", price: 620.92 },
              { title: "Taxes and Fees", price: 100 },
              { title: "Resort Fee", price: 50 },
            ],
          },
          savingPrice: 285.15,
        },
      ],
    },
    {
      roomDetails: {
        roomType: "Standard Deluxe Room",
        roomImage: RoomImg,
        roomSize: "351",
        roomFacilities: [
          { image: BedImg, label: "Double Premier King Bed" },
          { image: BedImg, label: "Twin Bed" },
          { image: WifiImg, label: "Free Wi-Fi" },
          { image: BedImg, label: "Fridge" },
        ],
        occupies: 2,
      },
      roomPricedDetails: [
        {
          savings: 25,
          availableRooms: 5,
          publicPrice: 1056.09,
          from: 770.94,
          priceDetails: {
            total: 770.94,
            savings: 285.15,
            perNight: 50,
            subPrice: [
              { title: "1 Room x 1 Night", price: 620.92 },
              { title: "Taxes and Fees", price: 100 },
              { title: "Resort Fee", price: 50 },
            ],
          },
          savingPrice: 285.15,
        },
        {
          savings: 25,
          availableRooms: 5,
          publicPrice: 1056.09,
          from: 770.94,
          priceDetails: {
            total: 770.94,
            savings: 285.15,
            perNight: 50,
            subPrice: [
              { title: "1 Room x 1 Night", price: 620.92 },
              { title: "Taxes and Fees", price: 100 },
              { title: "Resort Fee", price: 50 },
            ],
          },
          savingPrice: 285.15,
        },
      ],
    },
  ],
  amenities: [
    {
      title: "Accessibility",
      icon: Accessbility,
      data: [
        "Elevator",
        "Wheelchair Accessible Path Of…",
        "Accessible Bathroom",
        "In-Room Accessibility",
        "Stair-free path to entrance",
      ],
    },
    {
      title: "Pool And Wellness",
      icon: SwimmingImg,
      data: [
        "Indoor Pool",
        "Outdoor Pool",
        "Hair Salon",
        "Hot Tube",
        "Fitness center",
      ],
    },
    {
      title: "Reception Services",
      icon: Reception,
      data: [
        "ATM",
        "24-Hour Front Desk",
        "Luggage Storage",
        "Free newspapers in lobby",
        "Gift shop/newsstand",
      ],
    },
    {
      title: "Services & Extras",
      icon: Services,
      data: [
        "24-hour front desk",
        "Concierge services",
        "Daily housekeeping",
        "Dry cleaning service",
        "Laundry facilities",
      ],
    },
  ],
  propertiesDetails: {
    data: `<p>
    A stay at The Westin Bonaventure Hotel and Suites, Los Angeles
    places you in the heart of Los Angeles, a 3-minute drive from Walt
    Disney Concert Hall and 5 minutes from Microsoft Theater. This
    4-star hotel is 1.7 mi (2.8 km) from L.A. Live and 1.8 mi (2.8 km)
    from Los Angeles Convention Center.
  </p>
  <p>
    Make yourself at home in one of the 1358 air-conditioned rooms
    featuring refrigerators. Your pillowtop bed comes with down
    comforters and premium bedding. Cable programming and video-game
    consoles are provided for your entertainment, while complimentary
    wireless Internet access keeps you connected. Private bathrooms with
    shower/tub combinations feature designer toiletries and hair dryers.
  </p>`,
  },
  reviews: {
    overAllReview: {
      overAllScore: 92,
      lable: "Exeptional",
      reviewCount: "1,628",
    },
    reviewTypeData: [
      { type: "Location", score: 95 },
      { type: "Service", score: 98 },
      { type: "Cleaness", score: 85 },
      { type: "Wellness Area", score: 85 },
    ],
    typesOfTravlers: [
      { logo: WorkBag, label: "Business", percentage: 34 },
      { logo: Couple, label: "Couples", percentage: 50 },
      { logo: Family, label: "Family", percentage: 18 },
      { logo: Single, label: "Solo", percentage: 12 },
    ],
    userReviews: [
      {
        score: 100,
        label: "Exeptional",
        date: "Jan 20, 2021",
        title: "Amazing staff and great location",
        comment: `I did not stay in the hotel.
         I had to cancel due to China Virus related issues.
          But the staff were very friendly and accommodating. 
          Very helpful and understanding. Rooms are clean and very comfortable. 
          The hotel decor was gorgeous. I would recommend staying there in the future.`,
        countryIcon: AusFlag,
        userName: "Christopher",
      },
      {
        score: 100,
        label: "Exeptional",
        date: "Jan 20, 2021",
        title: "Amazing staff and great location",
        comment: `I did not stay in the hotel.
         I had to cancel due to China Virus related issues.
          But the staff were very friendly and accommodating. 
          Very helpful and understanding. Rooms are clean and very comfortable.
           The hotel decor was gorgeous. I would recommend staying there in the future.`,
        countryIcon: AusFlag,
        userName: "Christopher",
      },
      {
        score: 100,
        label: "Exeptional",
        date: "Jan 20, 2021",
        title: "Amazing staff and great location",
        comment: `I did not stay in the hotel. 
        I had to cancel due to China Virus related issues. 
        But the staff were very friendly and accommodating.
         Very helpful and understanding. Rooms are clean and very comfortable. 
         The hotel decor was gorgeous. I would recommend staying there in the future.`,
        countryIcon: AusFlag,
        userName: "Christopher",
      },
      {
        score: 100,
        label: "Exeptional",
        date: "Jan 20, 2021",
        title: "Amazing staff and great location",
        comment: `I did not stay in the hotel.
         I had to cancel due to China Virus related issues.
          But the staff were very friendly and accommodating. Very helpful and understanding.
           Rooms are clean and very comfortable. The hotel decor was gorgeous. 
           I would recommend staying there in the future.`,
        countryIcon: AusFlag,
        userName: "Christopher",
      },
    ],
  },
};

export { hotelCardData, hotelDetailMockData };
