import axios from "axios"

export default class DeviceLocations{
     getDeviceLocation(){
         return axios.get("http://192.168.1.33:3000/v1/api/devices-location")
     }
     addDeviceLocation(){
        return axios.post("http://192.168.1.33:3000/v1/api/devices-location")
     }
     updateDeviceLocation(id){
        return axios.put("http://192.168.1.33:3000/v1/api/devices-location/"+id)
     }
     deleteDeviceLocation(id){
        return axios.delete("http://192.168.1.33:3000/v1/api/devices-location/"+id)
     }
     getByDeviceLocationId(id){
        return axios.delete("http://192.168.1.33:3000/v1/api/devices-location/"+id)
     }
}