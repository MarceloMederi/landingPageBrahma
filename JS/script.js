var listaBrahmas = [
    'https://m.media-amazon.com/images/I/71YXsfNBcAL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/617y4cVEKnL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/71nJBS7Ds8L._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/71sjvVKmwUL._AC_UF1000,1000_QL80_.jpg',
    
];

var container = document.getElementById('imageContainer');

for (var i = 0; i < listaBrahmas.length; i++) {
    //document.write('<img src=' + listaBrahmas[i] + ' style="width: 150px; height: 400px; margin: 20px; border-radius: 20px;">');
    var imgElement = document.createElement('img');
    imgElement.src = listaBrahmas[i];
    container.appendChild(imgElement);
}