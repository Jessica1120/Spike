function Ref(name, ipr, jr, opr) {
    this.name = name;
    this.iprRate = ipr;
    this.jrRate = jr;
    this.oprRate = opr;
};

var Doc = new Ref('Doc', 3, 2, 1);
var Nutter = new Ref('Nutter', 1, 2, 3);
var Bex = new Ref('Bex', 1, 3, 2);


var refArray = [Doc, Nutter, Bex]; // add refs here from DOM

// console.log(refArray[0]);
// var test = refArray[0].jrRate;
var roster = [] // final roster

function findIpr() {
    for (let i=0; i <refArray.length; i++) {
        if (3 <= refArray[i].iprRate) {
            roster.push(refArray[i]);
            refArray.splice(i, 1);
        }
    } // console.log('remaining refArray', refArray);
    // console.log('the final roster', roster);
};

function findJr() {
    for (let i=0; i <refArray.length; i++) {
        if (3 <= refArray[i].jrRate) {
            roster.push(refArray[i]);
            refArray.splice(i, 1);
        }
    } console.log('remaining refArray', refArray);
    console.log('the final roster', roster);
};

findIpr();
findJr();

// console.log('this is Doc', Doc)
// console.log('this is Docs JRrate', test);


// console.log('this is the original refArray', refArray);
