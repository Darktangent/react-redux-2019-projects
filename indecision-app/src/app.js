
console.log(`script.js is running`);
let app={
    title:'Indecison App',
    subtitle:"Let the app decide what you should do next!",
    options:['One', 'Two']
}

var template= (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0?"Here are your options":"No Options"}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
    
</div>
)



// var template = React.createElement("p", null, "This is jsx from script.js");

ReactDOM.render(template, document.getElementById("app"));