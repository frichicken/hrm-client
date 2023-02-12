import './assets/styles/style.css';

import { Breadcrumb, Layout } from 'antd';
import { useState } from 'react';
import linkTypes from './components/common/enum/link-types';
import Navigation from './components/common/ui/navigation';
import Profile from './components/modules/profile';

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState(String(linkTypes.PROFILE));

    const components = {
        [linkTypes.PROFILE]: <Profile />,
        [linkTypes.CONTRACT]: <div>CONTRACT</div>,
        [linkTypes.DEPARTMENT]: <div>DEPARTMENT</div>,
        [linkTypes.TITLE]: <div>TITLE</div>,
    };

    const getCurrentBreadcrumb = () => {
        if (active === String(linkTypes.PROFILE)) return 'Hồ sơ';
        if (active === String(linkTypes.CONTRACT)) return 'Quản lý hợp đồng';
        if (active === String(linkTypes.DEPARTMENT)) return 'Danh mục';
        if (active === String(linkTypes.TITLE)) return 'Danh mục';
    };

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
                    <Breadcrumb>
                        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item>{getCurrentBreadcrumb()}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='flex-1 bg-[#f5f7fa]'>{components[active]}</div>
            </div>
        </Layout>
    );
}

export default App;
