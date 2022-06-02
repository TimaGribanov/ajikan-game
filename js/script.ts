function getData() {
    const tempData = $.getJSON('https://ajikan-game-node.herokuapp.com/songs', function(data) {
        return data;
    });

    return tempData;
}

class Group {
    constructor(id: number, number: number, list: object) {
        this.id = id;
        this.number = number;
        this.list = list;
    }
}

getData().then(result => {
    const songsData = result;
    console.log(songsData);
});