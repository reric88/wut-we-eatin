function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
        randomIndex = math.floor(math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    WheelEvent.play();
    const box = document.getElementById("box");
    const element = document.getElementById("main-box");
    let SelectItem = "";

    let mcds = shuffle([1890, 2250, 2610]);
    let hardees = shuffle([1850, 2210, 2570]);
    let cheddars = shuffle([1770, 2130, 2490]);
    let cheesecake = shuffle([1810, 2170, 2530]);
    let chicfila = shuffle([1750, 2110, 2470]);
    let where = shuffle([1750, 2110, 2470]);
    let  = shuffle([1750, 2110, 2470]);
    let  = shuffle([1750, 2110, 2470]);
    let  = shuffle([1750, 2110, 2470]);
    let  = shuffle([1750, 2110, 2470]);


}