const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')


document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {

        let player1TopPosition = player1.getBoundingClientRect().top
        if (player1TopPosition > 0) {
            player1TopPosition = player1TopPosition - 10
            player1.style.top = `${player1TopPosition}px`
        }
    }
    if (e.key === 's') {

        let player1TopPosition = player1.getBoundingClientRect().top
        if (window.innerHeight - 100 > player1TopPosition) {
            player1TopPosition = player1TopPosition + 10
            player1.style.top = `${player1TopPosition}px`
        }
    }

    if (e.key === 'i') {

        let player2TopPosition = player2.getBoundingClientRect().top
        if (player2TopPosition > 0) {
            player2TopPosition = player2TopPosition - 10
            player2.style.top = `${player2TopPosition}px`
        }
    }


    if (e.key === 'k') {

        let player2TopPosition = player2.getBoundingClientRect().top
        if (window.innerHeight - 100 > player2TopPosition) {
            player2TopPosition = player2TopPosition + 10
            player2.style.top = `${player2TopPosition}px`
        }
    }
})