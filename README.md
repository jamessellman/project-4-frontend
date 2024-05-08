# 5-A-Side Football, a Python Flask API and React app - General Assembly Project 4

# Description

5-A-Side Football API is a website in which users can visit to add, edit and discuss current Premier League football players. Users have the ability to build their own dream 5-A-side football teams as well as play a game to choose their favourite between randomised players from the database.

![alt text](<Screenshot 2024-05-08 at 11.27.08.png>)

# Deployed Version

https://fiveasidedatabase.netlify.app/

# Getting Started/Code Installation

- Clone or download the repo from github
- pipenv i to install the Python Packages
- cd into the front end to go into the frontend directory
- npm install to install the front end dependencies
- npm run dev to start vite and display on a local browser
- cd into backend and run pipenv run flask run
- Should you wish to seed your own data please run python seed.py

# Timeframe & Working Team:

This was a solo project, and I had a timeframe of 12 days to complete my minimum viable product as well as any stretch goals I wished to achieve.

# Technologies Used

Planning:

- Canva
- Quick DBD

Front-end

- HTML 5
- CSS
- Tailwind
- React.js
- Vite

Back-end

- Flask.py
- SQLaclamcy
- PostgressSQL
- Insomnia
- Table plus

Deployment

- Front end deployment: netfliy
- Back-end deployment: Hiroku

# Brief

- Build a full-stack application by making your own backend and your own front-end
- Use a Python Flask API using a Flask REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.

# Build/Code Process

For my final project, working solo, I really wanted to test my weaknesses in the front end and design a clean, professional-looking website. Drawing inspiration from my passion for football, I decided to create a website where users can add, edit, and delete their own footballers, which I believed would serve as a simple yet effective starting point.

Expanding on this initial concept, I decided to use current Premier League footballers as a foundation for a 5-a-side team, adding further complexity. Additionally, I aimed to incorporate a feature allowing users to leave comments for discussions about their favourite players. To challenge myself further, I wanted users to be able to select players from the existing database and create their own dream teams. As a stretch goal, I conceived the idea of including a small game within the site. This feature would present users with two randomly chosen players from the database, prompting them to choose their favourite. After making a selection, the unchosen player would be replaced by another random player, allowing the user to choose again.

Once my idea was in place, I began planning. I started by deciding what each page would look like and how many would be required which can be seen in the below screenshot.

![alt text](<Screenshot 2024-05-08 at 10.51.51.png>)

Furthermore, I needed to structure my model and figure out how they would interact with one another. I did this using Quick DBD.

![alt text](<Screenshot 2024-05-08 at 11.25.11.png>)

## Backend (Day 2, 3 ,4 & 8)

This was my first time creating a backend using Python, and with plenty of time before my deadline, I decided to take a slow, meticulous approach to ensure I fully understood how the components/functions were interacting with each other to the best of my ability.

I ensured I had my environment set up and installed any required dependencies. Firstly, I created a base model (which contained functions to save and remove data from the DB. This was added to make code for concise), user model (which included password hashing), footballer model, and finally a comment model, and defined the relationships between the models. Subsequently, I created a seeding file, which included a footballer, a comment on that footballer, and a user to initially push to the database.

Next, I focused on creating three serializers, one for each of the footballer, user, and comment so the data could be converted from JSON and read by Python in the backend. I manually created my database in PostgreSQL and seeded my initial data, which could be viewed in TablePlus.

My next focus was on the controllers, where the endpoints for the frontend are defined. I made various endpoints for receiving all the players in the database, editing a player, deleting a player, etc. These were all tested using Insomnia. A user controller was also created with a sign-up function with password confirmation and error handling built to check if passwords were matching. A login function was also added, which gave the user an expirable token to ensure they remained logged into the site for a certain amount of time, creating a better UX.

Certain features such as adding a player were only allowed to happen if a user had signed in, so a secure route decorator was created to check if a user had a valid token and therefore was able to conduct certain actions on the site. The token also contained information about the user that was logged in, such as their ID in the database. This decorator was added to a few of the functions on the player controller.

Finally, on the controllers, I wanted permissions; essentially, only the user who added a player can edit or delete that player. Now users can have two tokens when logged in that contain their user ID. I circumnavigated back to the player controller; I could add a comparison operator to functions to check if the user attempting to edit a player, for example, is the user that owns that player and give permission to do so, otherwise, send an error message back. Finally, in the backend, I wanted a super admin to have access to amend any player in the database. I decided that the user with the ID of 1 would be the admin user. I amended the comparison operator on the player controllers with the OR comparator so either user admin 1 or the user who created the player has permission to amend.

- code snippet for function that can delete a player, including permissions for admin user and user that posted the player.
  ![alt text](<Screenshot 2024-05-08 at 14.30.10.png>)

