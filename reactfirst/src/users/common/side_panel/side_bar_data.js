import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {
    ADVANCED_CANDIDATE,
    COMPANY_REPRESENTATIVE, GUEST,
    INTERN,
    INTERNSHIP_MANAGER,
    MENTOR,
    STUDENT, SYSTEM_MANAGER
} from "../../../constants";

export const SidebarData = {
    [STUDENT]: [
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
    [ADVANCED_CANDIDATE]: [
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
    [INTERN]: [
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
    [MENTOR]: [
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

    [INTERNSHIP_MANAGER]: [
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

    [COMPANY_REPRESENTATIVE]: [
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

[GUEST]: [
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
    [SYSTEM_MANAGER]: [
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