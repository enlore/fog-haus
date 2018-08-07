var logo = window['logo-green']

window.onscroll = function (ev) {
    var bodyHeight = document.body.clientHeight
    var top = document.body.scrollTop

    var op = ((bodyHeight - (top * 2.6)) / bodyHeight).toFixed(3)

    logo.style.opacity = op
}
