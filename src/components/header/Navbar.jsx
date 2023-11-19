import React, { useState, useEffect } from 'react';
import { Navbar, Button } from 'flowbite-react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Hero from '../../pages/hero/Hero';
import Pricing from '../../pages/pricing/Pricing';

export function DefaultNavbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log("Click");
    navigate('/' + path);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fluid rounded className={`bg-transparent font-sans sticky top-0 ${isScrolled ? 'backdrop-blur z-20' : ''}`}>
      <Navbar.Brand href="https://flowbite-react.com" className="ml-9">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://www.flowbite-react.com/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-inter text-emerald-500 font-semibold">
          Vocatel
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 mr-9">
        <Button onClick={() => handleClick(localStorage.getItem("ACCESS_TOKEN") ? 'home' : 'login')} gradientDuoTone="greenToBlue" pill>
          <p className="text-base text-white">
            {localStorage.getItem("ACCESS_TOKEN") ? 'Get in app' : 'Get started'}
          </p>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Link to="/" className="text-base text-slate-600">
          Home
        </Link>
        <Link to="/pricing" className="text-base text-slate-600">
          Pricing
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DefaultNavbar;