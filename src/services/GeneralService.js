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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDA1NDE4NDYsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6Ijk5YmM4ZmE3LWU4YmUtNDEyNC1iZjI0LWQ3OWRkNWQ0YjExNSIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.JrsPH6X9MiFtN2PNcvzngzIF3yZUEFm3Z7ADxwSbmJ__7OmBLpyWm-FdsNey8CD2V59qQl8NDFJOcbmFV4L9Zpu_uk0KNw-sF3T5Qoy-YRSLRGqCTSDsxYC3AI8R7OHa-AX5vNWTzf1m3tRODqBWMW5LLpfM5GMqGskeXAkMYfeEmSmsCwTWa0CEoMIIiwgVVGLQncx208VE_6w9NlcJdewWh5oVt6GmYZbZlkgyB3sUfQ-1EG_u98mkClOo7ZL7srYqYpAtU37aX9EeMgRqQ9zarmdjHzPI8QVqg2kSAbnvrQpV1QLaGAt69c4DvYBvGaXTku3CXmgBNfQozJu6hA"
    };
  }
};

export default GeneralService;
