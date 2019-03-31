'use strict';

console.log('script.js is running');
var app = {
    title: 'Indecison App',
    subtitle: "Let the app decide what you should do next!",
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

// var template = React.createElement("p", null, "This is jsx from script.js");

ReactDOM.render(template, document.getElementById("app"));
