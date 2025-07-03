# ProjectBolt - Project Structure Documentation

## Overview
ProjectBolt is an Angular web application with a basic home page. This document outlines the structure of the project, its components, and how to run and test the application.

## Project Structure

```
ProjectBolt/
├── src/                      # Source files
│   ├── app/                  # Application code
│   │   ├── home/             # Home component
│   │   │   ├── tracklist.component.ts       # Component logic
│   │   │   ├── tracklist.component.html     # Component template
│   │   │   ├── home.component.css      # Component styles
│   │   │   └── tracklist.component.spec.ts  # Component tests
│   │   ├── app.ts            # Main app component
│   │   ├── app.html          # Main app template
│   │   ├── app.css           # Main app styles
│   │   ├── app.routes.ts     # Application routes
│   │   ├── app.config.ts     # App configuration
│   │   └── app.spec.ts       # App component tests
│   ├── index.html            # Main HTML file
│   ├── main.ts               # Application entry point
│   └── styles.css            # Global styles
├── angular.json              # Angular CLI configuration
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project README
```

## Components

### App Component
- **Purpose**: Serves as the root component of the application
- **Files**: 
  - `app.ts`: Component logic
  - `app.html`: Template with header, router-outlet, and footer
  - `app.css`: Styles for the app component

### Home Component
- **Purpose**: Displays the home page with features and call-to-action
- **Files**:
  - `tracklist.component.ts`: Component logic with title and description properties
  - `tracklist.component.html`: Template with header, features section, and CTA section
  - `home.component.css`: Styles for the home component
  - `tracklist.component.spec.ts`: Tests for the home component

## Routing
The application uses Angular's router to handle navigation:
- Default route (`''`): Displays the home component
- `/home` route: Also displays the home component
- Wildcard route (`**`): Redirects to the default route

## Styling
- Component-specific styles are in their respective CSS files
- The application uses a responsive design that works on mobile, tablet, and desktop

## Testing
- Each component has a corresponding spec file for unit tests
- Tests verify component creation, properties, and rendered elements
- Run tests with `ng test`

## Running the Application
1. Install dependencies: `npm install`
2. Start the development server: `ng serve`
3. Open a browser and navigate to `http://localhost:4200/`

## Building for Production
Run `ng build` to build the project for production. The build artifacts will be stored in the `dist/` directory.
