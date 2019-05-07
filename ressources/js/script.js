{
    function slider() {
        const slider = document.querySelector('.slider');
        const [first, second] = [`url("ressources/img/slider/bg1.jpg")`, `url("ressources/img/slider/bg2.jpg")`];

        slider.style.backgroundImage = first;
        setInterval(() => {
            if (slider.style.backgroundImage === first) {
                slider.style.backgroundImage = second;
            } else {
                slider.style.backgroundImage = first;
            }
        }, 10000);
    }

    function button() {
        const btns = Array.from(document.querySelectorAll('.btn'));
        btns.map(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.btn-active').classList.remove('btn-active');
                this.classList.add('btn-active');
            })
        })

    }
}

slider();
button();