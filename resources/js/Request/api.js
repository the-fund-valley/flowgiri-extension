import { setRecoil } from "recoil-nexus"
import { ThemesState } from "../state/State"
import { request } from "./"

export const getAndSetThemeData = async () => {
   const receivedData = await request.getAll('api/get-all-theme')
   console.log(receivedData)
   setRecoil(ThemesState, receivedData)
}