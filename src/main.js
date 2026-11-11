import './style.css'
//Part A
// 2 add my data set to the page
import items from './data.json'

// print the length of the items of array to the console
console.log(items.length);

// Part B
//show the title of the page in the browser
const app = document.querySelector("#app");
app.innerHTML = "<h1>Student: M26W7604 . Tiny Town Toys</h1>";

//week 3 project

// all name in list format
const names = items.map(item => `<li>${item.toyName}</li>`);
app.innerHTML += `<h2>All items (${items.length})</h2><ul>${names.join("")}</ul>`;
// All items (30) ,Happy Flying Disc ,Wobbly Castle Blocks ,Clever Bubble Wand .... 

// Task 2: Count with a loop

let count = 0;

for (const item of items) {
    if (item.giftWrap === true) {
        count = count + 1;
    }
}

console.log(count);

app.innerHTML += `<h2>Gift wrap OK: ${count} of ${items.length}</h2>`;

// Task 3: One category

const chosen = "Puzzle";

const puzzles = items.filter(item => item.toyType === chosen);

const puzzleNames = puzzles.map(item => `<li>${item.toyName}</li>`);

app.innerHTML += `<h2>${chosen} (${puzzles.length})</h2><ul>${puzzleNames.join("")}</ul>`;

// Task: Find the first item above a limit

const limit = 7;

const found = items.find(item => item.recommendedAge > limit);

app.innerHTML += `<h2>Find</h2>`;

if (found === undefined) {
    app.innerHTML += `<p>No item above ${limit} years.</p>`;
} else {
    app.innerHTML += `<p>First item above ${limit} years: ${found.toyName} (${found.recommendedAge} years)</p>`;
}
//First item above 7 years: Happy Flying Disc (8 years)


// Task7: The 3 best items

const top3 = [...items]
    .sort((a, b) => b.kidRating - a.kidRating)
    .slice(0, 3);

let html = "";

for (const item of top3) {
    html += `<li>${item.toyName} (${item.kidRating})</li>`;
}

app.innerHTML += `<h2>Top 3 by rating</h2><ol>${html}</ol>`;

console.log(items[0].toyName); //Happy Flying Disc