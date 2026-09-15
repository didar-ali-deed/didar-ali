# Didar Ali — Developer Portfolio

A responsive portfolio for Didar Ali, a Junior Data Scientist / AI-ML Engineer. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Local setup

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the content

All profile content lives in [`data.ts`](./data.ts): contact details, experience, projects, skills, education, certifications, and publication information. The layout and interactions are in `app/page.tsx`.

The supplied portrait and resume are served from `public/Deed.png` and `public/Didar_Ali_Data_Analyst.pdf`. Update their paths in `data.ts` if you replace either asset.

The contact form opens a pre-filled email in the visitor’s default mail app using `mailto:`. No third-party form service is required.

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected framework as **Next.js** and click **Deploy**.

Vercel detects the build settings automatically. There are no required environment variables.

For production social image URLs, optionally add `NEXT_PUBLIC_SITE_URL` in Vercel project settings, for example `https://your-domain.com`. The app falls back to `http://localhost:3000` locally.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Serve the production build
```
