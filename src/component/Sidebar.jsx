import { useState } from "react"; 
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
  FolderIcon,
  CogIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const SidebarItem = ({ title, icon: Icon, children, to }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-700 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </span>
        {children && (
          open ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )
        )}
      </button>
      {open && children && (
        <div className="ml-6 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden p-2 text-white"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 h-screen bg-gray-800 text-white p-4 space-y-2 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Dashboard</h2>
        <SidebarItem title="Home" icon={HomeIcon} />
        <SidebarItem title="Projects" icon={FolderIcon}>
          <SidebarItem title="Project A" icon={FolderIcon}>
            <SidebarItem title="Task 1" icon={FolderIcon} />
            <SidebarItem title="Task 2" icon={FolderIcon} />
          </SidebarItem>
          <SidebarItem title="Project B" icon={FolderIcon} />
        </SidebarItem>
        <SidebarItem title="Settings" icon={CogIcon}>
          <SidebarItem title="Profile" icon={CogIcon} />
          <SidebarItem title="Account" icon={CogIcon} />
        </SidebarItem>
      </div>
    </div>
  );
}
