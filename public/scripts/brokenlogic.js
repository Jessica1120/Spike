vm.findHr = function() {
    for (let i=0; i <vm.refArray.length; i++) {
       var multiple = []
       if (3 <= vm.refArray[i].hrRate) {
           multiple.push(vm.refArray[i])
           //console.log('multiple 1:', multiple)
               if (1 < multiple.length) {
               var assigned = multiple[Math.floor(Math.random() * multiple.length)] 
               } else {
                   var assigned = multiple[0];
               };
       vm.roster.push(assigned);
       vm.refArray.splice(assigned, 1); // refArray should not be empty
       } //end if
       } //end for loop
   var multiple = []
   console.log('ref array after findHr has run', vm.refArray)
   console.log('multiple after findHr has run', multiple)
   console.log('roster after findHr has run', vm.roster)
       // vm.findIpr();
   }; // end findHr

   // vm.findIpr = function() {
   //     for (let i=0; i <vm.refArray.length; i++) {
   //         var multiple = []
   //         if (3 <= vm.refArray[i].iprRate) {
   //             multiple.push(vm.refArray[i])
   //             //console.log('multiple 4:', multiple)
   //             if (1 < multiple.length) {
   //             var assigned = multiple[Math.floor(Math.random() * multiple.length)] 
   //             } else {
   //                 var assigned = multiple[0];
   //             }; //end second if/else
   //         vm.roster.push(assigned);
   //         vm.refArray.splice(assigned, 1);
   //         } //end if   
   //     } //end for loop
   //  var multiple = []
   //  console.log('findIpr has run')
   // //  vm.findJr()
   // }; // end findIpr

   // vm.findJr = function() {
   //     for (let i=0; i <vm.refArray.length; i++) {
   //         var multiple = []
   //         if (3 <= vm.refArray[i].jr1Rate) {
   //             multiple.push(vm.refArray[i])
   //             console.log('multiple 5:', multiple)
   //             if (1 < multiple.length) {
   //             var assigned = multiple[Math.floor(Math.random() * multiple.length)] 
   //             } else {
   //                 var assigned = multiple[0];
   //             }; //end second if/else
   //         vm.roster.push(assigned);
   //         vm.refArray.splice(assigned, 1);
   //         // console.log('after findIpr', vm.refArray)
   //         // console.log('multiple5:', multiple);
   //         // console.log('assigned Ipr:', assigned)
   //         // console.log('roster', vm.roster)
   //         } //end if
   //     } //end for loop
   //     var multiple = []
   //     console.log('findJr has run')
   // }; // end findJr

   vm.findHr();
   // vm.findIpr();
   // vm.findJr();
   
   console.log('remaining refArray', vm.refArray);
   console.log('suggested roster', vm.roster);
}; //end find Roster function
