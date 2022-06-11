import { useSnackbar } from "notistack";

const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const info = (message, options = {}) =>
    enqueueSnackbar(message, { ...options, variant: "info" });

  const warning = (message, options = {}) =>
    enqueueSnackbar(message, { ...options, variant: "warning" });

  const success = (message, options = {}) =>
    enqueueSnackbar(message, { ...options, variant: "success" });

  const error = (message, options = {}) =>
    enqueueSnackbar(message, { ...options, variant: "error" });

  const toast = (message, options = {}) => enqueueSnackbar(message, options);

  const close = (key) => closeSnackbar(key);

  return {
    info,
    warning,
    success,
    error,
    toast,
    close,
  };
};

export default useNotify;
