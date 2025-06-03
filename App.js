const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("div", { id: "grandchild1" }, "I'm an h1 tag"),
        React.createElement("div", { id: "grandchild2" }, "I'm an h1 tag")]
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
