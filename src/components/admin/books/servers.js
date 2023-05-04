import axios from "axios";

const port = 'http://localhost:5000/api/admins';
export const BookServer = {
    getBookCategory:  () =>{
        return axios.get(port+"/books/categories");
    },

    insertBookCategory : (data) => {
        return axios.post(port+"/books/categories",data);
    },


    updateBookCategory : async (id,data) => {
        return await axios.put(port+"/books/categories/"+id,data)
    },

    deleteBookCategory : async (id) => {
        return await axios.delete(port+"/books/categories/"+id)
    }
}