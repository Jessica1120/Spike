console.log('here')
var myApp = angular.module( 'myApp', [] );

myApp.controller('RefController', function () {
    var vm = this;
console.log('in rc')  

// function Ref(name, ipr, jr, opr) {
//     this.name = name;
//     this.iprRate = ipr;
//     this.jrRate = jr;
//     this.oprRate = opr;
// };

// var Doc = new Ref('Doc', 3, 2, 1);
// var Nutter = new Ref('Nutter', 1, 2, 3);
// var Bex = new Ref('Bex', 1, 3, 2);


var refArray = []; // add refs here from DOM

// console.log(refArray[0]);
// var test = refArray[0].jrRate;
var roster = []; // final roster

vm.addRef = function() {
    var newRef = {
        name: vm.nameIn,
        iprRate: vm.iprIn,
        jrRate: vm.jrIn,
        oprRate: vm.oprIn,
    }
    refArray.push(newRef);  
    console.log(refArray);
};

// vm.findRoster = function () { //generates roster


    
//     function findIpr() {
//         for (let i=0; i <refArray.length; i++) {
//             if (3 <= refArray[i].iprRate) {
//                 roster.push(refArray[i]);
//                 refArray.splice(i, 1);
//             }
//         } 
//     };

//     function findJr() {
//         for (let i=0; i <refArray.length; i++) {
//             if (3 <= refArray[i].jrRate) {
//                 roster.push(refArray[i]);
//                 refArray.splice(i, 1);
//             }
//         } 
//     };
//     findIpr();
//     findJr();
//     console.log('remaining refArray', refArray);
//     console.log('the final roster', roster);
// }

// findRoster();

});