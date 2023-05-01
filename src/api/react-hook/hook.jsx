import { useQuery } from "@tanstack/react-query";
import { getDB} from "../firebase";


export const useImage = () =>{

    const { data , isLoading} = useQuery([]   ,  getDB);

    return { data ,  isLoading}


}