import React from "react";
import { Tabs } from "antd";
import LoginIcon from "../components/sideIcons/LoginIcon";
import HomeIcon from "../components/sideIcons/HomeIcon";
import UserIcon from "../components/sideIcons/UserIcon";
import CalendarIcon from "../components/sideIcons/CalendarIcon";
import ShareIcon from "../components/sideIcons/ShareIcon";
import FileIcon from "../components/sideIcons/FileIcons";
import FolderIcon from "../components/sideIcons/FolderIcon";
import HeartIcon from "../components/sideIcons/HeartIcon";
import BackIcon from "../components/sideIcons/BackIcon";
import Home from "../page/home/Home";
import SettingIcon from "../components/sideIcons/SettingIcon";
import UserNameIcon from "../components/sideIcons/UserNameIcon";

const Layout: React.FC = () => {
  const iconsArray = [
    <LoginIcon />,
    <HomeIcon />,
    <UserIcon />,
    <CalendarIcon />,
    <ShareIcon />,
    <FileIcon />,
    <FolderIcon />,
    <HeartIcon />,
    <BackIcon />,
    <></>,
    <></>,
    <></>,
    <></>,
    <SettingIcon />,
    <UserNameIcon />,
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={iconsArray.map((i, index) => {
          const id = String(index);
          return {
            label: i,
            key: id,
            disabled:index===9 || index===10 || index===11 || index===12,
            children: <Home />,
          };
        })}
      />
    </div>
  );
};

export default Layout;
