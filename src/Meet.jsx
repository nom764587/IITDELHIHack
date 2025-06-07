import { useEffect } from "react"
import { Link } from "react-router-dom";

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
export default function Meet(){
useEffect(()=>{
   
    document.getElementById("jaas-container").style.display="block"
    let name=`${makeid(15)}/CallWithManager`
    fetch("http://127.0.0.1:5000/new?meet="+name)
        const api = new  JitsiMeetExternalAPI("8x8.vc", {
            roomName: name,
            parentNode: document.querySelector('#jaas-container'),
                          // Make sure to include a JWT if you intend to record,
                          // make outbound calls or use any other premium features!
                          // jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtZmJjYjQyMzI2MjRmNDBjNWE5NmM0NzNjZDQ5OTdmZjMvNjZjOGQ3LVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTkwOTEzNTcsImV4cCI6MTY5OTA5ODU1NywibmJmIjoxNjk5MDkxMzUyLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtZmJjYjQyMzI2MjRmNDBjNWE5NmM0NzNjZDQ5OTdmZjMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsiaGlkZGVuLWZyb20tcmVjb3JkZXIiOmZhbHNlLCJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJUZXN0IFVzZXIiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTA5ODU4NzI2NDEwMjc0NjA0OTU4IiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ0ZXN0LnVzZXJAY29tcGFueS5jb20ifX0sInJvb20iOiIqIn0.EgMGLM3kIrdu6bmep1RBCAm5cld6eANpmtG5HyRK8CMHyggzsqOQUZsYdEn9kcNEHMWnvOIqEXCcc-Mz8atRHeg4mH1hx87iecyIpnmotHq2-RBe6b1bjwggr9_caC0KnWV2lqPKDTVs0Pji44loYbnNoNFFGEt1R4kdrja4eMdpyO0bSUGy1y-6fQzVrv66sGtrEBOTcD1kwC2FnR9sxj1W_dEbc5Y7SismvYDyn_A_GE0RTtY616ZFVZyeaxdoFwvijPZOGlxqSGdEjSikAzejocXHOf-lEOdBrILg4-SGdOEGqAZzftPZ__2v8LCGCmxy9gss1gmAystgwHRwkA"
          });
          
})

    return <><Link to={"/"} style={{
        position:"absolute",
        top:10,
        left:10
    }}> Go Back</Link></>
}