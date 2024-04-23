const users=[
    {
        name:"Khue",
        quote:"You are the shuckiest shuck faced shuck in the world!",
        image:"https://randomuser.me/api/portraits/men/41.jpg",
        color:"#76C4EA"
    },
    {
        name:"Vu",
        quote:"I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
        image:"https://randomuser.me/api/portraits/women/50.jpg",
        color:"#836FFF"
    },
    {
        name:"Quan",
        quote:"Flirtation doesn't have to go somewhere; it certainly doesn't need to end up in bed. I like to think of it as a little friendlier than a handshake, a little less intimate than a kiss. It's a way of saying hi, you look great, have a wonderful day. A tasteful flirtation, played out people who understand the rules, leave everyone feeling good and can perk up the bluest mood.",
        image:"https://randomuser.me/api/portraits/women/22.jpg",
        color:"#FFE4E1"
    },
    {
        name:"Dung",
        quote:"Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
        image:"https://randomuser.me/api/portraits/women/76.jpg",
        color:"#EEE685"
    },
    {
        name:"Thai",
        quote:"A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be.",
        image:"https://randomuser.me/api/portraits/men/17.jpg",
        color:"#54FF9F"
    }
]

const testimonialsContainer = document.querySelector(".testimonials-container")
const authors = testimonialsContainer.querySelectorAll(".author")
authors.forEach(function (author, i) {
    author.addEventListener("click", function () {
        authors.forEach(function (author) {
            author.classList.remove("selected")
        });
        author.classList.add("selected")
        let selectedUser = users[i]
        testimonialsContainer.style.background = selectedUser.color
        document.querySelector(".text").textContent = selectedUser.quote
        document.querySelector(".name").textContent = selectedUser.name
    });
});