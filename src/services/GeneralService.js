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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaGFsdXRheCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NDAzNjM0OTgsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6ImJhOWQ5OGQ4LTBiZTgtNGUxNi1iNGQ4LTI3NmY1NjNlOGRhOCIsImNsaWVudF9pZCI6ImZwb3Mtc2VjdXJpdHkiLCJ1c2VybmFtZSI6ImNoYWx1dGF4In0.EDU9_0iI8BVEvej9rPAxSpqV7zlLr7v2Ygif7de0oV1PWwT1Bk19Q6xOU_jZz28f6wIVve9leyrG8jJ6qJvFg7k9wzVN0al8IwS5MbNl6y0VGHRV2WKFOLCRm5IXTgBmoLm8HLKMUvpb59l3T7tzoZ26aIwy8wmgHd5Lwa3-e8HDtl43CUPEjGSR9LkoVAgJEJSN6iPO9IZm7kHVDWPfidCnUQs3HamCuocQ667xGPNAZhUX1dYEXjuM1Q8Cw7CBGCJ0aGCLElSl0D8CrqXrhtM444UR5l8ZOQBxF9Xzis6MA8ELgqENQDA9J4bM_IFIzletxTfPWja1FmEyoIcGIA"
    };
  }
};

export default GeneralService;
