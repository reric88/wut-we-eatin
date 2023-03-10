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

    let cheddars = shuffle([1890, 2250, 2610]);

    // let wendys = shuffle([1750, 2110, 2470]);
    let where2 = shuffle([1750, 2110, 2470]);

    let where = shuffle([1770, 2130, 2490]);

    let texas = shuffle([1850, 2210, 2570]);

    let chicfila = shuffle([1810, 2170, 2530]);

    let jimmy = shuffle([1630, 1990, 2350]);

    let hardees = shuffle([1570, 1930, 2290]);
//
    // let sbarros = shuffle([1500, 1860, 2220]);
    // let mcds = shuffle([1530, 1890, 2660]);
    // let cheese = shuffle([1600, 1960, 2320]);
//
    let results = shuffle([
        cheddars[0],
        chicfila[0],
        where[0],
        // wendys[0],
        where2[0],
        texas[0],
        jimmy[0],
        hardees[0],
        // mcds[0],
        // sbarros[0],
        // cheese[0]
    ]);

    if(cheddars.includes(results[0])) SelectedItem = "Cheddars?";
    if(chicfila.includes(results[0])) SelectedItem = "Chic-Fil-A?";
    if(where.includes(results[0])) SelectedItem = "Anywhere is fine.";
    // if(wendys.includes(results[0])) SelectedItem = "Wendy's?";
    if(where2.includes(results[0])) SelectedItem = "I don't care where we go.";
    if(texas.includes(results[0])) SelectedItem = "Texas Roadhouse?";
    if(jimmy.includes(results[0])) SelectedItem = "Jimmy John's?";
    if(hardees.includes(results[0])) SelectedItem = "Hardee's?";
    // if(mcds.includes(results[0])) SelectedItem = "McDonald's?";
    // if(sbarros.includes(results[0])) SelectedItem = "Sbarro's?";
    // if(cheese.includes(results[0])) SelectedItem = "Cheesecake Factory?";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
            element.classList.add("animate");


    }, 5000);

    setTimeout(function(){
        if(where.includes(results[0])) //SelectedItem = "Anywhere is fine."; 
        {
            aww.play();
            Swal.fire(
                SelectedItem,
                'You choose.'
            )
        } else if(where2.includes(results[0])) //SelectedItem = "Anywhere is fine."; 
        {
            aww.play();
            Swal.fire(
                SelectedItem,
                'I want you to pick.'
            )
        } else {
        aww.play();
        Swal.fire(
                SelectedItem,
                'I dont really want ' + SelectedItem + '...'
            
        )
    }
    }, 5500)


//     if (SelectedItem == where){

//     setTimeout(function(){
//         aww.play();
//         Swal.fire(
//             'Anywhere is fine.',
//             'You choose.'
//           )
//     }, 5500)
// } else {
    
//     setTimeout(function(){
//         aww.play();
//         Swal.fire(    
//         SelectedItem,
//         'I dont really want ' + SelectedItem + '...'
//           )
//     }, 5500)
    
    
//     setTimeout(function(){
//         aww.play();
//         Swal.fire(    
//         SelectedItem,
//         'I dont really want ' + SelectedItem + '...'
//           )
//     }, 5500)
// }

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";

    }, 6000);

}



























