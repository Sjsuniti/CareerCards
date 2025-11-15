# CareerCards — React + Vite Project

CareerCards is a simple and elegant cards-based UI built using React, Vite, and CSS.
It displays companies, roles, logos, or job-related information using reusable card components.
The project is deployed on Vercel for fast and reliable hosting.

🚀 Features

⚡ Built with React + Vite
🎨 Clean and modern card UI
📱 Fully responsive design
🌗 Dark/Light Theme toggle (optional)
🔗 Easy to deploy on Vercel
📦 Reusable card components using props

# 🛠️ Tech Stack

React, Vite, CSS, Lucid React, Vercel

▶️ Setup & Installation

Follow these steps to run the project locally:

# Clone the repo
git clone https://github.com/sjsuniti/CareerCards.git

# Navigate into project
cd CareerCards

# Install dependencies
npm install

# Start dev server
npm run dev


Your app will run at:
👉 http://localhost:5173/

🏗️ Build for Production
npm run build


This will generate an optimized dist/ folder ready for deployment.


📘 Understanding Props (Simple & Beginner-Friendly Explanation)

In this project, every card uses props to display data like company name, role, and image.

👉 What are Props?

Props are data passed from a parent component to a child component.
They help us reuse the same component with different values.

Think:
📦 Parent sends → Child receives.

✔️ 1. Passing Props (Parent Component)
<Cards
  img="/google.png"
  company="Google"
  role="Software Engineer"
/>

✔️ 2. Receiving Props (Child Component)
const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.company} />
      <h3>{props.company}</h3>
      <p>{props.role}</p>
    </div>
  );
};

export default Cards;

🧠 Super Easy Definition

Props = Properties → Data you pass to a component.
Parent gives it → Child uses it.

This makes your Card component reusable and dynamic.
