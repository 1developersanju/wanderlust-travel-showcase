import React from 'react';

const RoutesSEO = () => {
  return (
    <div className="hidden">
      <h2>Popular Taxi Routes from Coimbatore</h2>
      <ul>
        <li>Coimbatore to Pondicherry Taxi Service - Premium Cabs Available</li>
        <li>Coimbatore to Rameswaram Taxi - Comfortable Journey Guaranteed</li>
        <li>Coimbatore to Salem Taxi - Quick and Safe Travel</li>
        <li>Coimbatore to Tanjore Taxi - Reliable Cab Service</li>
        <li>Coimbatore to Thekkady Taxi - Tourist-Friendly Transport</li>
        <li>Coimbatore to Tiruchendur Taxi - Devotee Special Service</li>
        <li>Coimbatore to Tirupati Taxi - Pilgrimage Travel Expert</li>
        <li>Coimbatore to Trichy Airport Taxi - Punctual Airport Transfer</li>
        <li>Coimbatore to Trichy Taxi - Direct Cab Service</li>
        <li>Coimbatore to Trivandrum Taxi - Long Distance Expert</li>
        <li>Coimbatore to Vagamon Taxi - Hill Station Specialist</li>
        <li>Coimbatore to Valparai Taxi - Mountain Route Expert</li>
        <li>Coimbatore to Wayanad Taxi - Tourism Special Service</li>
        <li>Coimbatore to Yercaud Taxi - Weekend Gateway Transport</li>
      </ul>

      <h2>Our Premium Fleet</h2>
      <ul>
        <li>Airport Taxi - Punctual and Reliable Service</li>
        <li>Travel Agency - Complete Travel Solutions</li>
        <li>Luxury Tempo Traveller - Group Travel Comfort</li>
        <li>21 Seater A/C Coach - Large Group Transport</li>
        <li>Swaraj Mazda - Spacious and Comfortable</li>
        <li>Toyota Innova - Premium Family Travel</li>
        <li>Innova Crysta - Luxury Travel Experience</li>
        <li>Toyota Etios - Economic and Comfortable</li>
        <li>Swift Dzire - Efficient City Travel</li>
      </ul>

      <div itemScope itemType="https://schema.org/TaxiService">
        <h3 itemProp="name">Lee Travels Taxi Service</h3>
        <div itemProp="description">
          Premium taxi service in Coimbatore offering comfortable and reliable transportation to Pondicherry, Rameswaram, Salem, Tanjore, Thekkady, Tiruchendur, Tirupati, Trichy, Trivandrum, Vagamon, Valparai, Wayanad, and Yercaud. Fleet includes Innova Crysta, Toyota Etios, Swift Dzire, and Tempo Traveller.
        </div>
        <div itemProp="areaServed">Coimbatore and South India</div>
      </div>
    </div>
  );
};

export default RoutesSEO; 