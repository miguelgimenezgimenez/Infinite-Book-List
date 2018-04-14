#  CASUMO CODE ASSESSMENT 


Deployed project at http://miguelgimenez.tech
### Running the project

**Install dependencies:**


    $ yarn 
    or 
    $ npm install


**Run in production mode: (Recommended)**


    $ npm start   
 
Then go to ``http://localhost:8080/``


**Run in development mode :** 

 **you would need to run the api locally !!!!**

    $ npm run dev
	
	

Then go to ``http://localhost:8080/``

    


# DESCRIPTION

To do this project I have done the  UI with React, Redux,React Router, Babel, Webpack and material-ui. 
I have also created my own API with express and a web scraper with Selenium for the reasons mentioned below.

The first difficulty I faced while doing the project was being able to get a list of 1 million books, after a lot of research through most of the
book APIS available I found that the best way to be able to do this was creating my own database of books by scraping www.goodreads.com.

So the first thing I did was create a web scraper using selenium (the code for this is very ugly but it works).
After browing throught the page I decided that first I was going to scrape all the authors , and afterwards I would call the goodreads API to get the list of books 
for each author.

Since all the authors are not available by going through all the letters of the alphabet and scraping their author search page , I only ended up with
about 100000 books. So I needed to get more authors. I decided to parse all the goodreads genres (about 3000) then for each genre scrape the genres
main authors (which I ended up with a total of about 20000 authors) and then repeat the process of getting all the author's books.
So finnally after some dirty scraping I ended up with a list with about half a million books (some of them where repeated) but I decided it was enough
for the job.

I set up a database in mongolab, created an api and finnally was ready to create the project.(the models are shared by using git submodules)
There are a few tests done with jest, chai and enzyme ,didnt have much time 
to do more testing since I spent too much time on gathering the data.

The second difficulty I faced with the project was loading a list of thousands of elements without it crashing the browser.
The way I solved this problem was first by Lazy loading the books that where going to be shown. I first would call for records that start with 
letter A, then when the user scrolled down I would request for letter B and so on).

The problem with this was that as the list grew the browser had a huge list of elements rendered so it would crash.
To solve this problem I decided to create a view list component , which given an array of elements , would calculate the height 
of the viewport, index the elements , and by listening to the scroll position, the component would calculate the index number of the elements that
should be rendering , and it will push it to another array of elements which will then be rendered by React.

Since I spent a lot of time scraping , I kind of rushed to create the frontend project which is what I should have focused , so the code quality has a lot of room for improvement.

There is a lot more of testing and proptypes validation to be done.

**I accidentally erased The books starting with letter S from the db (just so you know)**

Thanks and feedback is appreciated if I am not selected.

# FUNCTIONALITY:

### Alphabetical Search :

There are 3 tabs available, All books , Authors , and Genres.
When I am in one of this tabs , an subheader with an alphabet list will appear, giving the functionality of filtering any of the 
current fields I am im by letter.

### Date Search:

When the list being rendered is a book list , I can filter the list by published data by giving a range of dates in the date picker.

### Male / Female :

When the list is an author list, I can filter the authors by selecting male or female from the checkbox.

### Halloween Filter:

When the list is the all books list I can filter the books by rendering only the terror books published in halloween.




# ARCHITECTURE:
The way this project is done is a bit different from other react projects I have worked with, since in the routes file
I will be passing the actions as props to be dispatched by the components, so that way I could reuse the ListPage component for all routes.

To Structure the project I have grouped the components as Atoms, Molecules and Pages:

### Atoms

Simple components that consist of simple html Elements (or material-ui components).


### Molecules

Components that are composed of Atoms and other simple components


### Organisms

Components that render different organisms, atoms and/or molecules


### Pages

This component is the main rendered component for a specific route.