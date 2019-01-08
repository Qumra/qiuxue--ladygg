export const setSessionStorage = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(key, value);
}

export const getSessionStorage = (key) => {
    if (!key) return;
    return window.sessionStorage.getItem(key);
}

export const setLocalStorage = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
}

export const getLocalStorage = (key) => {
    if (!key) return;
    return window.localStorage.getItem(key);
}