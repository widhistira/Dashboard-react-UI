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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDAzNDYzOTQsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6IjI0NGQ4ZGU3LTcwNDQtNDBjOC1hYTk1LTkxZTBiYWZlZDI3ZCIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.oa_-E1vzgeGynsBZ4GIT9lji_e6e6bUn0rUy5WFOWZIZZp9ho9rzAAimIPfFmxP3kqPuR3yQbp_Uu3soZawm8VpYpYbHaKU6eDYuk0_Sb_S_UdchIA6e7U424uS9CRzfhzlr9247GmzsX1kkT5uF54dNOS5PAF2x-qv-IcS6byXrVpVfKX8x9Vu1J3KX3OKIfy8ui1zq9Nnn9KHdvSXc3jlStcVASAhbhQx60KIbMuRM-Y5qv3XW4cxSrejFX9GUZBGJWR2Q_t2HZwhXqCwIuBxDw6rq7H0IDas-f67EiA7w3uuqbIHrech1LeZHnnVWDvZVm7eH3_vIR81sJ2gtMw"
    };
  }
};

export default GeneralService;
