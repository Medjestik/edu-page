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
          <li className="map__point map__point_size_medium map__point_city_peterburg"></li>
          <li className="map__point map__point_size_medium map__point_city_novosibirsk"></li>
          <li className="map__point map__point_size_medium map__point_city_novgorod"></li>
          <li className="map__point map__point_size_medium map__point_city_rostov"></li>
          <li className="map__point map__point_size_medium map__point_city_krasnoyarsk"></li>
          <li className="map__point map__point_size_medium map__point_city_chelyabinsk"></li>
          <li className="map__point map__point_size_medium map__point_city_ekaterinburg"></li>
          <li className="map__point map__point_size_small map__point_city_volgograd"></li>
          <li className="map__point map__point_size_medium map__point_city_kazan"></li>
          <li className="map__point map__point_size_small map__point_city_saratov"></li>
          <li className="map__point map__point_size_small map__point_city_samara"></li>
          <li className="map__point map__point_size_small map__point_city_petrozavodsk"></li>
          <li className="map__point map__point_size_medium map__point_city_habarovsk"></li>
          <li className="map__point map__point_size_small map__point_city_irkutsk"></li>
          <li className="map__point map__point_size_small map__point_city_belgorod"></li>
          <li className="map__point map__point_size_small map__point_city_smolensk"></li>
          <li className="map__point map__point_size_small map__point_city_norilsk"></li>
          <li className="map__point map__point_size_small map__point_city_omsk"></li>
          <li className="map__point map__point_size_small map__point_city_tyumen"></li>
          <li className="map__point map__point_size_small map__point_city_abakan"></li>
        </ul>
      </div>
    </section>
  );
}

export default Map;