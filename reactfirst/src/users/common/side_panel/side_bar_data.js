import React from 'react';
import {FaEnvelopeOpenText, FaRegAddressCard, FaBriefcase, FaCalendarCheck, FaCalendarDay, FaCog, 
    FaFileUpload, FaCreditCard, FaRegEdit, FaPaste, FaSignInAlt, FaClipboard, FaPeopleArrows, 
    FaUserFriends, FaUserCheck, FaChartBar} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {IoIosPaper, IoMdHelpCircle} from 'react-icons/io';
import {
    ADVANCED_CANDIDATE,
    COMPANY_REPRESENTATIVE, GUEST,
    INTERN,
    PROGRAM_MANAGER,
    PROGRAM_COORDINATOR,
    MENTOR,
    STUDENT, SYSTEM_MANAGER
} from "../../../constants";


// for setting tab or changing password icon: FaCog
export const SidebarData = {
    [GUEST]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'הרשמה',
            path: '/register',
            icon: <FaPaste />,
            cName: 'nav-text'
        },
        {
            title: 'התחברות',
            path: '/login',
            icon: <FaSignInAlt />,
            cName: 'nav-text'
        }
    ],

    [STUDENT]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'תשלום דמי רצינות',
            path: '/',
            icon: <FaCreditCard />,
            cName: 'nav-text'
        }
    ],

    [ADVANCED_CANDIDATE]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'צפייה בהתמחויות',
            path: '/internships',
            icon: <FaRegEdit />,
            cName: 'nav-text'
        },
        {
            title: 'בחירת התמחויות',
            path: '/internshipsPriorities',
            icon: <FaRegEdit />,
            cName: 'nav-text'
        }
    ],

    [INTERN]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'דיווח שעות',
            path: '/reportHours',
            icon: <FaCalendarDay />,
            cName: 'nav-text'
        },
        {
            title: 'הגש דוח',
            path: '/',
            icon: <FaFileUpload />,
            cName: 'nav-text'
        }
    ],

    [MENTOR]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'אישור דיווח שעות',
            path: '/',
            icon: <FaCalendarCheck />,
            cName: 'nav-text'
        },
        {
            title: 'הגשת משובים',
            path: '/',
            icon: <FaFileUpload />,
            cName: 'nav-text'
        }
    ],

    [COMPANY_REPRESENTATIVE]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף החברה',
            path: '/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/createInternship/company',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'צפה במועמדים',
            path: '/',
            icon: <FaPeopleArrows />,
            cName: 'nav-text'
        }
    ],

    [PROGRAM_COORDINATOR]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'חברות',
            path: '/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/createInternship/manager',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'שיבוץ התמחויות',
            path: '/assignInternships',
            icon: <FaUserCheck />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        }
    ],

    [PROGRAM_MANAGER]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'חברות',
            path: '/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/students',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/createInternship/manager',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'שיבוץ התמחויות',
            path: '/assignInternships',
            icon: <FaUserCheck />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        }
    ],

    [SYSTEM_MANAGER]: [
        {
            title: 'בית',
            path: '/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'תוכניות קיימות',
            path: '/',
            icon: <IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'הוספת תוכנית התמחות',
            path: '/createProgram',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        }
    ]
}