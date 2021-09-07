import GlobalStyle from './globalStyle';
import ComingSoon from './pages/ComingSoon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-174571616-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

library.add(fab)

function App() {
  return (
    <>
      <GlobalStyle />
      <ComingSoon />
    </>
  );
}

export default App;
