//5 by 5 grid of cells, so 25

class Cell {
    constructor(ID, neighbours, livingNeighbours, alive, aliveNext) {
        this._ID = ID;
        this._noOfNeighbours = neighbours;
        this._livingNeighbours = livingNeighbours
        this._alive = alive;
        this._linkedCells = {};
        this._neighbours = {};
        this._aliveNext = aliveNext;
    }

    get ID() {
        return this._ID;
    }

    get noOfNeighbours() {
        return this._noOfNeighbours;
    }

    get alive() {
        return this._alive;
    }

    get linkedCells() {
        return this._linkedCells;
    }

    get aliveNext() {
        return this._aliveNext;
    }

    set alive(value) {
        this._alive = value;
    }

    backToZeroList() {
        return Zero;
    }

    linkCell(ID, Cell) {
        this._linkedCells[ID] = Cell;
    }

    linkedCells() {
        return this._linkedCells;
    }

    linkedCellsIndex(ID) {
        return this._linkedCells[ID];
    }

    alive() {
        return this._alive;
    }

    noOfNeighbours() {
        return this._noOfNeighbours;
    }

    noOfNeighboursLength() {
        return this._noOfNeighbours.length;
    }

}

//list of cells here
const Zero = new Cell(0, 0, 0, false, false);

const One = new Cell(1, 3, 0, false, false);
const Two = new Cell(2, 5, 0, true, false);
const Three = new Cell(3, 5, 0, false, false);
const Four = new Cell(4, 5, 0, true, false);
const Five = new Cell(5, 3, 0, true, false);

const Six = new Cell(6, 5, 0, false, false);
const Seven = new Cell(7, 8, 0, false, false);
const Eight = new Cell(8, 8, 0, true, false);
const Nine = new Cell(9, 8, 0, true, false);
const Ten = new Cell(10, 5, 0, false, false);

const Eleven = new Cell(11, 5, 0, false, false);
const Twelve = new Cell(12, 8, 0, true, false);
const Thirteen = new Cell(13, 8, 0, false, false);
const Fourteen = new Cell(14, 8, 0, true, false);
const Fifteen = new Cell(15, 5, 0, false, false);

const Sixteen = new Cell(16, 5, 0, false, false);
const Seventeen = new Cell(17, 8, 0, true, false);
const Eighteen = new Cell(18, 8, 0, true, false);
const Nineteen = new Cell(19, 8, 0, true, false);
const Twenty = new Cell(20, 5, 0, false, false);

const TwentyOne = new Cell(21, 3, 0, true, false);
const TwentyTwo = new Cell(22, 5, 0, false, false);
const TwentyThree = new Cell(23, 5, 0, true, false);
const TwentyFour = new Cell(24, 5, 0, false, false);
const TwentyFive = new Cell(25, 3, 0, false, false);

//linking cells
Zero.linkCell(1, One)
Zero.linkCell(2, Two)
Zero.linkCell(3, Three)
Zero.linkCell(4, Four)
Zero.linkCell(5, Five)

Zero.linkCell(6, Six)
Zero.linkCell(7, Seven)
Zero.linkCell(8, Eight)
Zero.linkCell(9, Nine)
Zero.linkCell(10, Ten)

Zero.linkCell(11, Eleven)
Zero.linkCell(12, Twelve)
Zero.linkCell(13, Thirteen)
Zero.linkCell(14, Fourteen)
Zero.linkCell(15, Fifteen)

Zero.linkCell(16, Sixteen)
Zero.linkCell(17, Seventeen)
Zero.linkCell(18, Eighteen)
Zero.linkCell(19, Nineteen)
Zero.linkCell(20, Twenty)

Zero.linkCell(21, TwentyOne)
Zero.linkCell(22, TwentyTwo)
Zero.linkCell(23, TwentyThree)
Zero.linkCell(24, TwentyFour)
Zero.linkCell(25, TwentyFive)

One.linkCell(2, Two)
One.linkCell(6, Six)
One.linkCell(7, Seven)

Two.linkCell(1, One)
Two.linkCell(3, Three)
Two.linkCell(6, Six)
Two.linkCell(7, Seven)
Two.linkCell(8, Eight)

Three.linkCell(2, Two)
Three.linkCell(4, Four)
Three.linkCell(7, Seven)
Three.linkCell(8, Eight)
Three.linkCell(9, Nine)

Four.linkCell(3, Three)
Four.linkCell(5, Five)
Four.linkCell(8, Eight)
Four.linkCell(9, Nine)
Four.linkCell(10, Ten)

