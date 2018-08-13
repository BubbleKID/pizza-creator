Host: www.marksama.com.au


git command:
git add .
git commit -m "message"
git push -u origin Mark


//根目录下:git subtree push --prefix=src/marks_pizza_house  heroku master



//heroku

## Global install of the app generator
npm install -g create-react-app

## Setup the app (first-time only)
create-react-app my-app
cd my-app
git init

# Create the Heroku app; requires free account at https://www.heroku.com/
heroku create -b https://github.com/heroku/heroku-buildpack-static.git

# Set the web root to the build/ directory
echo '{ "root": "build/" }' > static.json
# Allow JS bundle to be committed (removes `build` from ignores)
sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore

## Build, commit, & deploy
npm run build
git add .
git commit -m "react-create-app on Heroku"
git push heroku master

## Visit the live React app in your browser
heroku open

# Develop your app locally using `npm start`
# Then build, commit, & deploy ♻️


heroku plugins:install heroku-repo
> heroku repo:reset