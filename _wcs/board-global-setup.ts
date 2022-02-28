import "@blueprintjs/core/lib/css/blueprint.css";
const fontLoader = function () {
    const headID = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';

    //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
    headID.appendChild(link);

    link.href = 'http://fonts.googleapis.com/css?family=' + 'Lato';


}();


    