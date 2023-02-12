import clsx from 'classnames';

import linkTypes from '../../enum/link-types';

import {
    SolutionOutlined,
    TeamOutlined,
    UnorderedListOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import defaultUserAvatar from '../../../../assets/images/default-user-avatar.jpeg';

const items = [
    {
        label: 'Hồ sơ nhân viên',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Hồ sơ',
                key: linkTypes.PROFILE,
                icon: <UserOutlined />,
            },
        ],
    },
    {
        label: 'Quản lý hợp đồng',
        icon: <SolutionOutlined />,
        children: [
            {
                label: 'Danh sách hợp đồng',
                key: linkTypes.CONTRACT,
                icon: <UnorderedListOutlined />,
            },
        ],
    },
    {
        label: 'Danh mục',
        icon: <UnorderedListOutlined />,
        children: [
            {
                label: 'Phòng ban',
                key: linkTypes.DEPARTMENT,
                icon: <SolutionOutlined />,
            },
            {
                label: 'Chức danh',
                key: linkTypes.TITLE,
                icon: <SolutionOutlined />,
            },
        ],
    },
];

const Navigation = ({
    active = String(linkTypes.PROFILE),
    onSelect = () => {},
    collapsed,
    setCollapsed = () => {},
}) => {
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme='light'
            width='250px'
            className='flex flex-col border-r border-r-solid border-r-[rgba(5,5,5,0.06)]'
            trigger={null}
        >
            <div className='flex items-center gap-x-[8px] justify-center py-[24px] cursor-pointer'>
                <div className={clsx('rounded-full w-[32px] h-[32px] bg-slate-200')}>
                    <img src={defaultUserAvatar} alt='' className='w-full h-ful object-cover' />
                </div>
                {collapsed === false && (
                    <div>
                        <strong>Username</strong>
                        <br />
                        <small>Fullname</small>
                    </div>
                )}
            </div>
            {collapsed === false && (
                <div className='px-[16px] py-[8px] text-[#00000073]'>Danh mục</div>
            )}
            <Menu
                defaultSelectedKeys={[active]}
                onSelect={({ selectedKeys }) => {
                    const [selectedKey] = selectedKeys;
                    onSelect(selectedKey);
                }}
                mode='inline'
                items={items}
                className='flex-1'
                style={{
                    borderInlineEnd: '0',
                }}
            />
        </Sider>
    );
};

export default Navigation;
