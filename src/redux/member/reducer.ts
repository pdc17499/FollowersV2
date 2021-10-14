const initialState = {
  text: [''],
};

export default function memberReducer(
  state = initialState,
  action: { type: any },
) {
  switch (action.type) {
    //   case "SEND_TEXT":
    //     return {
    //       text: [action.payload]
    //     };

    default:
      return state;
  }
}
