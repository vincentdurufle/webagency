{
    function slider(arrows) {
        arrows.map(arrow => {
            arrow.addEventListener('click', function () {
                console.dir(backgroundImage);
                if (backgroundImage.src === "https://quizzical-easley-1712a9.netlify.com/ressources/img/slider/bg1.jpg") {
                    backgroundImage.src = "https://quizzical-easley-1712a9.netlify.com/ressources/img/slider/bg2.jpg";
                } else {
                    backgroundImage.src = "https://quizzical-easley-1712a9.netlify.com/ressources/img/slider/bg1.jpg";
                }
            })
        })
    }

    function button() {
        const btns = Array.from(document.querySelectorAll('.btn'));
        btns.map(btn => {
            btn.addEventListener('click', function () {
                document.querySelector('.btn-active').classList.remove('btn-active');
                this.classList.add('btn-active');
            })
        })
    }
}

const backgroundImage = document.querySelector('.background-image');
const arrows = Array.from(document.querySelectorAll('.arrow'));

slider(arrows);
button();