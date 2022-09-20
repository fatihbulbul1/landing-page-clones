const btns = document.querySelectorAll('.feature-btn')
const booking = btns[0]
const searching = btns[1]
const sharing = btns[2]
const img = document.getElementById('changeimg')
const h = document.getElementById('changeheader')
const text = document.getElementById('changetext')

booking.addEventListener('click', () => {
    clearActive()
    booking.classList.add('active')
    img.src = '../images/illustration-features-tab-1.svg'
    h.innerHTML = 'Bookmark in one click'
    text.innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
})

searching.addEventListener('click', () => {
    clearActive()
    searching.classList.add('active')
    img.src = '../images/illustration-features-tab-2.svg'
    h.innerHTML = 'Intelligent search'
    text.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
})

sharing.addEventListener('click', () => {
    clearActive()
    sharing.classList.add('active')
    img.src = '../images/illustration-features-tab-3.svg'
    h.innerHTML = 'Share your bookmarks'
    text.innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
})

function clearActive() {
    let active = document.querySelector('.active')
    active.classList.remove('active')
}