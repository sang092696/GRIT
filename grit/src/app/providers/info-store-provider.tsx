/* 'use client' 

import React, { createContext, useContext, ReactNode } from 'react';
import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { createInfoStore, InfoStore } from '@/app/store/info-store';

// Create a context to hold the store
const InfoStoreContext = createContext<ReturnType<typeof createStore<InfoStore>> | null>(null);

export type InfoStoreType = ReturnType<typeof createInfoStore>;

export interface InfoStoreProviderProps {
    children: ReactNode;
}

// Provider component
export const InfoStoreProvider = ({
    children,
}: InfoStoreProviderProps) => {
    const store = React.useRef(createInfoStore());

    return (
        <InfoStoreContext.Provider value={store.current}>
            {children}
        </InfoStoreContext.Provider>
    );
};

// Custom hook to use the InfoStore
export const useInfoStore = <T,>(selector: (state: InfoStore) => T) => {
    const store = useContext(InfoStoreContext);
    if (!store) {
        throw new Error('useInfoStore must be used within an InfoStoreProvider');
    }
    return useStore(store, selector);
};
 */