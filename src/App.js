import Getir from "components/getir/Getir";
import GetirBuyuk from "components/getirBuyuk/GetirBuyuk";
import GetirCarsi from "components/getirCarsi/GetirCarsi";
import GetirSu from "components/getirSu/GetirSu";
import GetirYemek from "components/getirYemek/GetirYemek";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Getir />} />
          <Route path="/yemek" element={<GetirYemek />} />
          <Route path="/buyuk" element={<GetirBuyuk />} />
          <Route path="/su" element={<GetirSu />} />
          <Route path="/carsi" element={<GetirCarsi />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
