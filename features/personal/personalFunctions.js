import AsyncStorage from "@react-native-community/async-storage";
import { personal as personalDb } from "../../Database/personal";

export async function getData() {
    const dataStorage = await AsyncStorage.getItem("personal");
    const data = dataStorage ?? personalDb;
    data.forEach((x) => (x.belongs = null));
    return data;
}

export function sortData(data) {
    const newData = data.sort((a, b) => {
        if (a.group > b.group) return 1;
        if (a.group < b.group) return -1;
        else {
            if (a.isGeodesist > b.isGeodesist) return -1;
            if (a.isGeodesist < b.isGeodesist) return 1;
            return a.last > b.last ? 1 : -1;
        }
    });
    return newData;
}
