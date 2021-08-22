# OCTanner-Wavy

Run locally

<ol>
<li>Create a new Spotify app in your Spotify Developer Dashboard</li>
<li>Add http://localhost:4000/callback to your app's redirect URl's. 
Note your app's Client ID and Client Secret.</li>
<li>Create a file named .env in the project's root directory with the following values:
<br>
```
CLIENT_ID=YOUR_CLIENT_ID_HERE
CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE
REDIRECT_URI=http://localhost:4000/callback
PROJECT_ROOT=http://localhost:4000
NODE_ENV=development
```
</li>
<li>Install using NPM <br> ```npm i```</li>
<li>Serve project <br> ```npm run serve```</li>
<li>Visit ```http://localhost:3000``` and log in with your Spotofy account.</li>
<li>Play a song in your spotify client of choice. The visualizer will take a moment to sync before initializing.</li>
</ol>

Build & Serve (Production)

<ol>
<li>Follow steps 1 through 4 above</li>
<li>In your .env file, set NODE_ENV to production</li>
<li>Start project using NPM.</li>
</ol>

``` npm run start```
