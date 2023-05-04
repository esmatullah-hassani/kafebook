import { Route, Routes } from "react-router-dom"
import { AdminPanel } from "../components/admin"
import { CreateBookCategory } from "../components/admin/books/bookCategory/create"
import { BookCategory } from "../components/admin/books/bookCategory"
import { Book } from "../components/admin/books/booklist"
import { CreateBook } from "../components/admin/books/create"

export const AdminRoute = () => {
    return(
        <Routes>
            
            <Route path="/admins" element={<AdminPanel />}></Route>
            <Route path="/admins/books/categories/create" element={<CreateBookCategory />}></Route>
            <Route path="/admins/books/categories" element={<BookCategory />}></Route>
            <Route path="/admins/books" element={<Book />} ></Route>
            <Route path="/admins/books/create" element={<CreateBook />} ></Route>

        </Routes>
    )
}