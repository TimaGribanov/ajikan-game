let songsData;

function getData() {
    $.getJSON('https://ajikan-game-node.herokuapp.com/songs', function(data) {
    songsData = data;

    return songsData;
});
}

console.log(getData());