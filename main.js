window.addEventListener("DOMContentLoaded", function() {

    game = {
        ball: null,
        left: null,
        right: null,
        init: function () {
            this.ball = document.getElementById("ball")
            this.left = document.getElementById("left")
            this.right = document.getElementById("right")
            this.up = document.getElementById("up")
            this.down = document.getElementById("down") 
            let that = this
            this.right.addEventListener('click', function(e) {
                that.moveRight()
            })
            this.left.addEventListener('click', function(e) {
                that.moveLeft()
            })
            this.up.addEventListener('click', function(e) {
                that.moveUp()
            })
            this.down.addEventListener('click', function(e) {
                that.moveDown()
            })
            document.addEventListener("keydown", function(e) {
                e.preventDefault()
                if (e.key == "ArrowDown") {              
                    that.moveDown()
                } else if (e.key == "ArrowUp") {              
                    that.moveUp()
                } else if (e.key == "ArrowLeft"){              
                    that.moveLeft()
                } else if (e.key == "ArrowRight") {
                    that.moveRight()
                }
            })
        },
        moveRight: function () {
            this.ball.style.left = (parseInt(this.ball.style.left) || 0) + 15 + 'px'
        },
        moveLeft: function() {
            this.ball.style.left = (parseInt(this.ball.style.left) || 0) - 15 + 'px' 
        },
        moveUp: function() {
            this.ball.style.top = ((parseInt(this.ball.style.top) || 0) - 15) + 'px'
        },
        moveDown: function() {
            this.ball.style.top = ((parseInt(this.ball.style.top) || 0) + 15) + 'px'
        }
    }

    game.init()
    
});

