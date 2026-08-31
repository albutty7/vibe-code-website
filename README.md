# VIBE CODE

منصة خدمات برمجية ورقمية — الموقع يحوّل العملاء إلى سيرفر Discord.

## تشغيل محلي

```bash
npm install
npm run dev:all
```

- الواجهة: http://localhost:5173
- الـ API: http://localhost:3001

للواجهة فقط:

```bash
npm run dev
```

للخلفية فقط:

```bash
npm run dev:server
```

## Discord Live Stats

انسخ المتغيرات:

```bash
copy .env.example .env
copy server\.env.example server\.env
```

ثم ضع:

- `DISCORD_BOT_TOKEN` — توكن البوت فقط في `.env` / `server/.env`
- `DISCORD_GUILD_ID` — آيدي السيرفر

لا تضع التوكن في ملفات React.

## النشر

1. `npm run build`
2. ارفع `dist` إلى Vercel / Netlify / Cloudflare Pages للواجهة.
3. شغّل `node server/index.js` على Render / Railway مع `NODE_ENV=production` إذا أردت API + الموقع معًا.
