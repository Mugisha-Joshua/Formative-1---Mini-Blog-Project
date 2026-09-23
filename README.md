# Dev Insights – Mini Blog

A small internal blog for the "Dev Insights" team to share web development tips. It is built with **React**, **TypeScript** and **Vite**.

## Getting Started

This project uses **Vite** as its dev server and build tool. You need [Node.js](https://nodejs.org/) (v20.19 or newer) and npm.

### Install

```bash
git clone https://github.com/Mugisha-Joshua/Formative-1---Mini-Blog-Project.git
cd Formative-1---Mini-Blog-Project
npm install
```

### Run

```bash
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

### Test

- `npm run build` type-checks the whole project with TypeScript and creates a production build. It fails if there are any type errors.
- `npm run preview` serves that production build locally.
- To check the HOC, open the browser console: you will see `PostList mounted`. In development, React's StrictMode mounts components twice on purpose, so you will also see `PostList unmounted` followed by `PostList mounted` again.

## Project Structure

```
src/
├── components/   Header, PostList, Post
├── hoc/          withLogger
├── styles/       global.css
├── types/        Post type
├── utils/        getPreview
├── App.tsx
└── main.tsx
```

## Design Choices

### Component types

All components are **functional components**, including `Post`. `Post` only receives data through props and renders it, with no state or lifecycle logic, so a class component would add boilerplate (`render`, `this.props`) for no benefit. Functional components are shorter and easier to read, they work with hooks, and they can be wrapped in `React.memo`, which gives the same optimization as `PureComponent`. The `withLogger` HOC also uses the `useEffect` hook for mount and unmount logging instead of `componentDidMount` and `componentWillUnmount`.

### Styling methods

- **External CSS** (`src/styles/global.css`): page-wide styles such as the body, the layout and the `Header`. Plain CSS is the simplest choice for global rules that do not depend on props.
- **Styled Components** (`Post.tsx`): the post card, title and meta text. Keeping these styles next to the component makes `Post` self-contained, and they can change based on props.
- **Conditional styling**: posts written by the featured author (`Mugisha Joshua`) get a light blue background. This uses a styled-components transient prop (`$featured`), so the prop is not passed through to the DOM.

### Optimization

- **`React.memo`** wraps `Post`, so a post only re-renders when its `post` prop changes, not every time its parent renders.
- **Unique `key` props**: `PostList` uses each post's `id` as its `key`, which lets React track each item correctly between renders.
- **`withLogger` HOC**: it logs to the console when a component mounts and unmounts, and it is applied to `PostList`. It gets its label from the wrapped component's name, so it can be reused on any component.

## Challenges

- **Seeing each mount logged twice:** at first `withLogger` looked broken because the mount message appeared twice in the console. It turned out React's StrictMode mounts, unmounts and remounts components in development on purpose to catch side-effect bugs. This does not happen in the production build.
- **Styled-components props reaching the DOM:** passing a normal `featured` prop to a styled element made React warn about an unknown attribute. Renaming it to the transient prop `$featured` fixed this.
- **Showing a date correctly:** a date string with no time part is read as UTC, so it can show up as the previous day in some time zones. Giving each post a full local date-time fixed this.

## Libraries Used

| Package | Purpose |
| --- | --- |
| react, react-dom | UI library |
| styled-components | CSS-in-JS styling |
| vite | Dev server and build tool |
| @vitejs/plugin-react | React support for Vite |
| typescript | Static typing |
| @types/react, @types/react-dom | React type definitions |
