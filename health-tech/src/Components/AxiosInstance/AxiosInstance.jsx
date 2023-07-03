import axios from "axios";
const axiosInstance=axios.create()
axiosInstance.interceptors.request.use((config)=>{
    let token=localStorage.getItem("token")
   if(token){
    config.headers["Authorization"]=token

   }
   return config
},(err)=>{
    Promise.reject(err)
})
export default axiosInstance