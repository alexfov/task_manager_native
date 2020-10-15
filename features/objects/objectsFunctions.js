import AsyncStorage from "@react-native-community/async-storage";
import { objects as objectsDb } from "../../Database/objects";

export async function getData() {
    const dataStorage = JSON.parse(await AsyncStorage.getItem("objects"));
    const data = dataStorage ?? objectsDb;
    return data;
}

export function sortData(data) {
    const newData = data.sort((a, b) => {
        if (a.direction > b.direction) return 1;
        if (a.direction < b.direction) return -1;
        else {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }
    });
    return newData;
}
