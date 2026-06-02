const films = {
1: "https://drive.google.com/file/d/1LtLruJMzO_DU8dbwopqjO4IgVhKcE41F/view?usp=drive_link",

2: "https://drive.google.com/file/d/1yg5lTeSLx4h_1-xwWDw4TMIRSyyE3kMF/view?usp=sharing",

3: "https://drive.google.com/file/d/1CSXmlnbQLzW8m9Tv0SQT0ORvwuk8773Q/view?usp=sharing",

4: "https://drive.google.com/file/d/1MSMLgmCMrTQQ6cbksg0bIzLlaZ8dpVJh/view?usp=sharing"

};

function openFilm(id){
window.open(films[id], "_blank");
}

const observer = new IntersectionObserver(entries => {


entries.forEach(entry => {

    if(entry.isIntersecting){
        entry.target.classList.add("show");
    }

});

},{
threshold: 0.15
});

document.querySelectorAll(".film-card").forEach(card => {
observer.observe(card);
});
