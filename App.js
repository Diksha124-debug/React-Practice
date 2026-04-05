

const element = React.createElement(
    "div",
    {"id":"parent"},
    [React.createElement(
        "div",
        {"id":"child1"},
    [React.createElement(
        "h1",
        {},
        "I am h1 tag of child1"),React.createElement("h2",{},"I am h2 tag of child1")]
    ), React.createElement(
        "div",
        { "id": "child2" },
        [React.createElement(
            "h1",
            {},
            "I am h1 tag of child2"), React.createElement("h2", {}, "I am h2 tag of child2")]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("nav"));
root.render(element);
console.log(element)