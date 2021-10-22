import React from 'react'
import './map.css'
function Map() {
    return (
        <div id="map">
            <div class="map_text_wrap">
              <div class="country_representation">
                <h1 class="country_representation_title">50</h1>
                <p class="country_representation_desc">
                  Стран <br />
                  представительств <br />
                  CHINT <br />
                </p>
              </div>
              <div class="chint_around_world">
                <h1 class="chint_around_world_title">CHINT в мире</h1>
                <p class="chint_around_world_desc">
                  Штат сотрудников корпорации насчитывает <br />
                  более 32 000 сотрудников по всему миру. <br />
                  Продукция CHINT представлена <br />
                  в более чем 100 странах по всему миру.
                </p>
              </div>
            </div>
            <div class="map_wrapper">
              <object
                class="map_svg"
                class="advantage_cards__icon2"
                data="./assets/icons/map.svg"
                type="image/svg+xml"
              > </object>
            </div>
          </div>
    )
}

export default Map
