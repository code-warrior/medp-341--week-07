window.onload = () => {
    // let body = document.getElementsByTagName();

    let firstDiv = document.getElementById(`first-div`);
    let secondDiv = document.querySelector(`[data-second-div]`);
    let thirdDiv = document.getElementsByClassName(`third-div`)[0];

    console.log(firstDiv.textContent);
    console.log(secondDiv.textContent);
    console.log(thirdDiv.textContent);
};
