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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDA1MzM5ODQsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6IjU1NzllNGNhLTczZmYtNDg0OC04NDEyLWQxNmRkM2NmOWYxYyIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.izgeqZKuABKzx-2v2MX460b_mXwS5tu7Rzf0mRbhpr9NoMc-YtPXMYlWMqKVIhPvsPd3Nx5JHip7gIEUB9TfodEG4tWLBMfBiJDnf-nMQ4RxHnbJvctI6LyIeevSsKo-xM8XDa6G3on7JYQhEfPl3bj_g2dmBLmykHuzVdtyf9uDyF4ymimgYOxkL5l82cbwZn4NDR6NCe-tMEX_lz5YU_S4NZIZeLq2nMIsF5F7AIh81ZkK7UAj5eysB6V1AtylCK73deMv64dntHfYCqNK_G5RCTVZyTaHpCXnl39SXr4oHyd1zdCLUL3R1RnFbeyLprmN716nkDHrpoD5ebKqCQ"
    };
  }
};

export default GeneralService;
