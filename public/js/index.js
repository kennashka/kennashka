$(document).ready(function(){

	$("nav a").on("click", function(event){
		event.preventDefault();
		$("nav").addClass("fixed");
		id = ($(this).attr("href"));
		scrollVertical = $(id).offset().top;

		$("body, html").animate({scrollTop: scrollVertical});
	});

	$(document).on("scroll", function(){
		secondPage = $("nav li:nth-child(2) a").attr("href");

		if ( $("body").scrollTop() >= $("nav").height() )
		{
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});

});


var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Dummy data placeholder. Replace with array of actual data objects to come from Airtable
var data = [
{
  "project": "Calculator App",
  "stack": [ "express", "node"],
  "description": " Simple and cute html calculator with basic functions. ",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/calculator",
  "image": "img/calculator.png",
  "status": "Live" },

{
  "project": "Bitcoin Stock App",
  "stack": ["react", "express", "node"],
  "description": "React Next.js app to show current Bitcoin price ",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/bitcoin-stock-today",
  "image": "img/stock.png",
  "status": "In Development" },
{
  "project": "Quote App",
  "stack": [ "express", "node"],
  "description": "Node.js Quote app for displaying famous quotes with Javascript hover and click functionality.",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/node-quote-app",
  "image": "img/quote.png",
  "status": "Live" },

{
  "project": "Login-In App",
  "stack": ["express", "node"],
  "description": "Node.js App with User login and register functionality. ",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/pagesetup",
  "image": "img/login.png",
  "status": "Live" },
{
  "project": "Grade Average App",
  "stack": [ "express", "node"],
  "description": "A Node.js project that calculates the average of three grades. ",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/grade-average-calculation",
  "image": "img/grade.png",
  "status": "Live" },

{
  "project": "Python Word Counter",
  "stack": ["python"],
  "description": "This python program counts number of words in a text file. ",
  "website": "https://www.google.com",
  "github": "https://github.com/kennashka/pythonworkflow",
  "image": "img/counter.png",
  "status": "Live" }];



function Layout(props) {
  return (
    React.createElement("div", { className: "row" }, props.children));

}var

Card = function (_React$Component) {_inherits(Card, _React$Component);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: "render", value: function render()
    {
      var style = {
        img: {
          maxWidth: "100px",
        maxHeight:"100px" } };


      return (
        React.createElement("div", { className: "col m4" },
          React.createElement("div", { className: "card hoverable" },
            React.createElement("div", { className: "card-image waves-effect waves-block waves-light" },
              React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })),

            React.createElement("div", { className: "card-content" },
              React.createElement("div", null,
                React.createElement(StackIcons, { data: this.props.data.stack })),

              React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
                this.props.data.project,
                React.createElement("i", { className: "material-icons right" }, "more_vert")),

              React.createElement("div", null,
                React.createElement("span", null, React.createElement("a", { href: this.props.data.website }, "Website")),
                React.createElement("span", null, React.createElement("a", { className: "github", href: this.props.data.github }, "Github")))),


            React.createElement("div", { className: "card-reveal" },
              React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project, React.createElement("i", { className: "material-icons right" }, "close")),
              React.createElement("div", null, React.createElement("span", { className: "status" }, this.props.data.status)),
              React.createElement("p", null, this.props.data.description)))));




    } }]);return Card;}(React.Component);


// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  var array = props.data;
  var icons = array.map(function (item) {
    return (
      React.createElement("div", { key: item, className: "icon" },
        React.createElement("span", { className: item }, React.createElement("span", null))));


  });
  return (
    React.createElement("div", null, " ", icons, " "));

}

function Projects(props) {
  var projects = [];
  var data = props.data;
  data.forEach(function (item) {projects.push(React.createElement(Card, { data: item }));});
  return (
    React.createElement("div", null, projects));

}

ReactDOM.render(
React.createElement(Layout, { children: React.createElement(Projects, { data: data }) }),
document.getElementById('root'));
