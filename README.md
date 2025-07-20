# Dine Market – Modern Ecommerce Clothing Store

![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

<p align="center">
  <img src="public/Logo.png" alt="Dine Market Logo" width="200"/>
</p>

## 🛍️ Project Overview

**Dine Market** is a modern, fully responsive ecommerce web application for clothing, built with Next.js, React, and Tailwind CSS. The platform offers a seamless shopping experience with dynamic product listings, category-based browsing, a robust shopping cart, and a newsletter subscription system. Designed for both desktop and mobile users, Dine Market combines beautiful UI with practical ecommerce features.

---

## ✨ Key Features

- **🛒 Product Catalog**: Browse a curated collection of male and female clothing items, each with detailed information and high-quality images.
- **👗 Category Pages**: Separate, filterable pages for male and female products, with easy navigation.
- **🎉 Promotions & Events**: Highlighted promotional events and discounts on the homepage to boost sales.
- **🛍️ Shopping Cart**: Add, remove, and update product quantities in a persistent cart, with real-time subtotal calculation and checkout simulation.
- **📧 Newsletter Subscription**: Users can subscribe to receive the latest news and promotions directly in their inbox.
- **📱 Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices.
- **🧩 Reusable UI Components**: Built with a component-driven approach using Radix UI, Tailwind CSS, and custom utility functions.
- **⚡ Fast & Animated**: Smooth UI transitions powered by Framer Motion and instant feedback with React Toastify.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **State Management**: React Context API for cart state
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Type Safety**: TypeScript
- **Other**: Husky, ESLint, PostCSS

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-clothing.git
cd ecommerce-clothing
```

### 2. Install dependencies
```bash
npm install
# or
pnpm install
```

### 3. Run the development server
```bash
npm run dev
# or
pnpm dev
```

### 4. Open your browser
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🗂️ Folder Structure

```
├── public/                # Static assets (images, icons, etc.)
├── src/
│   ├── app/               # Next.js app directory (pages, layout, routing)
│   ├── components/        # Reusable UI and feature components
│   ├── constants/         # Static product data for male and female categories
│   ├── lib/               # Utility functions
│   ├── utils/             # Cart button and related logic
│   └── styles/            # Global and component styles
├── tailwind.config.ts     # Tailwind CSS configuration
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

---

## 🧑‍💻 Usage & Customization

- **Add new products:** Update `src/constants/female.ts` or `src/constants/male.ts` with new product objects.
- **Change branding:** Replace images in `public/` and update the banner/footer components.
- **Styling:** Modify Tailwind CSS classes or update `src/app/globals.css` and `tailwind.config.ts` for custom themes.
- **Deploy:** Easily deploy on [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

## 🤝 Contribution Guidelines

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 🙏 Credits
- **Design by:** Shabrina
- **Code by:** Suleman ([GitHub](https://github.com/))
- **Images:** Unsplash, Custom assets
- **UI Libraries:** Radix UI, Tailwind CSS, Framer Motion

---

## 📄 License

This project is licensed under the MIT License.


---

<p align="center">
  <img src="public/bannerPic.avif" alt="Dine Market Banner" width="600"/>
</p>
