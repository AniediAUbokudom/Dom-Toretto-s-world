
let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "You're in Toretto's World!";
  

  // Part 2
this.body.style.backgroundColor = "yellow";

  // Part 3
let dsFavThings = document.getElementById('favorite-things');
dsFavThings.removeChild(dsFavThings.lastElementChild);


  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
    title.style.fontSize = '2rem';
  });

  // Part 5

const parentPastRaces = document.getElementById("past-races");
//parent--ul
const childLiChi = parentPastRaces.getElementsByTagName("li")[3]; //child with index for Chi-Town
parentPastRaces.removeChild(childLiChi); //remove Chi-Town


  // Part 6
const pastRacesList = document.querySelector('#past-races');
let newCity = document.createElement("li"); //create new list element.
let cityName = "Cincy"; // Set City Name
newCity.textContent = cityName;
pastRacesList.appendChild(newCity);

  // Part 7

  const mainSection = document.querySelector('.main');
  const newBlogPost = document.createElement('div');
  newBlogPost.className = 'blog-post purple';
  const newCityTitle = document.createElement('h1');
  newCityTitle.textContent = cityName;
  const newCityDescription = document.createElement('p');
  newCityDescription.textContent = `Driving in ${cityName} feels like Nascar on Spirits!`;

  newBlogPost.appendChild(newCityTitle);
  newBlogPost.appendChild(newCityDescription);
  mainSection.appendChild(newBlogPost);


  // Part 8

  const quoteTitle = document.querySelector('#quote-title'); //Query select the #quote-titleID element
  quoteTitle.addEventListener('click', randomQuote); //add event handler-----Test this out..


  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post'); // select all blog posts
  blogPosts.forEach(blogPost => { //iterate through all the blog posts
    blogPost.addEventListener('mouseout', function() {
      blogPost.classList.toggle('purple'); //add mouseout purple class
    });   

    blogPost.addEventListener('mouseenter', function() {
      blogPost.classList.toggle('red');
     //add mouseenter to red class
    });
  });


});
