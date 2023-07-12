import React from 'react';
import { Navbar, Paragraph, ThirdJumbotron } from '../components';
import livedata from '../assets/livedata.png';

export default function () {
  return (
    <>
      <Navbar />
      <section className='px-4 bg-gray text-white'>
        <Paragraph
          title='UrbanDrive'
          text='Software Development'
          className='py-24'
        />
        <img src={livedata} className='mb-6' />
        <p className='mb-6'>
          UrbanDrive is a company that offers seamless driving hire services in
          Lagos and other Nigerian cities. The company aims to provide
          affordable and accessible transportation services to everyone while
          also empowering drivers who may not have the resources to own their
          own cars to earn income by partnering with the company to use their
          vehicles for hire.
        </p>
        <p className='mb-6'>
          UrbanDrive's services include instant driver hire services starting at
          just ₦ 4,000, where customers can book a professional driver to take
          them to their destination using their own car. The company provides
          verified drivers who are trustworthy, responsible and professional,
          and customers can book their driver through the UrbanDrive app, which
          is available for download on iOS and Android devices. UrbanDrive also
          offers competitive salaries and bonus packages to drivers who partner
          with them.
        </p>
        <p className='mb-6'>
          The company's mission is to make transportation easy and stress-free
          while generating employment for providers and convenience for users.
        </p>
        <p className='text-orange'>
          <a href='urbandrive.com'>urbandrive.com</a> <br />
          <a href='playstore.com/urbandriveapp'>playstore.com/urbandriveapp</a>
        </p>
        <ThirdJumbotron cn='text-white' />
      </section>
    </>
  );
}
