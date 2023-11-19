'use client';
import { Button } from 'flowbite-react';
import Navbar from './components/header/Navbar'
import Hero from './pages/hero/Hero'
import { Alert } from 'flowbite-react';
import RatingComponent from './components/rating/Rating';
import Pricing from './pages/pricing/Pricing'
import { RouterProvider, Routes } from "react-router-dom";
import './App.css'
import router from './Router';
export default function MyPage() {
  return (
    <div className="parent w-screen h-max">
      <RouterProvider router={router} />
    </div>
  );
}