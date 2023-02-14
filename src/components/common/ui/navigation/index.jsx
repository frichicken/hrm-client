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
import {useNavigate} from "react-router-dom";


const Navigation = ({
    active = String(linkTypes.PROFILE),
    onSelect = () => {},
    collapsed,
    setCollapsed = () => {},
}) => {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Hồ sơ nhân viên',
            icon: <TeamOutlined />,
            children: [
                {
                    label: 'Hồ sơ',
                    key: linkTypes.PROFILE,
                    icon: <UserOutlined />,
                    onClick: () => navigate("/employee-management")
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
                    onClick: () => navigate("/contract-management")
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
                    onClick: () => navigate("/department-management")
                },
                {
                    label: 'Chức danh',
                    key: linkTypes.TITLE,
                    icon: <SolutionOutlined />,
                    onClick: () => navigate("/title-user")
                },
            ],
        },
    ];

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
                defaultSelectedKeys={active}
                onSelect={({ selectedKeys }) => {
                    onSelect(selectedKeys);
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
