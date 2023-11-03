import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Mapa = () => {
  return (
    <YMaps>
    <div>
 
      <Map  defaultState={{ center: [54.383292, 48.587857], zoom: 9 }} />
    </div>
  </YMaps>
  )
}

export default Mapa
