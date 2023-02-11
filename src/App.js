import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import './assets/styles/style.css';
import clsx from 'classnames';

function App() {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        {
            label: 'Option 1',
            key: 1,
            icon: null,
            children: null,
        },
    ];

    return (
        <Layout className='min-h-screen'>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='flex items-center gap-x-[8px] justify-center py-[16px]'>
                    <div
                        className={clsx(
                            'rounded-full w-[24px] h-[24px] bg-slate-200',
                            collapsed && 'w-[36px] h-[36px]'
                        )}
                    />
                    {collapsed === false && <div className='text-white'>Username</div>}
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
            </Sider>
        </Layout>
    );
}

export default App;
