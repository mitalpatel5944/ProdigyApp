export const GET_IMAGES = "GET_IMAGES"
export const SET_CAROUSEL_ITEMS = "SET_CAROUSEL_ITEMS"
export const SET_GRID_ITEMS = "SET_GRID_ITEMS"

export interface ArrayInterface {
    imageUrl: string
}
export interface itemCount {
    count: number
}
export interface ItemState {
  gridItems: ArrayInterface[],
  carouselItems: ArrayInterface[]
}
interface GetImages {
    type: typeof GET_IMAGES,
    payload: ArrayInterface[]
}
interface SetCarouselItems {
    type: typeof SET_CAROUSEL_ITEMS,
    payload: ArrayInterface[]
}
interface SetGridItems {
    type: typeof SET_GRID_ITEMS,
    payload: ArrayInterface[]
}

export type ActionTypes = GetImages | SetCarouselItems | SetGridItems