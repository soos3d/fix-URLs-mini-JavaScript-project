
// prompt the user to insert a URL
var link = prompt('Insert a URL, if it does not have https in front it will be fixed automatically:')

// check the first 4 characters, if there is no http log a warning in the console
if (link.substr(0, 4) == 'http') {
    console.log('your URL is good')
    console.log(link)
} else {
    console.warn('you URL misses http')

    // add https:// to the "broken" URL
    link = 'https://' + link
}

// take the span html element and add the fixed link to it. The anchor tag allows it to be clickable!
var spanNode = document.getElementById('link')
spanNode.innerHTML = "<a href=" + link + ">" + link + "</a>"
