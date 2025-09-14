"use client";
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Features from '@/Components/Features';
import Plans from '@/Components/Plans';
import FoundersNote from '@/Components/FoundersNote';
import Provide from '@/Components/Provide';
import AccountProcess from '@/Components/AccountProcess';
import Comparison from '@/Components/Comparison';
import TradeJourney from '@/Components/TradeJourney';
import Performance from '@/Components/Performance';
import FAQHome from '@/Components/FAQHome';
import Payment from '@/Components/Payment';
import Testimonials from '@/Components/Testimonials';
import Footer from '@/Components/Footer';
import { usePathname } from 'next/navigation';








export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <Header />
      <Hero key={pathname} />
      <Features />
      <Plans />
      <FoundersNote />
      <Provide />
      <AccountProcess />
      <Comparison />
      <TradeJourney />
      <Performance />
      <FAQHome />
      <Payment />
      <Testimonials />
      <Footer />







      
     
    </div>
  );
}