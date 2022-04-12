import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "./FormComponent/LogoWhite";
import logo from "../Assets/img/logo2.png";
import Icon from "./FormComponent/Icon";
import Icomoon from "../Component/FormComponent/Icomoon";
import { Field, Form, Formik } from "formik";
import Button from "./FormComponent/Button";
import { CURRENCY } from "../Data/static.service";

function HeaderNavbar({ logowhite }) {
  // Toggle button dropdown

  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currency, setCurrency] = useState(CURRENCY.find(curr => curr.isoCode === (JSON.parse(localStorage.getItem('currency')).isoCode)))

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const CurrencyForm = () => {
    const initialValues = {
      currency: (JSON.parse(localStorage.getItem('currency'))) ? (JSON.parse(localStorage.getItem('currency')).isoCode) : "USD"
    }
    const handleSubmit = (values) => {
      setCurrency(values.currency)
      let currency = CURRENCY.find(curr => curr.isoCode === values.currency)
      localStorage.setItem('currency', JSON.stringify(currency))
      setIsDropdownOpen(false)
    }
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="currency-form">
          <label className="currency-form-label">Select Currency</label>
          <Field className="currency-form-select" as="select" name="currency">
            {CURRENCY.map((curr)=> (
              <option selected={curr.isoCode === currency.isoCode ? "selected" : null} key={curr.isoCode} value={curr.isoCode}>{curr.name} {curr.isoCode} ({curr.symbol})</option>
            ))}
          </Field>
          <button className="currency-form-btn" type="submit">Change</button>
        </Form>
      </Formik>
    )
  }


  return (
    <header className={!isActive ? "header" : "header openMainDropdown"}>
      <div className="container dflex">
        <Link to={"/home"} className="logoWrap">
          <LogoWhite src={logowhite ? logowhite : logo} />
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/bookings-page">Bookings</Link>
            </li>
            <li>
              <Link to="/home">Resource Center</Link>
            </li>
            <li>
              <Link to="/affiliate-dashboard">Rewards</Link>
            </li>
            <li className="dropdownMenu">
                <Link onClick={()=> setIsDropdownOpen(true)}  to='#'>
                  <Icomoon className="icon-globe" /> English (US) – {JSON.parse(localStorage.getItem('currency')).isoCode}
                  <Icon iconName="fa fa-angle-down" />
                </Link>
                {isDropdownOpen && <CurrencyForm />}
            </li>
            <li className="dropdownMenu">
              <Link to="/home">
                <Icomoon className="icon-account-circle" /> Hi, Sven
                <Icon iconName="fa fa-angle-down" />
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleToggle} to="home" className="menuBtn">
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default HeaderNavbar;