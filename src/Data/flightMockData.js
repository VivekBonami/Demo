import DeltaFlightImg from "../Assets/img/deltaLogo.png";
import AeroflotImg from "../Assets/img/aeroflot.png";
const flightsMockData = [
  {
    flights: [
      {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      {
        image: AeroflotImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "18:00",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sun, 23 Nov",
          time: "11:20",
          location: "SVO",
        },
      },
    ],
    flightPlans: [
      {
        plan: "Economy",
        noFlightAvailable: false,
        saving: 15,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "Premium Economy",
        noFlightAvailable: true,
        saving: 0,
        publicPrice: 0,
        planPrice: 0,
        passangerCount: 0,
      },
      {
        plan: "Business Class",
        noFlightAvailable: false,
        saving: 30,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "First Class",
        noFlightAvailable: false,
        saving: 50,
        publicPrice: 5400.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
    ],
    flightDetailModal: {
      onwardFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["HEL, JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      onwardFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
      returningFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "08:30",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sat, 23 Nov",
          time: "16:20",
          location: "SVO",
        },
      },
      returnFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
    },
  },
  {
    flights: [
      {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      {
        image: AeroflotImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "18:00",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sun, 23 Nov",
          time: "11:20",
          location: "SVO",
        },
      },
    ],
    flightPlans: [
      {
        plan: "Economy",
        noFlightAvailable: false,
        saving: 15,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "Premium Economy",
        noFlightAvailable: true,
        saving: 0,
        publicPrice: 0,
        planPrice: 0,
        passangerCount: 0,
      },
      {
        plan: "Business Class",
        noFlightAvailable: false,
        saving: 30,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "First Class",
        noFlightAvailable: false,
        saving: 50,
        publicPrice: 5400.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
    ],
    flightDetailModal: {
      onwardFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["HEL, JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      onwardFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
      returningFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "08:30",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sat, 23 Nov",
          time: "16:20",
          location: "SVO",
        },
      },
      returnFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
    },
  },
  {
    flights: [
      {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      {
        image: AeroflotImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "18:00",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sun, 23 Nov",
          time: "11:20",
          location: "SVO",
        },
      },
    ],
    flightPlans: [
      {
        plan: "Economy",
        noFlightAvailable: false,
        saving: 15,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "Premium Economy",
        noFlightAvailable: true,
        saving: 0,
        publicPrice: 0,
        planPrice: 0,
        passangerCount: 0,
      },
      {
        plan: "Business Class",
        noFlightAvailable: false,
        saving: 30,
        publicPrice: 1100.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
      {
        plan: "First Class",
        noFlightAvailable: false,
        saving: 50,
        publicPrice: 5400.6,
        planPrice: 935.6,
        passangerCount: 1,
      },
    ],
    flightDetailModal: {
      onwardFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "14h 20m",
        stops: ["HEL, JFK"],
        flightStartInfo: {
          data: "Sat, 17 Nov",
          time: "06:50",
          location: "SVO",
        },
        flightEndInfo: {
          data: "Sat, 17 Nov",
          time: "14:00",
          location: "LAX",
        },
      },
      onwardFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
      returningFlightDetails: {
        image: DeltaFlightImg,
        totalTime: "11h 10m",
        stops: [],
        flightStartInfo: {
          data: "Sat, 23 Nov",
          time: "08:30",
          location: "LAX",
        },
        flightEndInfo: {
          data: "Sat, 23 Nov",
          time: "16:20",
          location: "SVO",
        },
      },
      returnFlightSubDetails: [
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY712",
          flightTime: "1h 45m",
          flightStartDetails: {
            time: "07:10",
            airport: "SVO Moscow Sheremetyevo",
          },
          flightEndDetails: {
            time: "11:40",
            airport: "HEL Helsinki Vantaa",
          },
          isFinalDestination: false,
          flightStoppage: "Layover HEL Helsinki Vantaa",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5719",
          flightTime: "2h 15m",
          flightStartDetails: {
            time: "12:40",
            airport: "HEL Helsinki Vantaa",
          },
          flightEndDetails: {
            time: "15:50",
            airport: "JFK New York John F. Kennedy",
          },
          isFinalDestination: false,
          flightStoppage: "Layover JFK New York John F. Kennedy",
          flightKeyDetails: {},
        },
        {
          flightImage: DeltaFlightImg,
          flightName: "Delta AY5",
          flightTime: "6h 33m",
          flightStartDetails: {
            time: "18:00",
            airport: "JFK New York John F. Kennedy",
          },
          flightEndDetails: {
            time: "21:33",
            airport: "LAX Los Angeles International",
          },
          isFinalDestination: true,
          flightKeyDetails: {
            arrivalDateTime: "Sat, 7 Mar 2020",
            totalJourneyTime: "18h 45m",
            baggageInfo: "Baggage Allowance",
          },
        },
      ],
    },
  },
];

export { flightsMockData };
