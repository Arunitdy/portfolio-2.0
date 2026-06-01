
import { Profile } from "./All/Profile";
import { DeviceDetails } from "./FireStore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DeviceDetails /> {/* Run DeviceDetails when App loads */}
      <Profile />
    </div>
  );
}

export default App;
