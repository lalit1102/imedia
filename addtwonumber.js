// let l1 = [2,4,3]
// let l2 = [5,6,4]

// const addTwoNumber = (l1,l2) =>{
//     let result = []
//     let carry = 0;
//     let i = 0 
//     while(i<l1.length || i< l2.length || carry !== 0){
//         let val1 = i<l1.length ? l1[i] : 0;
//         let val2 = i < l2.length ? l2[i] : 0;
//         let sum = val1+ val2+carry
//         result.push(sum%10)
//         carry = Math.floor(sum/10)
//         i++
//     } return result

// } 

// console.log(addTwoNumber(l1,l2))


function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function createList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

// ✅ Test
let l1 = createList([2,4,3]);
let l2 = createList([5,6,4]);

let result = addTwoNumbers(l1, l2);
console.log(result); // [7,0,8]



