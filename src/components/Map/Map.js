import React from 'react';
import './Map.css';

function Map() {
  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">Huge Global Network of Fast VPN</h2>
        <p className="map__subtitle">See <span className="map__subtitle_font_weight">LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
        <ul className="map__img">
          <li className="map__point map__point_size_big map__point_city_moscow"></li>
          <li className="map__point map__point_size_medium map__point_city_rome"></li>
          <li className="map__point map__point_size_small map__point_city_barcelona"></li>
        </ul>
      </div>
    </section>
  );
}

export default Map;