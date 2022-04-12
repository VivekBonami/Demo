import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "../Component/HeaderNavbar";
import Footer from "./Footer";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import { widgetsTab } from "../Stores/Constants/siteConstants/tabsConstants";
import LogoWhite from "../Component/FormComponent/LogoWhite";
import logo from "../Assets/img/logo.png";

// Tab Component above table
export default function TabLayout() {
  const [activeTab, setactiveTab] = useState(0);
  const handleActiveTab = (id) => {
    setactiveTab(id);
  };
  // for focusing active tab
  const activeNav = (id) => {
    if (id === activeTab) {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <div className="landingPage landingPageWrap widget-page-wrap">
      <HeaderNavbar logowhite={logo} />
      <section className="mainContent">
        <div className="container">
          <div className="centerCnt">
          
          <div class="centerAlign">
                <Link to={"/"} className="linkStyle">
          <LogoWhite src={logo} />
        </Link>

          </div>
            <h2 className="titleStyle">Hi, where are you going Sven?</h2>
            <TabsComponent className="boxStyle">
              <TabList key={1} className="tabsStyle tabsBtn">
                {widgetsTab.map((item, index) => {
                  return (
                    <Tab
                      key={index}
                      className={activeNav(item.id)}
                      onClick={() => handleActiveTab(item.id)}
                    >
                      {/* keep the value against index to dynamically update style applied to the particular tab */}
                      <Link to="#" key={index}>
                        <span className={item.tabIcon}>
                          <span className="path1"></span>
                        </span>
                        {item.title}
                      </Link>
                    </Tab>
                  );
                })}
              </TabList>
              {/* will need to render different table pages based on selected tab */}
              {widgetsTab.map(({ body }, i) => (
                <div className="tabContentWrap">
                  <TabPanel key={i}> {body} </TabPanel>
                </div>
              ))}
            </TabsComponent>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}