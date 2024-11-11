# Avian JETOS Assessment
This assessment repository implements the UI Webpage based on the [provided Figma Design](https://www.figma.com/design/GqCdwzvELoeZd9Spj3GKxX/Font-end-Testing?node-id=0-1&node-type=canvas&t=UTjaVAk4c4E1tHKR-0).

Demo: https://avian-jetos-assessment.netlify.app/

![image](https://github.com/user-attachments/assets/c851de9b-ebf5-4a3f-ad88-e3968326a023)

## How to run:

- Install Dependencies

```
cd <project-folder>
npm install
```

- Enable Husky for commitlint

```
npm run prepare
```

- Run the Project

```
npm run dev
```

- Navigate to `http://localhost:3000`

## Run with build:

- Building the project

```
npm run build
```

- Run the Built Project

```
npm run preview
```

- Navigate to `http://localhost:4173`

## Packages:

| package            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| iconsax-react      | [Iconsax React Icons](https://iconsax-react.pages.dev/)|
| antd               | Ant Design Components                                |
| redux-toolkit      | Global state Management                              |
| redux-persist      | Persist in local storage if needed                   |
| react-helmet       | Help with SEO and head title                         |
| react-router-dom   | Help with Navigation                                 |
| classNames         | className state management, compatible with tailwind |
| urlcat             | conventional for API Path/URL replacement            |
| tailwind & less    | tailwind and less with preprocessor config           |
| eslint             | tracking code and convention                         |
| husky & commitlint | linting towards git commit messages                  |

## Folder Structure

```
├── src
│   ├── components (common components which can be shared and re-use in multiple place)
│   │   ├── **/*.less (Additional style in case tailwind can not support)
|   |   ├── hooks/use*.ts (Custom hook to handle logic for that component (may not can be reuse))
|   |   ├── index.tsx (Component only contain UI state)
│   ├── locales (i18n)
│   ├── layout
│   │   ├── components (common layout components which can be shared and re-use in multiple layout)
│   │   ├── LayoutName (folder: Define page container for specific page)
|   |   |   ├── components(components serves for specific Layout)
|   |   |   ├── hooks/use*.ts (Custom hook to handle logic for that Layout (may not can be reuse))
|   |   |   ├── index.tsx (Component only contain UI state)
│   ├── services (API calls)
│   │   ├── ServiceName (related to one model)
│   ├── hooks (custom hook handle common logic (not related to one component))
|   |   ├── use*.ts
│   ├── pages
|   |   |   ├── PageName (folder contain page source code)
|   |   |   |   ├── components (Container all components use in specific page)
|   |   |   |   |   ├── ComponentName
|   |   |   |   |   |   ├── hooks/useComponentName.ts (Custom hook to handle logic for component (may not can be reuse))
|   |   |   |   |   |   ├── ComponentName.tsx
|   |   |   |   |   |   ├── ComponentName.less
|   |   |   |   |   |   ├── index.ts
|   |   |   |   ├── hooks/*.ts (Define logics for specific page)
|   |   |   |   ├── index.tsx
|   |   |   |   ├── PageName.less (styles for page)
│   ├── styles
|   |   ├── globals.less (Declare global css here)
│   ├── utils (Define commonly used Logic here)
|   |   ├── *.ts
├── public (image, logo, fav.ico)
├── package.json
├── package-lock.json
├── postcss.config.ts
└── tsconfig.json (Config path, import and export for TypeScript)
```
