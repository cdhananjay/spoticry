# Spoticry
A full stack next.js website which roasts people based on their spotify data (top artists and top tracks).

### Important
The spotify project app status is in developer mode and I am limited to adding 25 users max, manually. 
To let everyone access and login via their spotify accounts I need to request quota extension which I am not eligible for.
If you are curious to try the site, DM me your spotify email address and user name.

### Live Link
https://spoticry-roastme.vercel.app/
![preview_gif](https://github.com/cdhananjay/spoticry/raw/main/public/spoticry.gif)

### todos:
- Add loading UI wherever needed.
- Add multiple fallback AI options.
- Allow users to choose the roast intensity level.
- Add a share button below the Roast. 
- Avoid taking user's email, name & and other irrelevant spotify data.

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