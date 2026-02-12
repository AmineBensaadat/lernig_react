import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';

import ChildToParent from './pages/ChildToParent';
import ReactPortal from './pages/ReactPortal';
import CodeSplitting from './pages/CodeSplitting';
import GlobalStore from './pages/GlobalStore';
import SSR from './pages/SSR';
import UseMemo from './pages/UseMemo';
import ReactMemo from './pages/ReactMemo';
import UseCallback from './pages/UseCallback';
import UseEffect from './pages/UseEffect';
import Tables from './pages/Tables';
import FetchAPI from './pages/FetchAPI';
import TodoList from './pages/TodoList';
import Formulaire from './pages/Formulaire';
import Tabs from './pages/Tabs';
import ConteurPage from './pages/ConteurPage';
import Films from './pages/Films';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/child-to-parent" />} />
        <Route path="/child-to-parent" element={<ChildToParent />} />
        <Route path="/react-portal" element={<ReactPortal />} />
        <Route path="/code-splitting" element={<CodeSplitting />} />
        <Route path="/global-store" element={<GlobalStore />} />
        <Route path="/ssr" element={<SSR />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/hooks/useMemo" element={<UseMemo />} />
        <Route path="/hooks/ReactMemo" element={<ReactMemo />} />
        <Route path="/hooks/useCallback" element={<UseCallback />} />
        <Route path="/hooks/useEffect" element={<UseEffect />} />
        <Route path="/fetch-api" element={<FetchAPI />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="conteur" element={<ConteurPage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/404" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
