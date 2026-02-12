import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/child-to-parent', label: 'Child → Parent' },
  { path: '/react-portal', label: 'React Portal' },
  { path: '/code-splitting', label: 'Code Splitting' },
  { path: '/global-store', label: 'Global Store' },
  { path: '/ssr', label: 'SSR' },
  {
    label: 'Hooks',
    children: [
      { path: '/hooks/useMemo', label: 'useMemo' },
      { path: '/hooks/ReactMemo', label: 'React.memo' },
      { path: '/hooks/useCallback', label: 'useCallback' },
      { path: '/hooks/useEffect', label: 'useEffect' },
    ],
  },
  { path: '/tables', label: 'Tables' },
  { path: '/fetch-api', label: 'Fetch API' },
  { path: '/todo-list', label: 'Todo List' },
  { path: '/formulaire', label: 'Formulaire' },
{ path: '/tabs', label: 'Tabs' }, { path: '/conteur', label: 'Conteur' }, { path: '/films', label: 'Films' }, ]; function Sidebar() { const [openHooks, setOpenHooks] = useState(false);
  return (
    <aside
      style={{
        width: '260px',
        padding: '20px',
        borderRight: '1px solid #ddd',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li key={link.label} style={{ marginBottom: '12px' }}>
            {link.children ? (
              <>
                <div
                  onClick={() => setOpenHooks(!openHooks)}
                  style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  {link.label} {openHooks ? '▼' : '▶'}
                </div>

                {openHooks && (
                  <ul
                    style={{
                      listStyle: 'none',
                      paddingLeft: '15px',
                      marginTop: '8px',
                    }}
                  >
                    {link.children.map((sub) => (
                      <li key={sub.path} style={{ marginBottom: '8px' }}>
                        <Link to={sub.path} style={{ textDecoration: 'none' }}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={link.path} style={{ textDecoration: 'none' }}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
