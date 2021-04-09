import "./App.css";
import Weatherbox from "./Weatherbox.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <Weatherbox />
      </div>
      <Footer />
    </div>
  );
}
