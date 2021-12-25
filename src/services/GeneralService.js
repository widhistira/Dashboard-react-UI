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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDA0NDA2NjUsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6IjI5OWVlYjQxLTQ2ZTctNDY2NC04YjY1LTEyMTlmNDM1YmMwZCIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.NN-cWhM7WE8bH_XOBPghzEF5BmvmmGM8nOXTp_9uu_aJvOd_Jr7lKicNKLL0xSuwytEGL2k6t2HMxzaMGSzM7e4n8MAVfjQPWS0BAiX7mLNKRFKh1VGjBcOfDt4yu8dJVBFgzxQIPxQycvbDWMMd4-u--MHxR-QI93D7fV_oP000NGnWfJUUqE58M7CKOJt7-cc5eL0tPyWROEYhhG1bQzPJZYRgk7514IKp8iEuFu3HBF0p8El6jNuXs6NVuF2DJz_bJknwWug0MgT6xKSzzutvbfcqplqIX_G2QwKR84pNtJEyrFbafwWocowa_shI4DRL3N9lt3RjsNessmtGxA"
    };
  }
};

export default GeneralService;
