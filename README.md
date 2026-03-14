# Mariam Odera

A handcrafted birthday website built with Next.js, React, Tailwind CSS, and Framer Motion.

The site is designed as a dark illustrated storybook with:

- a comic-style hero section
- a timeline of the relationship story
- reusable quality cards with hover tilt
- interactive stars and hidden memory notes
- an animated envelope letter reveal

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

To create a production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

## Project Notes

- Main page entry: `app/page.tsx`
- Global styling: `app/globals.css`
- Story content: `lib/story-data.ts`
- Motion variants: `lib/animations.ts`
- Reusable story UI: `components/story`
- Page sections: `components/sections`

## Music

The floating music button expects an audio file at:

```text
public/birthday-theme.mp3
```

A soft instrumental, piano, or lo-fi romantic track works best.
