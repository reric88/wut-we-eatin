function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    wheels.play();
    const box = document.getElementById("box");
    const element = document.getElementById("main-box");
    let SelectedItem = "";

    let cheesecake = shuffle([1890, 2250, 2610]);
    let chicfila = shuffle([1850, 2210, 2570]);
    let where = shuffle([1770, 2130, 2490]);
    let wendys = shuffle([1810, 2170, 2530]);
    let texas = shuffle([1750, 2110, 2470]);
    let sbarros = shuffle([1630, 1990, 2350]);
    let jimmy = shuffle([1570, 1930, 2290]);
    // let mcds = shuffle([, 2110, 2470]);
    // let hardees = shuffle([1750, 2110, 2470]);
    // let cheddars = shuffle([1750, 2110, 2470]);
    let results = shuffle([
        cheesecake[0],
        chicfila[0],
        where[0],
        wendys[0],
        texas[0],
        sbarros[0],
        jimmy[0]
    ]);

    if(cheesecake.includes(results[0])) SelectedItem = "I don't want Cheesecake Factory";
    if(chicfila.includes(results[0])) SelectedItem = "I don't want Chic-Fil-A";
    if(where.includes(results[0])) SelectedItem = "Anywhere is fine.";
    if(wendys.includes(results[0])) SelectedItem = "I don't want Wendy's";
    if(texas.includes(results[0])) SelectedItem = "I don't want Texas Roadhouse";
    if(sbarros.includes(results[0])) SelectedItem = "I don't want Sbarro's";
    if(jimmy.includes(results[0])) SelectedItem = "I don't want Jimmy John's";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
            element.classList.add("animate");


    }, 5000);

    setTimeout(function(){
            // alert
    })

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";

    }, 6000);

}



























