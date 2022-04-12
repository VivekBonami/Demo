import FlightTab from "../../../Views/Widgets/FlightTab";
import HotelTab from "../../../Views/Widgets/HotelTab";
// tab list
export const widgetsTab = [
  {
    id: 0,
    tabKey: "hotels",
    title: "Hotels",
    tabIcon: "icon-apartments",
    body: <HotelTab />,
  },
  {
    id: 1,
    tabKey: "flights",
    title: "Flights",
    tabIcon: "icon-flight",
    body: <FlightTab />,
  },
  {
    id: 2,
    tabKey: "cars",
    title: "Cars",
    tabIcon: "icon-shape",
    body: "",
  },
  {
    id: 3,
    tabKey: "condos",
    title: "Homes",
    tabIcon: "icon-building",
    body: "",
  },
];
