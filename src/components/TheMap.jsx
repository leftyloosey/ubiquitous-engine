import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const HOBART = 'AIzaSyC0zTkwcKzG9r-sF6Xwtj3-WDgwSNDwdZ4'

const lat = 40.713177524497084
const lng = -111.88789891349388

const TheMap = () => (
  <APIProvider apiKey={HOBART}>
    <Map
      className='mt-12 rounded h-96 w-full'
      zoom={16}
      center={{ lat, lng }}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      <Marker position={{ lat, lng }} />
    </Map>
  </APIProvider>
)

export default TheMap
