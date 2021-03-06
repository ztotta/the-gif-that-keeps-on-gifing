# THE GIF THAT KEEPS ON GIFING 
### a MEN-Stack App
##### by Zach Totta, Cait Friedlander, and Mel Rabineau
#####[pacific-river-56706.herokuapp.com](http://pacific-river-56706.herokuapp.com/)
--

![homepage](https://github.com/ztotta/the-gif-that-keeps-on-gifing/blob/a679f8e3c4cb792f94bcce2c6a3e42d8b05622c5/README%20img/homepage.png?raw=true)
--

###DESCRIPTION:

After signing up through Google OAuth 2.0, users answer survey questions about their lives: 
![survey] (https://github.com/ztotta/the-gif-that-keeps-on-gifing/blob/35f0cdbe2e32bcd13639d6bd3978b170852c4cd8/README%20img/survey.png?raw=true)
--

Their results are then returned in a vertical timeline with their responses represented by corresponding .gifs pulled from the Giphy API:

![survey] (https://github.com/ztotta/the-gif-that-keeps-on-gifing/blob/master/README%20img/timeline2.png?raw=true)
--

Users can then share these results with a unique URL and/or retake the survey.

They can also search for individual .gifs from the Giphy API without logging in through our homepage InstaGif feature:

![instagif] (https://github.com/ztotta/the-gif-that-keeps-on-gifing/blob/master/README%20img/instagif.png?raw=true)
--

###TECHNOLOGIES USED:

This is a full-stack app employing MongoDB, Node.js + Express, JavaScript, jQuery / AJAX / Promises, Google OAuth 2.0, Materialize, HTML, CSS and the Giphy API. Deployed via Heroku.

--

###CODE

Our top challenges included:

- sending data to and from our Mongo database and the Giphy API using a mix of AJAX and HTTP requests, and then populating that data onto the Results page timeline in the correct order. This required writing a Promise.all that gathers the asynchronous responses into one array so that they can then be sorted into the correct order again by their index property (see Promises snippet below)

- generating unique, functional URLs that can be shared with non-logged-in users

- styling our site symmetrically and responsively via Materialize

#####Promises snippet:
![Promises] (https://github.com/ztotta/the-gif-that-keeps-on-gifing/blob/master/README%20img/promises.png?raw=true)
--

###Yet to be resolved:
Although we are pleased with the progression of our project and its functionality, there are just a few things that we would add if given more time, including a direct post-to-facebook button, a responsive footer on the timeline page, and improved responsiveness for mobile devices.

--

###Conclusion:
Ultimately, this turned out to be an excellent project choice for our group. We intentionally chose a concept that has relatively simple funcitonality so that we could make something engaging while focusing on working congruently as a team using Agile development and Git version control. We were able to accomplish both of those goals while also overcoming a number of unforseen challenges that we worked on both as a team and as individuals. We worked extremely well as a unit and each one of us is proud of what we accomplished in the past few days. The balance between the attainability of our project's scope and the amount that it pushed us to understand new concepts was even better than we had anticipated, and the gif...it keeps on gifing.

