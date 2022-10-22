var simpleModal = document.getElementById('simple-modal')
var modalBtn = document.getElementById('modal-btn')
var closeBtn = document.getElementsByClassName('close-btn')[0]


/*For opening the modal*/

modalBtn.addEventListener('click', openModal)

function openModal() {
    simpleModal.style.display = 'block'
}

/*For closing the modal*/

closeBtn.addEventListener('click', closeModal)

function closeModal() {
    simpleModal.style.display = 'none'
}

/*For closing the modal when you click anywhere outside it*/

window.addEventListener('click', clickOutside)

function clickOutside(e) {
    if (e.target == simpleModal) {
        simpleModal.style.display = 'none'
    }
    
}