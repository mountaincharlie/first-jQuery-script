/**
* --- Finding things using the console ---
* 
* > $(”a”);  [finds all anchor elements]
* > $(”.btn--blue”);  [finds all ‘btn--blue’ class elements]
* > $(”#logoNav”);  [finds the element with id = logoNav]
* > $(”p>a”);  [finds all anchor elements which are direct children of paragraphs]
* > $(”p a”);  [finds all anchor elements which are children of paragraphs]
* > $(”a:first”); [pseudo selector - finds first anchor element]
* > $(”:header”); [pseudo selector - finds all header elements]
* 
* --- Changing HTML and CSS ---
* 
* Using the .css() function:
* > $(“p”).css(“background-color”);  [checks background color]
* > $(“p”).css(“font-family”);  [checks font family]
* > $(“li”).css(“color”, “red”);  [changes the color]
* > $(“h2”).css(“text-decoration”, “underline”);  [changes the text-decoration to underline]
* > $(“ul”).css(“border”, “solid 1px #ccc”);  [adds/changes the border]
* > $(“ul”).addClass(“border”);  [adds the “border” class to an element(s)]
* 
* Using the .html() etc… function:
* > $(“#my_footer”).html();  [takes the html from id = my_footer]
* > $(“#my_footer”).html(“<h1>This is my fancy new content. Thanks to jQuery.</* h1>”);  [replaces the html from id = my_footer]
* > $(“#my_footer”).append(“<span>&copy; 2017.</span>”);  [adds the html into id = my_footer]
*
*/

// ensuring everything is rendered on the page first
$(document).ready(function(){
    // changes only made when page loaded
    $("h2").addClass("underline");
    $("ul").addClass("border");
})