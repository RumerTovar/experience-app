import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const googleUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';

export const useGooglehook = (setProfile) => {
 const login = useGoogleLogin({
  onSuccess: async (response) => {
   try {
    console.log(response);
    const res = await axios(googleUrl, {
     headers: {
      Authorization: `Bearer ${response.access_token}`,
     },
    });
    setProfile(res.data);
    console.log(res.data);
   } catch (error) {
    console.error(error);
   }
  },
 });

 return {
  login,
 };
};
