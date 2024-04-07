import { Logo } from "./logo";
import { SidebarRoutes  } from "./sidebar-routes"; // Import the missing SidebarRoutes component

export const Sidebar = () => {
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto
         bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className=" flex flex-col w-full">
                <SidebarRoutes /> {/* Use the imported SidebarRoutes component */}
            </div>
        </div>
    )
}
