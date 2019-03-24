var count = 4
// Now create and append to iDiv
main = document.getElementsById("main")

var newElement = document.createElement('div');
var innerDiv = document.createElement('div');
var f = document.createElement('iframe');
f.src = "www.facebook.com";
f.class = "site"
newElement.id = ("mydiv" + count)
innerDiv.id = newElement.id + "header"


f.append(innerDiv)
innerDiv.append(newElement)

// The variable iDiv is still good... Just append to it.

newElement.appendChild(main);

