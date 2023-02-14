import './assets/styles/style.css';

import { Breadcrumb, Layout } from 'antd';
import { useState } from 'react';
import linkTypes from './components/common/enum/link-types';
import Navigation from './components/common/ui/navigation';
import Profile from './components/modules/profile';
import {Link, Route, Routes, useLocation} from "react-router-dom";

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState([String(linkTypes.PROFILE)]);
    const location = useLocation();
    const pathSnippets = location.pathname.split("/").filter(it => it);

    const routes = [
        {
            key: linkTypes.PROFILE,
            path: "/employee-management",
            element: <Profile />
        },
        {
            key: linkTypes.CONTRACT,
            path: "/contract-management",
            element: <div />
        },
        {
            key: linkTypes.DEPARTMENT,
            path: "/department-management",
            element: <div />
        },
        {
            key: linkTypes.TITLE,
            path: "/title-user",
            element: <div />
        },
        {
            key: linkTypes.TITLE,
            path: "/",
            element: <Profile />
        }
    ]

    const breadcrumbNameMap = {
        "/": "Hồ sơ",
        '/employee-management': "Hồ sơ",
        '/contract-management': "Quản lý hợp đồng",
        '/title-user': "Danh mục",
        "/department-management": "Danh mục"
    }

    const extraBreadcrumbItems = pathSnippets.map((value, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    })

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/employee-management">Trang chủ</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Layout className='min-h-screen flex'>
            <Navigation
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                active={active}
                onSelect={setActive}
            />
            <div className='flex-1 flex flex-col'>
                <div className='p-[24px] bg-white flex gap-x-[8px] items-center'>
                    <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                </div>
                <div className='flex-1 bg-[#f5f7fa]'>
                    <Routes>
                        {routes.map((route) => {
                            const {key, path, element} = route;
                            return <Route key={key} path={path} element={element}/>
                        })}
                    </Routes>
                </div>
            </div>
        </Layout>
    );
}

export default App;
