window.onload = () => {
    let body = document.querySelector(`body`),
        div = document.querySelector(`[data-hover-area]`),
        button = document.querySelector(`main > button`);

    div.addEventListener(`mouseover`, () => {
        div.classList.add(`background-color--antiquewhite`);
        div.classList.remove(`background-color--darkseagreen`);
    }, false);

    div.addEventListener(`mouseout`, () => {
        div.classList.add(`background-color--darkseagreen`);
        div.classList.remove(`background-color--antiquewhite`);
    }, false);

    button.addEventListener(`click`, () => {
        if (body.classList.contains(`background-color--cornsilk`)) {
            body.classList.remove(`background-color--cornsilk`)
        } else {
            body.classList.add(`background-color--cornsilk`)
        }

    }, false);
};
