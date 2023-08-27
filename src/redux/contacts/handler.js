export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts = payload;
};

export const handleFulfilledAddContacts = (state, { payload }) => {
  state.contacts.unshift(payload);
};

export const handleFulfilledDeleteContacts = (state, { payload }) => {
  const index = state.contacts.findIndex(contact => contact.id === payload.id);
  state.contacts.splice(index, 1);
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

// export const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// export const handleRejected = (state, { error }) => {
//   state.isLoading = false;
//   state.error = error.message;
// };
