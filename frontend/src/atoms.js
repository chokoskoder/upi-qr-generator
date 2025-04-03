import { atom, selector } from "recoil";
import axios from "axios";

// Store the selected item ID
export const selectedItemIdAtom = atom({
  key: "selectedItemId",
  default: null,
});

// Fetch the UPI link dynamically when itemId changes
export const upiLinkSelector = selector({
  key: "upiLinkSelector",
  get: async ({ get }) => {
    const itemId = get(selectedItemIdAtom);
    if (!itemId) return "";

    try {
      const response = await axios.post(
        `http://localhost:5151/api/generate-qr?id=${itemId}`
      );
      return response.data.upi_Link;
    } catch (error) {
      console.error("Error fetching UPI link:", error);
      return "";
    }
  },
});