Five.linkCell(4, Four)
Five.linkCell(9, Nine)
Five.linkCell(10, Ten)

Six.linkCell(1, One)
Six.linkCell(2, Two)
Six.linkCell(7, Seven)
Six.linkCell(11, Eleven)
Six.linkCell(12, Twelve)

Seven.linkCell(1, One)
Seven.linkCell(2, Two)
Seven.linkCell(3, Three)
Seven.linkCell(6, Six)
Seven.linkCell(8, Eight)
Seven.linkCell(11, Eleven)
Seven.linkCell(12, Twelve)
Seven.linkCell(13, Thirteen)

Eight.linkCell(2, Two)
Eight.linkCell(3, Three)
Eight.linkCell(4, Four)
Eight.linkCell(7, Seven)
Eight.linkCell(9, Nine)
Eight.linkCell(12, Twelve)
Eight.linkCell(13, Thirteen)
Eight.linkCell(14, Fourteen)

Nine.linkCell(3, Three)
Nine.linkCell(4, Four)
Nine.linkCell(5, Five)
Nine.linkCell(8, Eight)
Nine.linkCell(10, Ten)
Nine.linkCell(13, Thirteen)
Nine.linkCell(14, Fourteen)
Nine.linkCell(15, Fifteen)

Ten.linkCell(4, Four)
Ten.linkCell(5, Five)
Ten.linkCell(9, Nine)
Ten.linkCell(14, Fourteen)
Ten.linkCell(15, Fifteen)

Eleven.linkCell(6, Six)
Eleven.linkCell(7, Seven)
Eleven.linkCell(12, Twelve)
Eleven.linkCell(16, Sixteen)
Eleven.linkCell(17, Seventeen)

Twelve.linkCell(6, Six)
Twelve.linkCell(7, Seven)
Twelve.linkCell(8, Eight)
Twelve.linkCell(11, Eleven)
Twelve.linkCell(13, Thirteen)
Twelve.linkCell(16, Sixteen)
Twelve.linkCell(17, Seventeen)
Twelve.linkCell(18, Eighteen)

Thirteen.linkCell(7, Seven)
Thirteen.linkCell(8, Eight)
Thirteen.linkCell(9, Nine)
Thirteen.linkCell(12, Twelve)
Thirteen.linkCell(14, Fourteen)
Thirteen.linkCell(17, Seventeen)
Thirteen.linkCell(18, Eighteen)
Thirteen.linkCell(19, Nineteen)

Fourteen.linkCell(8, Eight)
Fourteen.linkCell(9, Nine)
Fourteen.linkCell(10, Ten)
Fourteen.linkCell(13, Thirteen)
Fourteen.linkCell(15, Fifteen)
Fourteen.linkCell(18, Eighteen)
Fourteen.linkCell(19, Nineteen)
Fourteen.linkCell(20, Twenty)

Fifteen.linkCell(9, Nine)
Fifteen.linkCell(10, Ten)
Fifteen.linkCell(14, Fourteen)
Fifteen.linkCell(19, Nineteen)
Fifteen.linkCell(20, Twenty)

Sixteen.linkCell(11, Eleven)
Sixteen.linkCell(12, Twelve)
Sixteen.linkCell(17, Seventeen)
Sixteen.linkCell(21, TwentyOne)
Sixteen.linkCell(22, TwentyTwo)

Seventeen.linkCell(11, Eleven)
Seventeen.linkCell(12, Twelve)
Seventeen.linkCell(13, Thirteen)
Seventeen.linkCell(16, Sixteen)
Seventeen.linkCell(18, Eighteen)
Seventeen.linkCell(21, TwentyOne)
Seventeen.linkCell(22, TwentyTwo)
Seventeen.linkCell(23, TwentyThree)

Eighteen.linkCell(12, Twelve)
Eighteen.linkCell(13, Thirteen)
Eighteen.linkCell(14, Fourteen)
Eighteen.linkCell(17, Seventeen)
Eighteen.linkCell(19, Nineteen)
Eighteen.linkCell(22, TwentyTwo)
Eighteen.linkCell(23, TwentyThree)
Eighteen.linkCell(24, TwentyFour)

Nineteen.linkCell(13, Thirteen)
Nineteen.linkCell(14, Fourteen)
Nineteen.linkCell(15, Fifteen)
Nineteen.linkCell(18, Eighteen)
Nineteen.linkCell(20, Twenty)
Nineteen.linkCell(23, TwentyThree)
Nineteen.linkCell(24, TwentyFour)
Nineteen.linkCell(25, TwentyFive)

