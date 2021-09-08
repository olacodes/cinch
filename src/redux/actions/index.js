// Action Type Creators
const types = (action) => ({
  default: `${action.toUpperCase}`,
  success: `${action.toUpperCase}_SUCCESS`,
  failed: `${action.toUpperCase}_FAILED`,
  pending: `${action.toUpperCase}_PENDING`,
});

export default types;
