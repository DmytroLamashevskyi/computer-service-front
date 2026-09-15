# Computer Service Landing Page

A static front-end landing page for a custom PC assembly service.

The project presents a complete service flow — from the initial offer and assembly process to team information and a request form — using plain HTML, CSS, and JavaScript without a framework.

## What it demonstrates

- Semantic multi-section landing page structure
- Custom CSS layout and visual styling
- Reusable button and content patterns
- Service/process presentation for a small business website
- Modal request form controlled with vanilla JavaScript
- Static assets, custom fonts, icons, and illustrations
- Framework-free front-end implementation

## Page structure

The page contains:

- Header navigation and call-to-action
- Hero section for the PC assembly offer
- Promotional countdown layout
- Service overview
- Four-step work process: request, selection, assembly, delivery
- Team section
- Final call-to-action
- Modal request form
- Social links / visual footer area

## Interaction

The JavaScript layer intentionally stays small.

All request buttons share the `.modal-button` class. A single script binds those buttons to the same modal window and handles opening and closing the request form.

```text
Request button
      ↓
modal-button listener
      ↓
show request form
      ↓
close button → hide form
```

The form is currently a front-end prototype: it does not submit data to a backend service.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static image and font assets

No runtime dependencies or build step are required.

## Run locally

Clone the repository:

```bash
git clone https://github.com/DmytroLamashevskyi/computer-service-front.git
cd computer-service-front
```

Then open `index.html` directly in a browser, or serve the directory with any static HTTP server.

For example:

```bash
npx serve .
```

## Project structure

```text
computer-service-front/
├── css/        # Normalize and project styles
├── figma/      # Design-related source assets
├── fonts/      # Local fonts
├── img/        # Images and icons
├── js/
│   └── main.js # Modal interaction
└── index.html  # Main page
```

## Project status

Completed static front-end project. It is kept as an example of building a complete marketing landing page with a minimal, framework-free stack.
