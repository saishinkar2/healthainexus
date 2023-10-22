const sw = document.querySelector("[sw]")
const card = document.getElementsByClassName("card")
const navbar = document.getElementsByClassName("container")
const nav = document.getElementsByTagName("a")
const div = document.getElementsByTagName("div")

sw.addEventListener('click', () => {
        if (sw.checked) {
        document.body.style.background = "#2c3e50";

        // Change the background and text color of the body
        document.body.style.backgroundColor = "#2c3e50";
        document.body.style.color = "white";

        for (let item of card) {
            item.style.backgroundColor = "#2c3e50";
            item.style.color = "white";
        }

        for (let item of navbar) {
            item.style.backgroundColor = "white"; // Set the background color to white
            item.style.color = "#2c3e50"; // Set the text color to the body color
        }

        for (let item of nav) {

            item.style.color = "white";
        }
        for (let item of div) {
            item.style.backgroundColor = "#2c3e50";
            item.style.color = "white";
        }
    }else{
        document.body.style.background = "#2c3e50";

// Change the background and text color of the body
document.body.style.backgroundColor = "#FFFFFF";
document.body.style.color = "black";

for (let item of card) {
    item.style.backgroundColor = "#FFFFFF";
    item.style.color = "black";
}

for (let item of navbar) {
    item.style.backgroundColor = "black"; // Set the background color to white
    item.style.color = "#FFFFFF"; // Set the text color to the body color
}

for (let item of nav) {

    item.style.color = "black";
}
for (let item of div) {
    item.style.backgroundColor = "#FFFFFF";
    item.style.color = "black";
}
    }
});