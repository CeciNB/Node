console.log('welcome')
// JQuery
let x = 0
$(document).on('click', () => {
    $('#pizza-oven').append('<span>o<span>')
    x++
    if (x >= 5) {
        console.log(x)
    }
    console.log('pizza o added using jquery')
})
