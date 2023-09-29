import React from "react";
import { Tabs } from "antd";
import LoginIcon from "../components/sideIcon/LoginIcon";
import HomeIcon from "../components/sideIcon/HomeIcon";
import UserIcon from "../components/sideIcon/UserIcon";
import CalendarIcon from "../components/sideIcon/CalenderIcon";
import ShareIcon from "../components/sideIcon/ShareIcon";
import FileIcon from "../components/sideIcon/FileIcon";
import FolderIcon from "../components/sideIcon/FolderIcon";
import HeartIcon from "../components/sideIcon/HeartIcon";
import BackIcon from "../components/sideIcon/BackIcon";
import Home from "../page/home/Home";
import SettingIcon from "../components/sideIcon/SettingIcon";
import UserNameIcon from "../components/sideIcon/UserNameIcon";

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
