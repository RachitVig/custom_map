# 🗺️ Custom Mappable Map (TypeScript)

A professional, secure, and highly decoupled TypeScript wrapper around the Google Maps JavaScript API.

This project demonstrates advanced **Object-Oriented Programming (OOP)** principles, especially **Inversion of Control (IoC)** through TypeScript Interfaces, resulting in clean, maintainable, and loosely coupled code.

---

# 🚀 Features

- ✅ Decoupled architecture using a `Mappable` interface
- ✅ Type-safe development with `@types/google.maps`
- ✅ Secure API key management using Parcel environment variables
- ✅ Dynamic Google Maps script loading
- ✅ Automatic InfoWindow handling
- ✅ Easy extension with any custom domain model (`User`, `Company`, `Store`, etc.)
- ✅ Uses Faker.js for generating realistic mock data

---

# 🌱 Why Open Source?

This project was originally created as part of my learning journey while exploring TypeScript, Object-Oriented Programming, and software design principles.

During this process, I implemented concepts like:

- Interfaces and contracts
- Inversion of Control (IoC)
- Dependency Inversion Principle
- Loose coupling
- Reusable architecture patterns
- Working with external APIs
- Environment variable management

I decided to open-source this project because I believe this implementation can help other developers who are learning similar concepts.

My goal is to share a practical example of how these concepts can be applied in a real-world project structure.

Feel free to explore, learn from it, improve it, and contribute.

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
├── package.json
└── README.md
```

---

# 📄 File Description

## `src/CustomMap.ts`

This is the core of the project.

It contains:

- The `Mappable` interface
- The `CustomMap` wrapper class
- Marker creation logic
- InfoWindow handling

The map does not depend on any specific application class. It only depends on the `Mappable` contract.

---

## `src/index.ts`

Application entry point.

Responsibilities:

- Loading Google Maps dynamically
- Reading environment variables
- Creating example implementations
- Adding markers to the map

---

## `.env`

Stores your local Google Maps API key.

⚠️ Never commit this file.

Example:

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

---

## `.env.example`

Example configuration file for contributors.

```env
PARCEL_GOOGLE_MAPS_API_KEY=
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

---

## 4. Run Development Server

```bash
npx parcel index.html
```

Open:

```
http://localhost:1234
```

---

# 🏗️ Core Architecture

The heart of this project is the `CustomMap.ts` file.

Instead of creating separate logic for every entity, the map follows a contract using the `Mappable` interface.

```ts
export interface Mappable {

  location:{
    lat:number;
    lng:number;
  };

  markerContent():string;
}
```

Any class implementing this interface can be added to the map.

Examples:

- User
- Company
- Restaurant
- Hotel
- Store

---

## CustomMap Implementation

```ts
export class CustomMap {

private googleMap:google.maps.Map;

constructor(divId:string){

this.googleMap = new google.maps.Map(
document.getElementById(divId) as HTMLElement,
{
zoom:1,
center:{
lat:0,
lng:0
}
});

}


addMarker(mappable:Mappable):void{

const marker = new google.maps.Marker({

map:this.googleMap,

position:{
lat:mappable.location.lat,
lng:mappable.location.lng
}

});


marker.addListener("click",()=>{

const infoWindow = new google.maps.InfoWindow({

content:mappable.markerContent()

});


infoWindow.open(
this.googleMap,
marker
);

});

}

}
```

---

# 🧠 Design Principles Used

This project demonstrates:

- Object-Oriented Programming (OOP)
- Interfaces
- Inversion of Control (IoC)
- Dependency Inversion Principle (DIP)
- Loose Coupling
- Separation of Concerns
- Reusable Components
- Type Safety

---

# 🔐 Secure API Key Management

Google Maps API keys are not hardcoded.

Instead, Parcel loads them from environment variables.

```ts
const apiKey = process.env.PARCEL_GOOGLE_MAPS_API_KEY;
```

Benefits:

- API keys remain private
- `.env` stays local
- Safer GitHub repositories
- Easier deployment

---

# 🧠 Dynamic Google Maps Loading

The Google Maps script is loaded dynamically instead of directly adding it to HTML.

Benefits:

- Prevents `google is not defined` errors
- Cleaner application startup
- Better control over loading process

---

# 💬 InfoWindow Management

Each marker click creates an InfoWindow containing custom content.

This allows every model implementing `Mappable` to control its own marker information.

---

# 📝 Customization

This repository does not include an `index.html` file by default to keep the project flexible.

You can create your own HTML file according to your application requirements.

Example:

```html
<!DOCTYPE html>

<html>

<head>
<title>Custom Mappable Map</title>
</head>

<body>

<div id="map" style="height:100vh;width:100%">
</div>

<script src="./src/index.ts" type="module"></script>

</body>

</html>
```

---

# 🔑 Google Maps API Setup

Create a Google Maps API key:

https://developers.google.com/maps/documentation/javascript/get-api-key


Add it to your `.env`:

```env
PARCEL_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

The application will load Google Maps automatically:

```ts
const script=document.createElement("script");

script.src=
`https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

script.async=true;
script.defer=true;

document.head.appendChild(script);
```

---

# 📦 Technologies Used

- TypeScript
- Google Maps JavaScript API
- Parcel
- Node.js
- Faker.js

---

# 🙏 Acknowledgements

## Google Maps JavaScript API

Used for:

- Interactive maps
- Markers
- Events
- InfoWindows

https://developers.google.com/maps/documentation/javascript


## Faker.js

Used to generate realistic fake data such as:

- Names
- Locations
- Companies
- Random mock information

https://fakerjs.dev/


Special thanks to all open-source contributors who make these tools available for developers.

---

# ⚠️ Disclaimer

This project is created for educational and demonstration purposes.

I do not take responsibility for:

- Incorrect configuration or usage
- Third-party API costs or limitations
- Data accuracy from external services
- Modifications made after forking this project

Users are responsible for:

- Managing their own API keys
- Following third-party service policies
- Reviewing and adapting the code for their own requirements

Use this project at your own discretion.

---

# 📜 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

⭐ If this project helped you understand TypeScript architecture or Google Maps integration, consider giving it a star!
