import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks";
import ProfileScreen from "./profile";
import WhoToFollowList from "./who-to-follow-list";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore ({ // configure the store
   reducer: {who: whoReducer, tuits: tuitsReducer}
});

function Tuiter() {
   // provide the store to the rest of the
   // application so it can pull from the global state
   return(
      <Provider store={store}>
         <div>
            <Nav />
            <div className="row">
               <div className="col-lg-1 col-xl-2 col-md-2 col-sm-2">
                  <NavigationSidebar />
               </div>
               <div className="col-lg-7 col-xl-6 col-md col-sm">
                  <Routes>
                     <Route path="/home" element={<HomeScreen />} />
                     <Route path="/explore-screen" element={<ExploreScreen />} />
                     <Route path="/bookmarks" element={<BookmarksScreen />} />
                     <Route path="/profile" element={<ProfileScreen />} />
                  </Routes>
               </div>
               <div className="col-3 col-lg d-md-none d-none d-lg-block">
                  <WhoToFollowList/>
               </div>
            </div>
         </div>
      </Provider>
   )
}
export default Tuiter