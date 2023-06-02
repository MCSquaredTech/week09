
const button = document.querySelector('#addbook');
const table = document.querySelector('#mustread');

console.log(button);
button.addEventListener("click", () => {
    const parm = window.location.search.substring(1).split("&");

    console.log(parm);
    }, 
    false
);

