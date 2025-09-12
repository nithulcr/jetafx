import Header from '@/Components/Header';
import Hero4 from '@/Components/Hero4';
import EarnMore from '@/Components/EarnMore';
import GrowWithUs from '@/Components/GrowWithUs';
import FAQPartnership from '@/Components/FAQPartnership';

import ContactForm from '@/Components/ContactForm';
import Footer from '@/Components/Footer';



export default function AboutUs() {
  return (
    <div className='partnership-page'>
      <Header />
      <Hero4 />
      <EarnMore />
      <GrowWithUs />

      <ContactForm />
      <FAQPartnership />

      <Footer />
    </div>
  );
}