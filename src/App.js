import "./App.css";

import Form from "./Form.js";
import Weatherbox from "./Weatherbox.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <Form />
        <Weatherbox />
      </div>
      <Footer />
    </div>
  );
}
