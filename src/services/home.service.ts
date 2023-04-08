import { getFromServer } from ".";
import { itemCount } from "../redux/types";

export const homeService = {
    getImages
};
async function getImages(count: itemCount): Promise<itemCount[]> {
    return await getFromServer(`https://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`);
}