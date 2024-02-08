import { Badge, Card, Descriptions } from "antd";
import React from "react";
import { items } from "./constants";
import "./App.css";

const App = () => {
  const normalizeItems = items.map((item) =>
    item.children ? item : { ...item, children: "-" }
  );

  const validValues = normalizeItems.filter(
    (item) => item.children !== "-"
  ).length;

  return (
    <div className="App">
      <Badge count={validValues}>
        <Card title="Operating system and browser details" bordered="">
          <Descriptions title="Attributes" items={normalizeItems} />
        </Card>
      </Badge>
    </div>
  );
};

export default App;
