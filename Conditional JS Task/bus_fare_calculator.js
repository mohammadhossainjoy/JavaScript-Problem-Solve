/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 60;
const isStudent = true;
const ticketFare = 800;

if (age < 10) {
  console.log("Ticket Free");
} else if (age >= 60) {
  const discount = (ticketFare * 15) / 100;
  const pay = ticketFare - discount;
  console.log(pay);
} else if (isStudent) {
  const dis = (ticketFare * 50) / 100;
  const payment = ticketFare - dis;
  console.log(payment);
} else {
  console.log(ticketFare);
}
