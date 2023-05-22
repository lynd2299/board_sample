import React, { useState } from 'react';
import TabBtn from './TabBtn';

const Tabbar = () => {
    const [activeTab, setActiveTab] = useState("Recent");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ul className="flex mb-5 space-x-4">
            <TabBtn
                text="@ Recent"
                isActive={activeTab === 'Recent'}
                onClick={() => handleTabClick('Recent')}
            />
            <TabBtn
                text="@ Hot"
                isActive={activeTab === 'Hot'}
                onClick={() => handleTabClick('Hot')}
            />
            <TabBtn
                text="@ Settings"
                isActive={activeTab === 'Settings'}
                onClick={() => handleTabClick('Settings')}
            />
        </ul >
    );
};

export default Tabbar;
