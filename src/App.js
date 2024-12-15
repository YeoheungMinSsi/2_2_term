// import './App.css';
// import React from "react";
// import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from "react-router-dom";
//
// // Route 가지고 오는 부분
// import Home from "./components/Home";
// import Saha from "./components/Regions/Saha";
// import Regions from "./components/Regions/Regions";
//
// // Route 경로
// // const router = createBrowserRouter([
// //     {
// //         path: "/",  // 메인 경로
// //         element: <Home/>
// //     },
// //     {
// //         path: "/regions",  // 부산 지도 있는곳
// //         element: <Regions/>
// //     },
// //     {
// //         path: "/regions/saha",  // 지역에서 Saha
// //         element: <Saha/>
// //     }
// // ])
//
//
//
// function App() {
//   return (
//     <div className="App">
//         {/*<BrowserRouter>*/}
//         {/*    <RouterProvider router={router}></RouterProvider>*/}
//         {/*</BrowserRouter>*/}
//         <Home/>
//     </div>
//   );
// }
//
// export default App;
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import Saha from "./components/Regions/Saha";
import Buk from "./components/Regions/Buk";
import Regions from "./components/Regions/Regions";
import Dong from './components/Regions/Dong'
import Dongnae from "./components/Regions/Dongnae";
import Busanjin from "./components/Regions/Busanjin";
import Gangseo from "./components/Regions/Gangseo";
import Geumjeong from "./components/Regions/Geumjeong";
import Gijang from "./components/Regions/Gijang";
import Haeundae from "./components/Regions/Haeundae";
import Jung from './components/Regions/Jung'
import Nam from "./components/Regions/Nam";
import Sasang from "./components/Regions/Sasang";
import Seo from "./components/Regions/Seo";
import Suyeong from "./components/Regions/Suyeong";
import Yeongdo from "./components/Regions/Yeongdo";
import Yeonje from "./components/Regions/Yeonje";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/regions" element={<Regions/>}/>
                    <Route path="/regions/buk-gu" element={<Buk/>}/>
                    <Route path="/regions/dong-gu" element={<Dong/>}/>
                    <Route path="/regions/dongnae-gu" element={<Dongnae/>}/>
                    <Route path="/regions/busanjin-gu" element={<Busanjin/>}/>
                    <Route path="/regions/gangseo-gu" element={<Gangseo/>}/>
                    <Route path="/regions/geumjeong-gu" element={<Geumjeong/>}/>
                    <Route path="/regions/gijang-gun" element={<Gijang/>}/>
                    <Route path="/regions/haeundae-gu" element={<Haeundae/>}/>
                    <Route path="/regions/jung-gu" element={<Jung/>}/>
                    <Route path="/regions/nam-gu" element={<Nam/>}/>
                    <Route path="/regions/saha-gu" element={<Saha/>}/>
                    <Route path="/regions/sasang-gu" element={<Sasang/>}/>
                    <Route path="/regions/seo-gu" element={<Seo/>}/>
                    <Route path="/regions/suyeong-gu" element={<Suyeong/>}/>
                    <Route path="/regions/yeongdo-gu" element={<Yeongdo/>}/>
                    <Route path="/regions/yeonje-gu" element={<Yeonje/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;