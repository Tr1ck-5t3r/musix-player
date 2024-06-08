# Musix Player

Musix Player is a music player application that allows users to share music worldwide. Users can upload their music and share it with other users. Users can also listen to music uploaded by other users.

## Features

- Users can upload music
- Users can listen to music
- Users can share music

## Technologies Used

- Next JS
- Tailwind CSS
- Convex
- Clerk
- ShadCN

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env.local` file in the root directory
4. Add the following environment variables to the `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your clerk publishable key>
CLERK_SECRET_KEY=<your clerk secret key>
CONVEX_DEPLOYMENT=<your convex deployment>
NEXT_PUBLIC_CONVEX_URL=<your convex url>
```

5. Run `npm run dev`
6. Run `npx convex dev` to start the Convex server
7. Visit `http://localhost:3000` in your browser
