# OCTanner-Wavy
# Service is Terminated(2 Sept @ 22:05)

<h2>Note!!</h2
 <p>All the Issues are related to online deployment, you can run the application on local Machine without any error!!<p>
 <p>Video for Installation Walkthrough: https://youtu.be/lYoxYmX9GW8<p>

<h2>Updates</h2>
 Working URL : http://13.126.214.123:3000/
 <br>
 DNS Update Pending : http://wavy.rocks

<h2>Fixes</h2>
 Issue #14: ``` CORS issue ```
 <br>Issue #13: ``` DNS issue ```
 <br>Issue #12: ``` 3rd`````` party JS ```
 <br>Issue #11: ``` CSS Breakdown ```


<h2>Prerequisite:</h2>
Spotify Account

<h2>Create Spotify Credentials</h2>

1. Create a new Spotify app in your <a href="https://developer.spotify.com/dashboard/login" target="_blank">Spotify Developer Dashboard </a>
2. Add ``` http://localhost:4000/callback ``` to your app's Redirect URIs. Note your app's Client ID and Client Secret.

<h2> Run Backend</h2>
 1. Move into server Directory. <br>
 2. Update the  .env as follow: <br>

 CLIENT_ID=YOUR_CLIENT_ID_HERE <br>
 CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE <br>
 REDIRECT_URI= ``` http://localhost:4000/callback ``` <br>
 PROJECT_ROOT= ``` http://localhost:4000 ```<br>
 REACT_CLIENT= ``` http://localhost:3000 ```<br>


 3. Install using <br> ``` npm i ```
 4. Start project <br> ``` npm start ```

<h2> Run Client</h2>

1. Move into ``` client ``` directory
2. Install using ``` npm i ```
3. Start client service ``` npm start ```

# Finally

Visit ``` localhost:3000 ``` <br> 
Play a song on spotify and enjoy

