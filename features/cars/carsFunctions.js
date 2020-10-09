import AsyncStorage from "@react-native-community/async-storage";
import { cars as carsDb } from "../../Database/cars";

export async function getData() {
    const dataStorage = await AsyncStorage.getItem("cars");
    const data = dataStorage ?? carsDb;
    data.forEach((x) => (x.belongs = null));
    return data;
}

export function sortData(data) {
    const newData = data.sort((a, b) => {
        if (a.owner > b.owner) return 1;
        if (a.owner < b.owner) return -1;
        else {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }
    });
    return newData;
}
