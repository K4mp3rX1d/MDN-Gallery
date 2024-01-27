const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = [
        "Alternative Text",
        "Alternative Text",
        "Alternative Text",
        "Alternative Text",
        "Alternative Text",
    ];

/* Looping through images */
for (const src of fileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', "");
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
function adjustBrightness () {
    if (btn.textContent == "Darken") {
        overlay.setAttribute("style", "background-color: #00000080");
        btn.textContent = "Lighten";
    } else {
        overlay.setAttribute("style", "background-color: #00000000");
        btn.textContent = "Darken";
    }
}

btn.addEventListener('click', adjustBrightness);