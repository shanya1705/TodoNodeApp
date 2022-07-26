// keeping 4 colors to choose from for the category button
var colors = ["#4287f5", "#f58142", "#ccc539", "#42f5ad"];

//selection all the cards
var cards = document.querySelectorAll('.card');

//selecting all the category buttons
var categories = document.querySelectorAll('.category-button');
let count = 0;

//iterating over category buttons available and giving it color keeping a count of the colors object index.The color will repeat after all the colors are used once.
for (let i = 0; i < categories.length; i++) {
    categories[i].style.backgroundColor = colors[count];
    count++;
    if (count == 4) {
        count = 0;
    }
}


//adding an event listener to add text decoration to the tasks being displaying according to their completion status i.e checked or not
for (let i = 0; i < cards.length; i++) {
    cards[i].getElementsByTagName('input')[0].addEventListener('change', function () {
        if (cards[i].getElementsByTagName('input')[0].checked) {
            cards[i].getElementsByTagName('span')[0].style.textDecoration = 'line-through';
            cards[i].getElementsByTagName('p')[0].style.textDecoration = 'line-through';
        }
        else {
            cards[i].getElementsByTagName('span')[0].style.textDecoration = 'none';
            cards[i].getElementsByTagName('p')[0].style.textDecoration = 'none';
        }
    });
}




