window.addEventListener("DOMContentLoaded", function() {
    
    let field = document.getElementById("playing-field")
    let ball = document.getElementById("ball")
    let left = document.getElementById("left")
    let right = document.getElementById("right")
    let up = document.getElementById("up")
    let down = document.getElementById("down") 
    
    right.onclick = function () {
        ball.style.left = (parseInt(ball.style.left) || 0) + 15 + 'px' 
    }

    left.onclick = function () {
        ball.style.left = (parseInt(ball.style.left) || 0) - 15 + 'px' 
    }

    up.onclick = function () {
        ball.style.top = ((parseInt(ball.style.top) || 0) - 15) + 'px'
    }
    
    down.onclick = function() {
        ball.style.top = ((parseInt(ball.style.top) || 0) + 15) + 'px'
    }
    
});

