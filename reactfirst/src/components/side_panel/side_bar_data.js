import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = {
    ["student"]: [
    {
        title: 'בית',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'דף אישי',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
],
    ["advancedCandidate"]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/reportHours',
            icon: <IoIcons.IoMdHelpCircle />,
            cName: 'nav-text'
        },
        {
            title: 'הגש מועמדות',
            path: '/reportHours',
            icon: <IoIcons.IoMdHelpCircle />,
            cName: 'nav-text'
        }
    ],
    ["intern"]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/reportHours',
            icon: <IoIcons.IoMdHelpCircle />,
            cName: 'nav-text'
        },
        {
            title: 'דיווח שעות',
            path: '/reportHours',
            icon: <IoIcons.IoMdHelpCircle />,
            cName: 'nav-text'
        },
        {
            title: 'הגש דוח',
            path: '/reportHours',
            icon: <IoIcons.IoMdHelpCircle />,
            cName: 'nav-text'
        }
    ],
    ["mentor"]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/register',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'אישור דיווח שעות',
            path: '/login',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'הגשת משובים',
            path: '/createProgram',
            icon: <FaIcons.FaEnvelopeOpenText />,
            cName: 'nav-text'
        }
    ],

    ["internshipManager"]: [
    {
        title: 'בית',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'חברות',
        path: '/createProgram',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'סטודנטים',
        path: '/createProgram',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'שיבוץ התמחות',
        path: '/assignInternships',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'סטטיסטיקות',
        path: '/createProgram',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
],

    ["highTechRepresentative"]: [
    {
        title: 'בית',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'דף החברה',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'יצירת התמחות',
        path: '/createInternship',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'צפה במועמדים',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
    ],

["guest"]: [
    {
        title: 'בית',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'הרשמה',
        path: '/register',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'התחבר',
        path: '/login',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }
],
    ["systemManager"]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'תוכניות קיימות',
            path: '/register',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'הוספת תוכנית',
            path: '/createProgram',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        }
    ]
}