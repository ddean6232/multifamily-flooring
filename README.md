# Multifamily Flooring Website

This is a modern, high-conversion website for **Multifamily Flooring**, optimized for deployment on **Cloudflare Pages**.

## 🚀 Deployment Instructions

1.  **Gihub Repository**: 
    - Create a new repository on [GitHub](https://github.com/new).
    - Commit and push all files in this directory to a branch (usually `main`).
2.  **Cloudflare Pages Setup**:
    - Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
    - Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
    - Select your new `Multifamily Flooring` repository.
    - Set the **Build command** to: (Empty/None)
    - Set the **Build output directory** to: `/` (Root directory)
    - Click **Save and Deploy**.

## 🛠 Features
-   **Static Site**: Ultra-fast performance.
-   **Cloudflare Functions**: The contact form is wired to `/api/submit` which can be handled by a Cloudflare Worker/Function.
-   **Security**: Includes a `_headers` file with CSP and security best practices.
-   **SEO**: Fully optimized with Open Graph and Twitter meta tags.

## 📁 File Structure
-   `index.html`: Main website entry point.
-   `style.css`: Modern design system and responsive styles.
-   `script.js`: Interactive elements and form handling.
-   `logo.jpeg`: Company branding asset.
-   `_headers`: Cloudflare-specific security and caching rules.
-   `functions/`: (Optional) Logic for form submissions.
