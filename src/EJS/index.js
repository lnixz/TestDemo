const ejs = require('ejs');
const people = ['geddy', 'neil', 'alex'];
const html = ejs.render('hello <%= name%>~ <%= people.join(", "); %>', { people: people, name:'zs' });
console.log(html);