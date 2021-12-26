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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDA1MzgxODMsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6ImU4YjkxN2Y2LTE1NzEtNGIwZC1hZTQ5LTQ5ZTczZDU3ZWY0YyIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.K7c0VKEw2szzyZgw4RPreXBI2b1i4qGncf-UY-e7t83aToDZrIxw_IcrkIrzszcHDepnrnlPjk-fhhWK3p9DXv2HPoj0ZH8jZwJHdylGzElvAG_ZJ2WxawOgWA2K0bz2sgceSiQVaVV0Q9j9Scq-rTGekOIRI24BnDQoaFR6OX7c1MHI-NNTiz5GGabTMaAzW4-xYKsgW1LBSW78glTfv6Ri8HDTluSi1SHdaQ8xFsY78HLpi9HF6cHRivkKiPXa-tcqQ3CndrYKhChqTa6FNxmXKIFvc_MeXqgRwdY7I2XPNRfQZdcKWg86siwR4gq-StQQzIn4qms8zz3Gty0LvA"
    };
  }
};

export default GeneralService;
