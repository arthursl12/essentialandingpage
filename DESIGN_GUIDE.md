## Essentia Social Media - Design Guide

This guide outlines the key design principles, colors, typography, and stylistic elements used in the `essentia-social-media-landing-page`. Adhering to these guidelines will ensure consistency across new pages.

---

### I. Core Principles

*   **Modern & Sleek:** Emphasis on clean layouts, subtle gradients, and contemporary aesthetics.
*   **Dark Theme:** A dominant dark background with contrasting light text and vibrant accents.
*   **Glassmorphism:** Utilizing frosted glass effects for depth and a premium feel.
*   **Dynamic & Engaging:** Incorporating subtle animations and interactive elements.
*   **Brand Consistency:** Maintaining a recognizable visual identity through consistent use of colors, fonts, and component styles.

---

### II. Colors

The color palette is built around a dark background with vibrant blues, purples, and other accent colors, often used in gradients.

#### Primary Background

*   **Dark Gray/Black:** `#050505` (used extensively for `body` background and sections)
*   **Near Black:** `bg-neutral-900` (Tailwind class, often for subtle variations in dark backgrounds)

#### Text Colors

*   **Primary Text:** `white`
*   **Secondary Text / Subdued:** `white/70`, `white/60`, `white/50`, `white/40`, `white/30`, `white/20`, `white/10` (Tailwind opacity classes, used for hierarchy and less prominent text)

#### Accent Colors (Tailwind classes primarily)

*   **Primary Gradient (Blue-Purple):**
    *   **Start:** `#00D2FF` (Light Blue/Cyan)
    *   **End:** `#9D50BB` (Purple)
    *   *Usage:* `.gradient-text`, `.cta-gradient`
*   **Blues:** `blue-400`, `blue-500`, `blue-600` (e.g., for links, icons, borders)
*   **Purples:** `purple-400`, `purple-500`, `purple-600` (e.g., for icons, specific text accents)
*   **Yellow:** `yellow-400` (used in Instagram gradient)
*   **Reds:** `red-400`, `red-500`, `red-600` (e.g., Google icon, YouTube icon)
*   **Greens:** `green-400`, `green-500` (e.g., WhatsApp, success indicators)
*   **Cyan:** `cyan-400` (e.g., TikTok icon)

#### UI Elements

*   **Glass Card (`.glass-card`):**
    *   `background: rgba(255, 255, 255, 0.03);`
    *   `backdrop-filter: blur(16px);`
    *   `border: 1px solid rgba(255, 255, 255, 0.1);`
*   **Borders:** `border-white/5`, `border-white/10`, `border-white/20` (Tailwind opacity classes)
*   **Shadows:** Often defined by Tailwind classes like `shadow-2xl`, `shadow-xl`, and custom `shadow-[0_10px_20px_rgba(157,80,187,0.3)]`.

---

### III. Typography

*   **Font Family:** `Plus Jakarta Sans`, sans-serif (imported from Google Fonts).
*   **Weights Used:** `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold/Black).
*   **Usage:**
    *   **Headings (h1, h2, h3):** Predominantly `font-black` (800) for strong impact, with large `text-4xl` to `text-7xl` sizes. `tracking-tighter` is often applied.
    *   **Body Text:** `font-medium` (500) and `leading-relaxed` for readability.
    *   **Labels/Uppercase Text:** `font-black`, `uppercase`, `tracking-[0.2em]` or `tracking-widest` for small, impactful labels.
    *   **Call-to-Action (CTA):** `font-black`, `uppercase`, larger text sizes.

---

### IV. Layout & Spacing

*   **Responsive Design:** Leverage Tailwind's responsive breakpoints (`sm`, `md`, `lg`).
*   **Max Width:** `max-w-7xl` (1280px) and `mx-auto` for content containment.
*   **Padding/Margin:** Extensive use of Tailwind's spacing scale (e.g., `px-6`, `py-32`, `mb-8`, `gap-10`).
*   **Grid Layouts:** `grid grid-cols-X` for structured content.
*   **Flexbox:** Used for alignment and distribution (`flex`, `items-center`, `justify-between`, `gap-X`).

---

### V. Components & Effects

*   **CTA Buttons (`.cta-gradient`):**
    *   `background: linear-gradient(135deg, #00D2FF 0%, #9D50BB 100%);`
    *   `rounded-2xl` for soft rounded corners.
    *   `hover:scale-105`, `active:scale-95` for subtle interaction.
*   **Glass Cards (`.glass-card`):** Applied to various sections and UI elements for a consistent aesthetic.
*   **Animations:**
    *   **Float Animation (`.animate-float`):**
        ```css
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        ```
    *   **Hover Effects:** `transform`, `scale`, `rotate`, `translate` transitions are common on hover for interactive elements.
    *   **Pulse Animation:** `animate-pulse` used for glowing effects on certain elements.
*   **Backgrounds:**
    *   **Nebula Background (`.nebula-bg`):** A fixed background image with a dark gradient overlay.
        ```css
        background-image: linear-gradient(to bottom, rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url('https://images.unsplash.com/photo-1464802686167-b939a67e06a1?q=80&w=2069&auto=format&fit=crop');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        ```
*   **Selection Style (`::selection`):**
    *   `background: #9D50BB;`
    *   `color: white;`

---

### VI. Icons

*   **Lucide React:** Icons are primarily sourced from `lucide-react` (e.g., `Instagram`, `MessageCircle`, `Rocket`, `ArrowRight`, `WhatsappIcon`).
*   **WhatsApp Icon:** Custom `WhatsappIcon` component uses `wpp.png`.

---

### VII. Implementation Notes

*   **Tailwind CSS:** Leverage Tailwind utility classes for the majority of styling.
*   **Custom CSS:** For unique effects like the text gradient, CTA gradient, glassmorphism, and specific animations, refer to the `<style>` block in `index.html`.
*   **Component-Based:** Organize UI into reusable React components.
*   **Image Assets:** Use `object-contain` or `object-cover` with explicit `w-` and `h-` classes for images.

By following these guidelines, you can create new pages that seamlessly integrate with the existing design language of the Essentia Social Media landing page.
