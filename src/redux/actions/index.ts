import { ActionCreator } from 'redux';
import { GET_IMAGES, ActionTypes, ArrayInterface, itemCount, SET_GRID_ITEMS, SET_CAROUSEL_ITEMS } from '../types';
import { request, failure } from './common.actions';
import { homeService } from '../../services';

const setGridImages: ActionCreator<ActionTypes> = (images: ArrayInterface[]) => {
    return { type: SET_GRID_ITEMS, payload: images };
}

const SetCarouselItems: ActionCreator<ActionTypes> = (images: ArrayInterface[]) => {
    return { type: SET_CAROUSEL_ITEMS, payload: images };
}

export function getImageAPI(count: itemCount, type = 1) {
    return (dispatch:any) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
        dispatch(request());
        return homeService.getImages(count)
            .then(
                (response: any) => {
                    if(type == 1){
                        dispatch(setGridImages(response))
                    } else {
                        dispatch(SetCarouselItems(response))
                    }
                  
                },
                (error: any) => {
                    dispatch(failure('Server error.'))
                })
    }
}
