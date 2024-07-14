import { Route, Routes } from "react-router-dom";
import { ShowWordCounter, ShowJokes, PageNotFound } from '../Pages';


export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<ShowWordCounter />} />
            <Route path="/joke" element={<ShowJokes />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}
