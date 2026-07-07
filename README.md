# 🗺️ Custom Mappable Map (TypeScript)

A professional, secure, and highly decoupled TypeScript wrapper around the Google Maps JavaScript API.

This project demonstrates advanced **Object-Oriented Programming (OOP)** principles, especially **Inversion of Control (IoC)** through TypeScript Interfaces, resulting in clean, maintainable, and loosely coupled code.

---

# 🚀 Features

- ✅ Decoupled architecture using a `Mappable` interface
- ✅ Type-safe development with `@types/google.maps`
- ✅ Secure API key management using Parcel environment variables
- ✅ Dynamic Google Maps script loading
- ✅ Automatic InfoWindow management (only one open at a time)
- ✅ Easy to extend with any custom domain model (User, Company, Store, etc.)

---

# 📂 Project Structure

```text
.
├── src/
│   ├── CustomMap.ts
│   └── index.ts
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

# 📄 File Description

### `src/CustomMap.ts`

Contains the Google Maps wrapper class and the `Mappable` interface.

The map never depends on domain-specific classes—it only knows about the `Mappable` contract.

---

### `src/index.ts`

Application entry point.

Responsibilities include:

- Loading Google Maps dynamically
- Reading the API key from environment variables
- Creating sample objects
- Rendering markers on the map

---

### `.env`

Stores your local Google Maps API Key.

**Never commit this file to GitHub.**

Example:

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

---

### `.env.example`

Template file for contributors.

```env
PARCEL_GOOGLE_MAPS_API_KEY=
```

---

### `index.html`

Minimal HTML page used by Parcel to bootstrap the application.

---

### `package.json`

Contains project metadata, dependencies, and development scripts.

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure environment variables

Create a `.env` file in the project root.

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

---

## 4. Start the development server

```bash
npx parcel index.html
```

Open your browser:

```
http://localhost:1234
```

---

# 🏗️ Architecture

The project follows the **Inversion of Control (IoC)** principle.

Instead of depending on specific classes like:

- User
- Company
- Store

the map only depends on the `Mappable` interface.

```ts
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}
```

Any class implementing this interface can be displayed on the map.

Example:

```ts
class User implements Mappable {
  location = {
    lat: 28.6139,
    lng: 77.2090
  };

  markerContent(): string {
    return "<h3>User Location</h3>";
  }
}
```

Then simply add it to the map:

```ts
const map = new CustomMap("map");

const user = new User();

map.addMarker(user);
```

---

# 🔐 Secure API Keys

This project **does not hardcode** Google Maps API keys.

Instead, Parcel injects the key from an environment variable.

```ts
const apiKey = process.env.PARCEL_GOOGLE_MAPS_API_KEY;
```

This ensures:

- API keys stay private
- `.env` remains local
- Safe GitHub repositories
- Easy deployment

---

# 🧠 Dynamic Google Maps Loading

Instead of including the Google Maps script inside `index.html`, it is loaded dynamically.

Benefits:

- Prevents `google is not defined` errors
- Loads only when needed
- Cleaner application startup
- Better separation of concerns

---

# 💬 Smart InfoWindows

The wrapper maintains a single reusable `InfoWindow`.

Whenever another marker is clicked:

- Previous popup closes automatically
- New popup opens
- Prevents multiple overlapping windows

---

# 📦 Technologies Used

- TypeScript
- Google Maps JavaScript API
- Parcel Bundler
- Node.js
- HTML5

---

# 💡 Example

```ts
const map = new CustomMap("map");

const user = new User(
  "Rahul",
  28.6139,
  77.2090
);

map.addMarker(user);
```

---

# 🎯 Learning Concepts

This project demonstrates:

- Object-Oriented Programming (OOP)
- Interfaces
- Inversion of Control (IoC)
- Dependency Inversion Principle
- Loose Coupling
- TypeScript Generics & Types
- Google Maps API
- Environment Variables
- Dynamic Script Loading
- Event Handling

---

# 📝 Note

This repository **does not include an `index.html` file** by default to keep the project flexible and easy to integrate into existing applications.

You can create your own `index.html` based on your project requirements.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Custom Mappable Map</title>
</head>
<body>
  <div id="map" style="width:100%; height:100vh;"></div>

  <script src="./src/index.ts" type="module"></script>
</body>
</html>
```

---

# 🔑 Google Maps API Setup

This project loads the Google Maps JavaScript API dynamically using an environment variable.

Create a `.env` file in the project root:

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

Then the API key is injected automatically:

```ts
const apiKey = process.env.PARCEL_GOOGLE_MAPS_API_KEY;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
script.async = true;
script.defer = true;

document.head.appendChild(script);
```

> **Need a Google Maps API key?**
>
> Visit the Google Maps Platform documentation:
>
> https://developers.google.com/maps/documentation/javascript/get-api-key

---

# ⚠️ Important

Before using the Maps JavaScript API:

- Enable **Maps JavaScript API** in your Google Cloud project.
- Create an API key.
- (Recommended) Restrict the API key by HTTP referrers for better security.
- Add the key to your local `.env` file.

## ⭐ If you found this project helpful, consider giving it a star on GitHub!
