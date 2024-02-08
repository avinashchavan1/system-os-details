import "./App.css";
import platform from "platform";

function App() {
  console.log("Platform", platform);
  return (
    <div className="App">
      <h1>Your OS Details </h1>
      <h3>{"Tostring: " + platform.toString()}</h3>
      <h3>{"OS: " + platform.os.toString()}</h3>
      <h3>{"Browser: " + platform.name}</h3>
      <h3>{"Version: " + platform.version}</h3>
      <h3>{"Description: " + platform.description}</h3>
      <h3>{"Layout: " + platform.layout}</h3>
      <h3>{"Product: " + platform.product}</h3>
      <h3>{"Manufacturer: " + platform.manufacturer}</h3>
      <h3>{"Kernal: " + platform.kernal}</h3>
      <h3>{"ua: " + platform.ua}</h3>
    </div>
  );
}

export default App;
