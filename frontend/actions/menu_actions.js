export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RESET_MENUS = 'RESET_MENUS';
export const ADD_MENU = 'ADD_MENU';
export const REMOVE_MENU = 'REMOVE_MENU';

export const toggleMenu = (menu, otherMenus = false) => ({
  type: TOGGLE_MENU,
  menu,
  otherMenus,
});

export const resetMenus = () => ({
  type: RESET_MENUS,
});

export const addMenu = (menu) => ({
  type: ADD_MENU,
  menu,
});

export const removeMenu = (menu) => ({
  type: REMOVE_MENU,
  menu,
});
