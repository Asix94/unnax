import api from '../api_client/';

const logic = {

    getListBrowseCategory(){
        return api.getListBrowseCategory().then(res => {
            return res.categories.items;
        });
    },

    getCategoryPlayList(categoryId){
        return api.getCategoryPlayList(categoryId).then(res => {
            return res.playlists.items;
        })
    }
}

export default logic;