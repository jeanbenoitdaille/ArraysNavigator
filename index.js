function isTextLengthGreaterThan5(element) {
  return element.length > 5
}

let webBrowsers = ['Opera', 'Safari', 'Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Edge']

// 1)
// Display : false
// Not all elements have at least 5 characters (Edge has 4 characters)
console.log(webBrowsers.every(isTextLengthGreaterThan5))

// 2)
webBrowsers.sort()

// Display : ['Chrome', 'Edge', 'Firefox', 'Internet Explorer', 'Opera', 'Safari', 'Vivaldi']
console.log(webBrowsers)

// 3)
let webBrowsersFiltered = webBrowsers.filter(isTextLengthGreaterThan5)

// Display : ['Chrome', 'Firefox', 'Internet Explorer', 'Safari', 'Vivaldi']
console.log(webBrowsersFiltered)

// 4)
// Display : Chrome - Firefox - Internet Explorer - Safari - Vivaldi
console.log(webBrowsersFiltered.join(' - '))
