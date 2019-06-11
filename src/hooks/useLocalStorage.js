import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const [localState, updateLocalState] = useState(localStorage.getItem(key))

    function onLocalStorageChange(e) {
        if (e instanceof LocalStorageChanged) {
            if (e.detail.key === key) {
                updateLocalState(e.detail.value)
            } else {
                if (e.key === key) {
                    updateLocalState(e.newValue)
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener(
            LocalStorageChanged.eventName,
            e => onLocalStorageChange(e)
        )
        if (initialValue&&localStorage.getItem(key)===null) {
            writeStorage(key, initialValue)
        }

        return () => {
            window.removeEventListener(
                LocalStorageChanged.eventName,
                e => onLocalStorageChange(e)
            )
        };
    }, [])


    return [localState, (value) => writeStorage(key, value), () => deleteStorage(key)]
}

class LocalStorageChanged extends CustomEvent {
    static eventName = 'onLocalStorageChange'
    constructor(payload) {
        super(LocalStorageChanged.eventName, { detail: payload })
    }
}

export function writeStorage(key, value) {
    localStorage.setItem(key, value)
    window.dispatchEvent(new LocalStorageChanged({ key, value }))
}

export function deleteStorage(key) {
    localStorage.removeItem(key)
    window.dispatchEvent(new ListeningStateChanged({ key, value: '' }))
}