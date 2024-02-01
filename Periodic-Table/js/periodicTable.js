function showPopup(title, text) {
    const mainPopup = document.querySelector('.main-popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupText = document.getElementById('popupText');

        popupTitle.innerText = title;
        popupText.innerText = text;

        mainPopup.style.display = 'flex';
        }

function closePopup() {
    const mainPopup = document.querySelector('.main-popup');
        mainPopup.style.display = 'none';
    }

function stopPropagation(event) {
    event.stopPropagation();
    }

