/*class MainController {
    constructor() {
        // create/initialize an array
        let pets = [ "dog", "cat", "bird" ];
        this.message = pets;
    }
} */

// class MainController {
//     constructor() {
//         let list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//         this.message = this.sum(list);
//     }
    
//     sum(nums) {
//         let x = 0;
//         let total = 0;
//         for (x = 0; x < nums.length; x++) {
//             total += nums[x];
//         }
//         return total;
//     }
// }

 
// class MainController {
//     constructor() {
//         this.message = this.combine([ "dog", "cat", "pony" ]);
//     }

//     combine(string) {
//         let str = ""
//         let x = 0
//         for (x = 0; x < string.length; x++) {
//             str += string[x] + " ";
//         }
//         return str;
//     }
// }

 
// class MainController {
//     constructor() {
//         let total = 10;
//         this.message = this.getArray(total);
//     }
//     getArray(nums) {
//         let array= [];
//         let x = 0;
//         for (x = 0; x <= nums; x++) {
//             array.push(x);
//         }
//         return array;
//     }
// }



// class MainController {
//     constructor() {
//         let list = [ 5, 2, 2 ];
//         this.message = this.multiply(list);
//     }

//     multiply(prod) {
//         let x = 0;
//         let answer = 1;
//         for(x = 0; x < prod.length; x++) {
//             answer *= prod[x];
//         }
//         return answer;
//     }
// }



class MainController {
    constructor() {
        let nums = this.getNums(10);
        let total = this.getTotal(nums);
        this.message = total;
    }

    getTotal(list) {
        let result = 0;
        for (let index = 0; index < list.length; index++) {
            result += list[index];
            
        }

        return result;
    }


    getNums(count) {
        let meh= [];
        for (let index = 0; index < count; index++) {
        meh.push(Math.floor((Math.random()* 100) + 1));
        }
    

        return meh; 
    }



}
