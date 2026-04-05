// template_hc1tqts
//Alq2DnFYwtgZXCCDL

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 === 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;

    if (contrastToggle) {
        document.body.classList.add('dark-theme');
    }
    else {
        document.body.classList.remove('dark-theme');
    }
}


function contact(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    success.classList.remove('modal__overlay--visible');

    loading.classList.add('modal__overlay--visible');

    emailjs
        .sendForm(
            "service_9l7h8qj",
            "template_hc1tqts",
            event.target,
            "Alq2DnFYwtgZXCCDL"
        )
        .then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList.add("modal__overlay--visible");
        })
        .catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert("The email service is temporarily unavailable. Please contact me directly at laniecerose7@gmail.com");
        });
}

function resetModalState() {
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    if (loading) {
        loading.classList.remove('modal__overlay--visible');
    }

    if (success) {
        success.classList.remove('modal__overlay--visible');
    }
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        resetModalState();
        return;
    }
    isModalOpen = true;
    resetModalState();
    document.body.classList.add("modal--open");
}
