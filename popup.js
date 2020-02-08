let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.background = data.color;
    changeColor.setAttribute('value', data.color);
});