Twenty.linkCell(14, Fourteen)
Twenty.linkCell(15, Fifteen)
Twenty.linkCell(19, Nineteen)
Twenty.linkCell(24, TwentyFour)
Twenty.linkCell(25, TwentyFive)

TwentyOne.linkCell(16, Sixteen)
TwentyOne.linkCell(17, Seventeen)
TwentyOne.linkCell(22, TwentyTwo)

TwentyTwo.linkCell(16, Sixteen)
TwentyTwo.linkCell(17, Seventeen)
TwentyTwo.linkCell(18, Eighteen)
TwentyTwo.linkCell(21, TwentyOne)
TwentyTwo.linkCell(23, TwentyThree)

TwentyThree.linkCell(17, Seventeen)
TwentyThree.linkCell(18, Eighteen)
TwentyThree.linkCell(19, Nineteen)
TwentyThree.linkCell(22, TwentyTwo)
TwentyThree.linkCell(24, TwentyFour)

TwentyFour.linkCell(18, Eighteen)
TwentyFour.linkCell(19, Nineteen)
TwentyFour.linkCell(20, Twenty)
TwentyFour.linkCell(23, TwentyThree)
TwentyFour.linkCell(25, TwentyFive)

TwentyFive.linkCell(19, Nineteen)
TwentyFive.linkCell(20, Twenty)
TwentyFive.linkCell(24, TwentyFour)

cellsArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, 
Twenty, TwentyOne, TwentyTwo, TwentyThree, TwentyFour, TwentyFive]

arrayOfIDs = [];
livingNeighbours = [];

function verifyLife(neighbours, alive) {
    if ((alive === true && neighbours > 1 && neighbours < 4)
        || (alive === false && neighbours === 3)) {
        return true;
    }
    return false;
}

function runGame() {
    document.getElementById("runGame").disabled=true;
    deadOrAlive();
    updateGrid();
    setTimeout(function(){ document.getElementById("runGame").disabled=false; }, 500);
    
}

function deadOrAlive() {
    i3 = 1;
    while (i3 < 25) {
        currentCell = Zero._linkedCells[i3];
        alive = currentCell.alive();
        neighbours = numberLivingNeighbours(currentCell);
        currentCell._aliveNext = verifyLife(neighbours, alive);
        livingNeighbours = [];
        i3++
    }
    i3 = 1;
    while (i3 < 25) {
        currentCell = Zero._linkedCells[i3];
        currentCell._alive = currentCell._aliveNext
        i3++
    }
}

function numberLivingNeighbours(currentCell) {
    i = 0;
    livingNeighbours = [];
    arrayOfIDs = Object.keys(currentCell._linkedCells)  //set array to linked cells
    while (i < currentCell._noOfNeighbours) {       //while i less than number of neighbours
        neighbourBeingTested = arrayOfIDs[i];       //neighbour being tested is ith entry in array
        neighbourBeingTestedObject = currentCell._linkedCells[neighbourBeingTested];
        //get object for that neighbour
        if (neighbourBeingTestedObject.alive()) {   //if it's alive
            livingNeighbours.push(neighbourBeingTested) //add that neighbour's ID to livingNeighbours
        }
        i += 1  //i + 1
    }
    return (livingNeighbours.length);       //return length of livingNeighbours
}

function updateGrid() {
    i = 1;
    while (i < 26) {
        currentCell = Zero;
        currentCellIterate = currentCell._linkedCells[i];
        currentCellIterateStringID = String([i]);
        if (currentCellIterate._alive) {
            document.getElementById(currentCellIterateStringID).style.backgroundColor = "green";
        }
        else if (currentCellIterate._alive === false) {
            document.getElementById(currentCellIterateStringID).style.backgroundColor = "black";
        }
        i += 1
    }
}
/*
function testFunction() {
    i = 2;    
        currentCell = Zero;
        currentCellIterate = currentCell._linkedCells[i];
        currentCellIterateStringID = String([i]);
        console.log("Cell number: ", currentCellIterate._ID);
        console.log("Cell alive?", currentCellIterate._alive);
        console.log("Cell gonna be alive?", currentCellIterate._aliveNext);
        if (currentCellIterate.aliveNext) {
            currentCellIterate._alive = true;
        } else { currentCellIterate._alive === false; }
        console.log("Cell alive?", currentCellIterate._alive);
}

testFunction();
*/
function toggleLife(currentCell) {
    if (currentCell._alive === true) {
        currentCell._alive = false;
    }
    else { currentCell._alive = true; }
    updateGrid();
}

function displayGame() {
    document.getElementById("hiding-game").style.display = "block";
    document.getElementById("display-game").style.display = "none";
}
