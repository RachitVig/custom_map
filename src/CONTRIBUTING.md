# Contributing

First off, thank you for considering contributing to this project! 🎉

Contributions of all kinds are welcome, whether it's fixing bugs, improving documentation, refactoring code, or adding new features.

---

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top-right of this repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

### 5. Start the Development Server

```bash
npx parcel index.html
```

---

# Development Workflow

Create a branch from `develop`.

```bash
git checkout develop
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

```
feature/custom-map
feature/company-marker
bugfix/info-window
refactor/custom-map
docs/readme
```

---

## Commit Message Convention

Please follow **Conventional Commits**.

```
feat: add custom marker support
feat: implement company model
fix: resolve InfoWindow duplication
docs: update README
refactor: simplify marker creation
style: format project
```

---

## Pull Requests

Before submitting a Pull Request:

- Build passes successfully.
- No TypeScript errors.
- Documentation is updated.
- Code has been tested.

---

## Code Style

- Use TypeScript.
- Prefer interfaces over `any`.
- Keep classes focused on a single responsibility.
- Follow the existing project style.
- Write meaningful variable and function names.

---

## Reporting Bugs

Please include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details
- Screenshots (if applicable)

---

## Feature Requests

When suggesting a feature, please explain:

- The problem it solves
- Why it would improve the project
- A possible implementation (optional)

---

Thank you for contributing! 🚀