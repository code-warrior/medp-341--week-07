window.onload = () => {
    let firstDiv = document.getElementById(`first-div`),
        secondDiv = document.querySelector(`[data-second-div]`),
        thirdDiv = document.getElementsByClassName(`third-div`)[0];

    console.log(firstDiv.textContent);
    console.log(secondDiv.textContent);
    console.log(thirdDiv.textContent);
};
