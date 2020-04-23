var document, DOMParser;
var text = "<bookstore><book><author>George R. R. Martin</author><title>A Game of Thrones</title><year>1996</year></book>" + "<book><author>George R. R. Martin</author><title>A Clash of Kings</title><year>1998</year></book>" + "<book><author>George R. R. Martin</author><title>A Storm of Swords</title><year>2000</year></book>" + "<book><author>George R. R. Martin</author><title>A Feast for Crows</title><year>2005</year></book>" + "<book><author>George R. R. Martin</author><title>A Dance with Dragons</title><year>2011</year></book></bookstore>";
var listItemArray = document.getElementsByTagName("li");
listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + displayBookTitle(0);

listItemArray[1].innerHTML = listItemArray[1].innerHTML + " " + displayBookTitle(2);

var authorSpan = document.getElementById("authorName");
authorSpan.innerHTML = displayBookAuthor(0);

var tableGOT = document.getElementById("GOT");
displayTable(tableGOT);

readXML();

//Write your function declarations below this line
//example of a function getting and returning the book titles from the XML "text"
function displayBookTitle(n) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, "text/xml");
    var x = xmlDoc.getElementsByTagName("title");
    return x[n].childNodes[0].nodeValue;
}

function displayBookAuthor(n)
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, "text/xml");
    var x = xmlDoc.getElementsByTagName("author");
    return x[n].childNodes[0].nodeValue;
}

function displayTable(table)
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, "text/xml");
    var x = xmlDoc.getElementsByTagName("book");
    var tableText = "<table><tr><th>Author</th><th>Title</th><th>Year</th></tr>";
    for (var i = 0; i < x.length; i++)
        {
            tableText +=
                "<tr><td>" + x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
                "</td></tr>"
        }
    tableText += "</table>";
    table.innerHTML = tableText;
}

function readXML()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
            {
                showData(this);
            }
    };
    xhttp.open("GET","xml/HP.xml"m"true");
    xhttp.send();
}

function showData(xml)
{
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("book");
    var tableText = "<table><tr><th>Author</th><th>Title</th><th>Year</th></tr>";
    for (var i = 0; i < x.length; i++)
        {
            tableText +=
                "<tr><td>" + x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
                "</td></tr>"
        }
    tableText += "</table>";
    document.getElementById("HP").innerHTML = tableText;
}
