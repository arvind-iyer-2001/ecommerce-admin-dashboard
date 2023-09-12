This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies
- Next 13 (App Router)
- React
- Shadcn UI
- PlanetScale/MySQL
- Clerk
- Tailwind
- React Hook Forms
- Prisma
- Stripe

## Getting Started

1. Install all Dependencies with npm
```bash
  npm install
```

2. Set Up Environment
```bash
  cp .env.example .env
  npx prisma init
  npx prisma generate
```

Replace the following fields in the .env file
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=PUBLIC_CLERK_PUBLISHABLE_KEY-Replace
CLERK_SECRET_KEY=CLERK_SECRET_KEY-Replace
DATABASE_URL='mysql://<username>:pscale_pw_<password>@aws.connect.psdb.cloud/ecommerce-admin?sslaccept=strict'
```
Sync the Prisma Schemas with the Database Provider
```bash
  npx prisma db push
```
  
4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about some of the technologies used in this, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide and API reference for Next.js, a popular React framework for server-rendered applications.
- [Shadcn](https://ui.shadcn.com/) - A toolset for building your own component library, making UI development faster and more efficient.
- [Clerk](https://dashboard.clerk.com/) - Provides ready-to-use user management UIs and APIs, optimized for React and Next.js applications.
- [PlanetScale](https://planetscale.com/) - A database service platform based on MySQL, designed for scalability and ease of use.
- [Prisma](https://www.prisma.io/) - An open-source database toolkit that includes an ORM for Node.js and TypeScript, making database access easier and more efficient.
- [Stripe](https://stripe.com/) - A payment processing service that offers a set of APIs and tools to manage online transactions, subscriptions, and other financial operations.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development, allowing for highly customizable designs with less CSS.
- [React Hook Forms](https://react-hook-form.com/) - A React library for building forms with built-in hooks, making form validation and management easier.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
