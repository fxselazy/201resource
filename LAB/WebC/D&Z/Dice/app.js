const Player = function () {
    this.id
    this.score
    this.getID = function () {
        return this.id
    }
    this.toString = function () {
        return "id : " + this.id
    }

}

const Dice = function () {
    this.faceValue
    this.roll = function () {
        this.faceValue = rollD(1, 6)
    }
    this.getFaceValue = function () {
        this.roll()
        return this.faceValue
    }
    this.toString = function () {
        return "face : " + this.faceValue
    }

}

const RollingDiceGame = function (p1, p2, totalRounds) {
    this.p1 = new Player()
    this.p2 = new Player()
    this.dice = new Dice()
    this.totalRounds = totalRounds
    this.drawRounds = 0
    this.p1WinRounds = 0
    this.p2WinRounds = 0
    this.start = function () {
        for (let index = 1; index <= totalRounds; index++) {
            this.p1.score = this.dice.getFaceValue()
            this.p2.score = this.dice.getFaceValue()
            document.write(`round ${index} |   p1 : ${this.p1.score} <br>`)
            document.write(`round ${index} |  p2 : ${this.p2.score} <br>`)
            if (this.p1.score > this.p2.score) {
                this.p1WinRounds = this.p1WinRounds + 1
                document.write("P1 WIN!!")
            }

            if (this.p1.score < this.p2.score) {
                this.p2WinRounds = this.p2WinRounds + 1
                document.write("P2 WIN!!")
            }

            if (this.p1.score === this.p2.score) {
                this.drawRounds = this.drawRounds + 1
                document.write("TIE!!")
            }
            document.write(' <hr>')

        }
        document.write("P1 : " + this.p1WinRounds + " | ")
        document.write("P2 : " + this.p2WinRounds + " | ")
        document.write("Tie : " + this.drawRounds + "<br>")

        if (this.p1WinRounds > this.p2WinRounds) {
            document.write("P1 WIN!!")
        } else if (this.p1WinRounds < this.p2WinRounds) {
            document.write("P2 WIN!!")
        } else if (this.p1WinRounds == this.p2WinRounds) {
            document.write("TIE!! both player are have same score")
        }

    }

    this.toString = function () {
        return null;
    }
}

function rollD(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function ranP() {
    return Math.floor(100000 + Math.random() * 900000)
}
var p1 = new Player(ranP())
var p2 = new Player(ranP())

var newGame = new RollingDiceGame(p1, p2, 6)
newGame.start()