## Frontend (days 5, 6, 7, 8, 9. 10, 11, 12)

With the backend in working order, I turned my attention to the frontend. Using the starter code provided by my instructor, I set up my initial React file. To keep things structured and easy to follow, I structured the files for the pages into components.

Initially, I set up a home page, player list page, and a navbar, using routes defined in the app.tsx page matched to the navbar to successfully move from page to page. Tailwind CSS was installed so styling could be done as the front end was built.

Further pages were added for sign up and login with a basic form and connected to the backend using a login function. Axios was used to connect to the correct endpoint, and the site now had the ability to login and sign up users.

I focused on displaying the players in the database on the players list page. I fetched all the players' data from the backend using the correct endpoint, and using cards in Tailwind CSS, I mapped over each player and displayed the player's name, image, and club on a single card, in rows of 4. I then made each card clickable with a link that would go to a new page for that specific player using their ID. Here, I displayed further information about that particular player. I then added buttons to the individual player that connected to the backend to edit or delete that player if the user had permission to do so. A comment section was also added to the individual player card, where a logged-in user could leave a comment about that player and also see other users' comments. The comment also showed the username of the user who left it.

A 'create a player' page was also created and connected to the backend via the relevant endpoint, so now users can create players on the frontend. In the navbar, if a user was present, then they would have no need for sign up or login, so these links would be hidden, and a sign out option would show alongside a 'create a player' link. If the user logged out, then 'create a player' was hidden and 'sign in' and 'log in' showed.

With the basic functionality completed, I focused on creating a 5-a-side team. Using a function to create a random number, I took the random number and grabbed the relevant player with that corresponding ID and displayed this player on a card. Buttons were added to skip this player and bring in a new random player as well as an 'add to team' button, which saved that card below in a section that saved a maximum of 5 players.

Finally, using the same logic to get a random player from the backend, I displayed 2 cards side by side on a new page with 2 random players. A button was added to each card, which the user can click to state this was their favorite player out of the 2 displayed, and randomize the other card, bringing a new player, so the user could continue playing.

Finally, with all the functionality completed within the timeframe, I focused on styling my site using Tailwind CSS, keeping the design clean and consistent. On the homepage, I hardcoded 5 pictures from the internet into an array. I created a carousel on the homepage in React.js which would map through the array and display the images. The user can click on the left and right chevron to scroll through the pictures on the homepage.

# Final Product Screenshot Walktrough

## Homepage:

![alt text](<Screenshot 2024-05-08 at 11.27.08.png>)

## Player list page:

![alt text](<Screenshot 2024-05-08 at 13.08.01.png>)

## Individual player page:

![alt text](<Screenshot 2024-05-08 at 14.28.46.png>)

## Sign up page:

![alt text](<Screenshot 2024-05-08 at 13.12.18.png>)

## Login Page:

![alt text](<Screenshot 2024-05-08 at 13.12.10.png>)

## Create a player page:

![alt text](<Screenshot 2024-05-08 at 13.11.51.png>)

## 5-a-side page:

![alt text](<Screenshot 2024-05-08 at 13.10.51.png>)

## Favourite player game:

![alt text](<Screenshot 2024-05-08 at 13.11.15.png>)

# Key Learnings/Takeaways

- My confidence in frontend development grew significantly. I gained a much more comprehensive understanding of React and how routers work, as well as how to link components to keep the code tidy and display further information on a single page.
- It was my first time styling with Tailwind CSS. It presented a steep learning curve, but I now have a much better understanding of its use, flexibility, and implementation.
- This project also helped me greatly with my understanding of relational databases and how they can be used effectively to pool data from different tables.

# Challenges

- Post deployment, I had an error regarding my posting, editing and deleting a player as they no longer worked. I worked backwards through my code, using console logs to determine where the error was. I found an issue with my secure route, not correcting giving the user a token and therefore permission were not working correctly.
- As previously mentioned, this was my first time using tailwind and decided to implement the first day of the project. It was certainly a challenge to learn tailwind as quickly as I could to ensure the project was styled well before the deadline.

# Bugs

- The carousel on the homepage is not as smooth as I would have hoped. When you reach the fourth picture and resets to the first, the animation is quite jumpy and not as smooth as the rest of the carousel.
- When footballers are being randomized for the game or the 5 a side picker, as the number is random the same player can appear multiple times in a row.
- The images on the randomised footballer do vary, which affects the size of the card they are displayed.

# Future Improvements

- Unable to currently delete or delete comments.
- User's 5-a-side team is created in the frontend; I would like this to persist in the backend and will need to create a new model,
- Further styling tweaks.
- Display errors for users, i.e., when logging in if the password is incorrect.
- Ability for users to change their password.
- Make random player code more DRY (Don't Repeat Yourself).
- Further search functionality, such as filtering by position/team.
