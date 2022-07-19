const scrollButton1 = document.getElementById("scrollDownToSkills");
const scrollButton2 = document.getElementById("scrollDownToContacts");
const headerBottomPart = document.querySelector(".headerBtm");
const containerBottomPart = document.querySelector(".containerBtm");
const hideContactsButton = document.getElementById("hideContacts");
const footer = document.querySelector("footer");

const scrollDown = () => {
    window.scrollBy(0, window.innerHeight+1)
}

headerBottomPart.addEventListener('click', (e) => {scrollDown()});
containerBottomPart.addEventListener('click', (e) => {scrollDown()});

hideContactsButton.addEventListener('click', (e) => {
    window.scrollBy(0, -footer.scrollHeight-1)
})