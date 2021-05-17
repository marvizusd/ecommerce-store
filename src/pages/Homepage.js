import React from 'react'
import Header from '../components/Header'
import FeaturedSection from '../components/FeaturedSection'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Homepage () {
  return (
    <>
      <Header />
      <FeaturedSection />
      <ProductList />
      <Footer />
    </>
  );
}

export default Homepage;
