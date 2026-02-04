import React, { useState } from 'react';

export default function TabsComponent() {
  // État : index de l’onglet actif
  const [activeTab, setActiveTab] = useState(0);

  // Données des onglets
  const tabs = [
    { title: 'Tab 1', content: 'Content of Tab 1' },
    { title: 'Tab 2', content: 'Content of Tab 2' },
    { title: 'Tab 3', content: 'Content of Tab 3' },
  ];
  // Handler : change l’onglet actif
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <p>List of all tabs</p>
      {/* Boutons d’onglets */}
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => changeTab(index)}
          style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
        >
          {tab.title}
        </button>
      ))}
      {/* Contenu de l’onglet actif */}
      <div>
        <h2>{tabs[activeTab].title}</h2>
        <p>{tabs[activeTab].content}</p>
      </div>
    </>
  );
}
