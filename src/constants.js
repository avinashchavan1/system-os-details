import platform from "platform";

console.log("Platform", platform);

export const items = [
  {
    key: "1",
    label: "Brief text",
    children: platform.toString(),
  },
  {
    key: "2",
    label: "OS",
    children: platform.os.toString(),
  },
  {
    key: "3",
    label: "Browser",
    children: platform.name,
  },
  {
    key: "4",
    label: "Version",
    children: platform.version,
  },
  {
    key: "5",
    label: "Description",
    children: platform.description,
  },
  {
    key: "6",
    label: "Layout",
    children: platform.layout,
  },
  {
    key: "7",
    label: "Product",
    children: platform.product,
  },
  {
    key: "8",
    label: "Manufacturer",
    children: platform.manufacturer,
  },
  {
    key: "9",
    label: "Kernal",
    children: platform.kernal,
  },
  {
    key: "10",
    label: "User agent",
    children: platform.ua,
  },
];
