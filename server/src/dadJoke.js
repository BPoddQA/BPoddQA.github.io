const url = "https://icanhazdadjoke.com//slack";

function joke() {
    let data = Promise.resolve(getJoke());
    data.then(a => {
        let joke = a["attachments"][0].text;
        document.getElementById("joke").innerHTML = joke;
    })
}


async function getJoke() {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
}