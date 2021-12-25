import FormData from "form-data";

const GeneralService = {
  generateFormData: objData => {
    const result = new FormData();
    const keys = Object.keys(objData);
    const values = Object.values(objData);
    keys.forEach((key, i) => result.append(key, values[i]));
    return result;
  },
  getTokenHeader: () => {
    return {
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDA0NjEyMTUsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6ImE1NmVjNmExLTliMGUtNDJlZC05N2EzLTY2YTU1ZDY1MGU0ZSIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.dt8gCClyFId6uADIyAL2ggO6Z8ixiSB3jTHuXbC12evbrv-kM1PUbm9SPfsisro1svNwJtGnTSqR6luJpHkqU97hL9JNsoS8JQSfjrC-TLeiI0hzLm9uDkfkmtkGhWXwCPO4w_d8NPEXv4i96MkhxWWrtOaUOnW5ocb8BCAPEc0qoHOSvhCy7NHk9RMuc0xGdThWZHhogFm9JCr9Cb_CnroFP6ZMCJFRepPtR2UUpukWZncKzv4K_8Ik9QeHspkYgZweAspMA6w33DpslO9xfJ5DvGSSwDTeMTLGbMx77KVxWxo_W9WJmjRK9w2CNOTxdzsoqT0WM8sQ5ojIgzg3qg"
    };
  }
};

export default GeneralService;
