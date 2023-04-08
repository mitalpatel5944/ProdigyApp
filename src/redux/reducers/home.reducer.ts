import { ItemState, ActionTypes, SET_GRID_ITEMS, SET_CAROUSEL_ITEMS } from "../types";

const initialFeedState: ItemState = {
  gridItems: [],
  carouselItems:[]
  };
  
  export function homeReducer(state: ItemState = initialFeedState, action: ActionTypes): ItemState {
    switch (action.type) {
      case SET_GRID_ITEMS: {
        return {
          ...state,
          gridItems: action.payload
        };
      }
      case SET_CAROUSEL_ITEMS: {
        return {
          ...state,
          carouselItems: action.payload
        };
      }
      default:
        return state
    }
  };