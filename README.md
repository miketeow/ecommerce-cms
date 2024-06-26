# Next.js Ecommerce Dashboard CMS

## Overview

This project is a Next.js ecommerce dashboard CMS inspired by [Code With Antonio's](https://www.youtube.com/@codewithantonio) tutorial on [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router](https://www.youtube.com/watch?v=5miHyP6lExg&t=16208s).

## Modifications

Some modifications were made to the original tutorial, including:

- **Deployment:** The app is not deployed to Vercel.
- **Database:** Docker is used to initialize a PostgreSQL database.
- **Functionality:** Functions for uploading files and images were excluded.

## Development Log

Below is a list of changes made during the development process:

1. Installed `shadcn/ui`.
2. Setup Drizzle and Docker.
3. Integrated Clerk for authentication.
4. Add modal component.
   - Might change it to not using zustand to open it using hook.
   - Change to open the store modal using a button.
