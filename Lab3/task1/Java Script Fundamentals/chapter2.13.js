let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

i = 3;
while (i) alert(i--);

i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}


// for (let i = 0; i < 3; i++) alert(i)

// run begin
i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop

i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}


i = 0;

for (; i < 3;) {
  alert( i++ );
}

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}


for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');


i = 3;

while (i) {
  alert( i-- );
}

i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop


i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}