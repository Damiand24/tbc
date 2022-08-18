const furnitureButton = document.querySelector('#furniture'),
gardenButton = document.querySelector('#garden'),
smallJobsButton = document.querySelector('#smallJobs'),
treehousesButton = document.querySelector('#treehouses'),
oakFramingButton = document.querySelector('#framing'),
butterflyJointsButton = document.querySelector('#butterflyJoints'),
workshopButton = document.querySelector('#workshop'),
backgroundImage = document.querySelector('#gallery-background'),
currentButton = document.querySelector('.current'),
button = document.querySelectorAll('.gallery-btn'),
galleryMain = document.querySelector('.gallery-main'),
galleryImage = document.querySelectorAll('.gallery-img'),
hamburger = document.querySelector('.hamburger-box'),
hamburgerToggle = document.querySelector('.hamburger-toggle'),
menuMobile = document.querySelectorAll('.menu-mobile');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    hamburgerToggle.classList.toggle('hamburger-inner-close');
})

menuMobile.forEach(menu => {
    menu.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        hamburgerToggle.classList.toggle('hamburger-inner-close');
    })
}) 

const addClassCurrent = (buttonId) => {
    button.forEach(button => {
        button.classList.remove('current')
    })
    document.getElementById(buttonId).classList.add('current');
};

const clearGallery = () => {
    galleryMain.innerHTML = '';
};

const swapImages = (categoryName, categoryLength) => {
    clearGallery();
    backgroundImage.setAttribute('class', `gallery-background-${categoryName}`)
    for(i = 1; i <= categoryLength; i++) {
        galleryMain.innerHTML += 
        `<img class="gallery-img" src="images-compressed/${categoryName}${i}.jpg" alt="gallery image">`;   
    }
};

oakFramingButton.addEventListener('click', function() {
    swapImages('framing', 13);
    addClassCurrent('framing');
});

furnitureButton.addEventListener('click', function() {
    swapImages('furniture', 10);
    addClassCurrent('furniture');
});

gardenButton.addEventListener('click', function() {
    swapImages('garden', 10);
    addClassCurrent('garden');
});

smallJobsButton.addEventListener('click', function() {
    swapImages('small-jobs', 11);
    addClassCurrent('smallJobs');
});

treehousesButton.addEventListener('click', function() {
    swapImages('treehouses', 4);
    addClassCurrent('treehouses');
});

workshopButton.addEventListener('click', function() {
    swapImages('workshop', 10);
    addClassCurrent('workshop');
});

document.querySelectorAll('.homeLink').forEach((link) => {
    link.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    })
})

document.querySelectorAll('.galleryLink').forEach((link) => {
    link.addEventListener('click', () => {
        window.scroll({
            top: document.querySelector('.gallery-title').offsetTop - 120,
            behavior: 'smooth'
        });
    })
})

document.querySelectorAll('.contactLink').forEach((link) => {
    link.addEventListener('click', () => {
        window.scroll({
            top: document.querySelector('.contact').offsetTop -120,
            behavior: 'smooth'
        });
    })
})