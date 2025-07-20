# Dine Market – Ecommerce Clothing Store

Dine Market is a modern, responsive ecommerce web application for clothing, built with Next.js, React, and Tailwind CSS. It features a clean UI, dynamic product listings, a fully functional shopping cart, and a newsletter subscription system.

## Features

- **Product Catalog**: Browse a curated collection of male and female clothing items, each with detailed information and images.
- **Category Pages**: Separate pages for male and female products, with easy navigation.
- **Promotions & Events**: Highlighted promotional events and discounts on the homepage.
- **Shopping Cart**: Add, remove, and update product quantities in a persistent cart, with real-time subtotal calculation and checkout simulation.
- **Newsletter Subscription**: Users can subscribe to receive the latest news and promotions.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Reusable UI Components**: Built with a component-driven approach using Radix UI, Tailwind CSS, and custom utility functions.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **State Management**: React Context API for cart state
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for smooth UI transitions
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/) for user feedback
- **Type Safety**: TypeScript

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app/` – Next.js app directory (pages, layout, routing)
- `src/components/` – Reusable UI and feature components (navbar, footer, product cards, cart, etc.)
- `src/constants/` – Static product data for male and female categories
- `src/utils/` – Utility functions and cart button logic
- `public/` – Static assets (images, icons, etc.)

## Customization

- **Add new products:** Update `src/constants/female.ts` or `src/constants/male.ts`.
- **Change branding:** Replace images in `public/` and update the banner/footer components.
- **Styling:** Modify Tailwind CSS classes or update `src/app/globals.css` and `tailwind.config.ts`.

## License

This project is for educational and demonstration purposes.

---

## Resume Points

1. **Developed a full-stack ecommerce clothing web application using Next.js, React, and Tailwind CSS, featuring dynamic product listings, category pages, and a responsive, modern UI.**
2. **Implemented a robust shopping cart system with React Context API, enabling real-time cart updates, quantity management, and checkout simulation with user notifications.**
3. **Engineered reusable UI components and integrated third-party libraries (Radix UI, Framer Motion, React Toastify) to enhance user experience, accessibility, and maintainability.**
