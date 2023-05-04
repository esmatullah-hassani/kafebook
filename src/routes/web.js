import { Route, Routes } from "react-router-dom"
import { Header } from "../components/header"
import { Website } from "../components/web"
import { AdminRoute } from "./admin"

export const WebRoute = () => {
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Website />}></Route>
            </Routes>
            <AdminRoute />
        </>
    )
}