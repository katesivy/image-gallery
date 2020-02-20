const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');

/* Looping through images */
/*loop to add pictures*/

function loopImages() {
    let pics = ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic4.jpg", "/images/pic5.jpg"]
    for (let i = 0; i < pics.length; i++) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', pics[i]);
        thumbBar.appendChild(newImage);
        console.log(pics[i]);
        newImage.onclick = function() {
            displayedImage.setAttribute('src', pics[i]);
        }
    }
}
loopImages();

/* Wiring up the Darken/Lighten button */

const btn = document.querySelector('button');

    
function colorChange() {
    const overlay = document.querySelector('.overlay'); 
    let x = btn.getAttribute('class');
        if (x != 'dark') {
            btn.setAttribute('class', 'dark');
            btn.textContent = "Darken";
            overlay.style.backgroundColor = 'rgba (0, 0, 0, 0.5)';
        } else if (x = 'dark') {
            btn.setAttribute('class', 'light');
            btn.textContent = "Lighten";
            overlay.style.backgroundColor = 'rbga (0, 0, 0, 0)';
        }
} 
btn.onclick = colorChange;
    





