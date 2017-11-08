const url = "http://api.icndb.com/jokes/random";

function joke() {
    let data = Promise.resolve(getJoke());
    data.then(a => {
        let joke = a["value"].joke;
        //console.log(a["value"].joke);
        document.getElementById("joke").innerHTML = joke;
    })
}


async function getJoke() {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
}