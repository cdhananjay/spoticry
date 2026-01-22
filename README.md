# Spoticry
A full stack next.js website which roasts people based on their spotify data (top artists and top tracks).

### Important
This Spotify project app is currently in developer mode, which limits access to a maximum of 25 manually added users. 
To allow public login via Spotify accounts, a quota extension is required, which I’m not eligible to request.
More about criteria for Spotify's web api extended access [here](https://developer.spotify.com/blog/2025-04-15-updating-the-criteria-for-web-api-extended-access).
<br>
If you’d like to try the site, feel free to DM me your Spotify email address and username.
<br>
Although the project is nearly complete, enabling access for everyone would require manually adding each user’s email, so I’ve decided to pause further development and move on to another project.
<br>
That said, this project can still serve as a template or starting point for building similar “roast me based on XYZ” applications using different data sources or platforms.

### Live Link
https://spoticry-roastme.vercel.app/
![preview_gif](https://github.com/cdhananjay/spoticry/raw/main/public/spoticry.gif)

### Tech Stack
- Next.js
- Tailwind CSS
- Better-Auth
- Spotify API
- Gemini API

### Getting started
```
git clone https://github.com/cdhananjay/spoticry
cd spoticry
npm install
# setup .env file
npm run dev 
```

### Customization
Edit `@/lib/generatePrompt.ts` for custom prompts.

### Cost
- Hosting: Free tier
- Database: Free tier
- Gemini API: Free tier 

## Feel free to contribute!