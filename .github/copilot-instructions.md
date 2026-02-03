# Copilot Instructions for LearningReact

This is a React + Vite learning project exploring React patterns and hooks. The app is a single-page application with client-side routing showcasing key React concepts.

## Architecture Overview

**Stack:** React 19 + Vite + React Router 7 + React Context (no external state library)

**Structure:**

- [src/main.jsx](../src/main.jsx): Entry point that wraps app with `BrowserRouter` and `GlobalProvider`
- [src/App.jsx](../src/App.jsx): Route configuration using React Router
- [src/Layout.jsx](../src/Layout.jsx): Master layout with `<Sidebar>` and `<Outlet>` for nested routing
- `src/pages/`: Educational page components demonstrating specific React concepts
- `src/components/`: Reusable UI components used across pages

**State Management:**

- Global state via [src/GlobalContext.jsx](../src/GlobalContext.jsx) with custom `useGlobal()` hook for user/theme
- Local component state with `useState()` for UI concerns (modals, form inputs, loading states)

## Key Patterns & Conventions

### 1. Global Context Usage (Not Redux/Zustand)

Access global state with the `useGlobal()` hook—returns `{user, setUser, theme, setTheme}`:

```jsx
// pages/GlobalStore.jsx shows example
const { user, setUser, theme, setTheme } = useGlobal();
```

This is intentionally simple for learning. Avoid over-engineering—keep global state minimal.

### 2. Async Data Loading Pattern

Pages like [pages/FetchAPI.jsx](../src/pages/FetchAPI.jsx) and [pages/TodoList.jsx](../src/pages/TodoList.jsx) use consistent patterns:

```jsx
const [data, setData] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      // API call
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, []);
```

- Always use `finally` block to set loading state
- Show loading UI before rendering data
- Show error UI if error state exists

### 3. Filtering with useMemo (Performance)

[pages/Tables.jsx](../src/pages/Tables.jsx) demonstrates memoization for filtering:

```jsx
const filteredUsers = useMemo(() => {
  return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
}, [users, search]);
```

Use `useMemo` when filtering/transforming lists to avoid unnecessary recalculations.

### 4. React.lazy + Suspense for Code Splitting

[pages/CodeSplitting.jsx](../src/pages/CodeSplitting.jsx) shows lazy loading:

```jsx
const HeavyComponent = React.lazy(() => import('../components/HeavyComponent'));

<Suspense fallback={<div>Chargement du composant...</div>}>
  <HeavyComponent />
</Suspense>;
```

Use for components only loaded on specific routes.

### 5. React Portals for Modals

[components/Modal.jsx](../src/components/Modal.jsx) uses `createPortal()` to render outside DOM hierarchy:

```jsx
createPortal(<div>Modal content</div>, document.getElementById('modal-root'));
```

Modal root is defined in [index.html](../index.html). Avoids z-index and overflow issues.

### 6. Parent-Child Communication

[pages/ChildToParent.jsx](../src/pages/ChildToParent.jsx) uses callback props:

```jsx
// Parent passes callback
<Child onSendData={handleMessageFromChild} />

// Child calls it
<button onClick={() => onSendData("data")}>Send</button>
```

No event emitters—use prop callbacks for controlled data flow.

### 7. Sidebar Navigation with Expandable Sections

[components/Sidebar.jsx](../src/components/Sidebar.jsx) demonstrates:

- Hardcoded links array (simple management)
- Collapsible sections (hooks state)
- React Router `<Link>` for navigation

Don't add dynamic routing management—links are manually configured.

## Development Workflow

**Dev server:** `npm run dev` (Vite HMR enabled via `@vitejs/plugin-react`)

**Linting:** `npm run lint` (ESLint configured with React hooks rules)

**Build:** `npm run build` (outputs to `dist/`)

**Preview:** `npm run preview` (local production build)

## Important Conventions

1. **French comments/documentation** — This is a learning project with bilingual content. Keep comments matching existing style.

2. **JSX component files** — All components use `.jsx` extension (even single exports).

3. **Functional components only** — No class components. All use hooks.

4. **Export convention** — Use `export default` for pages and most components.

5. **Styling** — Inline styles (CSS-in-JS objects) are preferred over CSS imports. See [components/Modal.jsx](../src/components/Modal.jsx) and [components/CodeBlock.jsx](../src/components/CodeBlock.jsx).

6. **FormValidationComponent** — Exists but is incomplete ([src/components/FormValidationComponent.jsx](../src/components/FormValidationComponent.jsx)). When adding form validation, follow the async data pattern above.

## When Adding Features

- **New page:** Create in `src/pages/`, export in [App.jsx](../src/App.jsx) routes, add link to [components/Sidebar.jsx](../src/components/Sidebar.jsx)
- **New component:** Place in `src/components/` if reusable, or inline if page-specific
- **Global state:** Add to [GlobalContext.jsx](../src/GlobalContext.jsx) only if multiple pages need it
- **Hooks usage:** Leverage `useMemo`, `useCallback`, `React.memo` appropriately per existing examples
- **API calls:** Mirror the FetchAPI pattern with loading/error/success states

## Key Files Reference

| File                                                        | Purpose                              |
| ----------------------------------------------------------- | ------------------------------------ |
| [src/App.jsx](../src/App.jsx)                               | Route definitions and root component |
| [src/GlobalContext.jsx](../src/GlobalContext.jsx)           | Global state provider and hook       |
| [src/Layout.jsx](../src/Layout.jsx)                         | Master layout with sidebar           |
| [src/components/Sidebar.jsx](../src/components/Sidebar.jsx) | Navigation menu                      |
| [pages/FetchAPI.jsx](../src/pages/FetchAPI.jsx)             | Template for async data loading      |
| [pages/CodeSplitting.jsx](../src/pages/CodeSplitting.jsx)   | React.lazy example                   |
| [pages/ReactPortal.jsx](../src/pages/ReactPortal.jsx)       | Modal with Portal example            |

---

**Project Goal:** Educational repository demonstrating React patterns and best practices. Prioritize clarity and learning value over production optimization.
