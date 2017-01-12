export const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
export const CLOSE_AUTH_MODAL = "CLOSE_AUTH_MODAL";

export const openAuthModal = (form) => ({
  type: OPEN_AUTH_MODAL,
  form: form
});

export const closeAuthModal = () => ({
  type: CLOSE_AUTH_MODAL
});
