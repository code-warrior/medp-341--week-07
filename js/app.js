window.onload = () => {
    let cssWarning =
            `color: black;` +
            `background-color: #fabd32;` +
            `border-radius: 4px;` +
            `padding: 4px;`,
        cssError =
            `color: black;` +
            `background-color: #f53846;` +
            `border-radius: 4px;` +
            `padding: 4px;`;

    console.warn(`%c console.warn `, cssWarning);
    console.error(`%c console.error `, cssError);
};
