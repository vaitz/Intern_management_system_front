import React from 'react';
import {FaRegAddressCard, FaBriefcase, FaCalendarCheck, FaCalendarDay, FaCog,
    FaFileUpload, FaCreditCard, FaRegEdit, FaPaste, FaSignInAlt, FaClipboard, FaPeopleArrows, 
    FaUserFriends, FaUserCheck, FaChartBar, FaBlackTie, FaUserLock} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {IoIosPaper} from 'react-icons/io';
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
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'הרשמה',
            path: '/njsw36/register',
            icon: <FaPaste />,
            cName: 'nav-text'
        },
        {
            title: 'התחברות',
            path: '/njsw36/login',
            icon: <FaSignInAlt />,
            cName: 'nav-text'
        }
    ],

    [STUDENT]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/njsw36/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'תשלום דמי רצינות',
            path: '/njsw36/',
            icon: <FaCreditCard />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [ADVANCED_CANDIDATE]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/njsw36/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'צפייה בהתמחויות',
            path: '/njsw36/internships',
            icon: <FaBlackTie />,
            cName: 'nav-text'
        },
        {
            title: 'בחירת התמחויות',
            path: '/njsw36/internshipsPriorities',
            icon: <FaRegEdit />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [INTERN]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף אישי',
            path: '/njsw36/',
            icon: <FaRegAddressCard />,
            cName: 'nav-text'
        },
        {
            title: 'דיווח שעות',
            path: '/njsw36/reportHours',
            icon: <FaCalendarDay />,
            cName: 'nav-text'
        },
        {
            title: 'הגש דוח',
            path: '/njsw36/uploadReport',
            icon: <FaFileUpload />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [MENTOR]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'צפה במועמדים',
            path: '/njsw36/approveMentorCandidates',
            icon: <FaPeopleArrows />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/njsw36/mentor/interns',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'אישור דיווח שעות',
            path: '/njsw36/mentor/approveHours',
            icon: <FaCalendarCheck />,
            cName: 'nav-text'
        },
        {
            title: 'הגשת משובים',
            path: '/njsw36/uploadReportMentor',
            icon: <FaFileUpload />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [COMPANY_REPRESENTATIVE]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'דף החברה',
            path: '/njsw36/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/njsw36/createInternship/company',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'צפה במועמדים',
            path: '/njsw36/approveCompanyRepCandidates',
            icon: <FaPeopleArrows />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [PROGRAM_COORDINATOR]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'חברות',
            path: '/njsw36/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/njsw36/createInternship/manager',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/njsw36/students',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'שיבוץ התמחויות',
            path: '/njsw36/assignInternships',
            icon: <FaUserCheck />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/njsw36/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [PROGRAM_MANAGER]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'חברות',
            path: '/njsw36/',
            icon: <FaBriefcase />,
            cName: 'nav-text'
        },
        {
            title: 'סטודנטים',
            path: '/njsw36/students',
            icon: <FaUserFriends />,
            cName: 'nav-text'
        },
        {
            title: 'יצירת התמחות',
            path: '/njsw36/createInternship/manager',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'שיבוץ התמחויות',
            path: '/njsw36/assignInternships',
            icon: <FaUserCheck />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/njsw36/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ],

    [SYSTEM_MANAGER]: [
        {
            title: 'בית',
            path: '/njsw36/',
            icon: <AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'תוכניות קיימות',
            path: '/njsw36/programs',
            icon: <IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'הוספת תוכנית התמחות',
            path: '/njsw36/createProgram',
            icon: <FaClipboard />,
            cName: 'nav-text'
        },
        {
            title: 'סטטיסטיקות',
            path: '/njsw36/',
            icon: <FaChartBar />,
            cName: 'nav-text'
        },
        {
            title: 'עדכון סיסמה',
            path: '/njsw36/changePass',
            icon: <FaUserLock />,
            cName: 'nav-text'
        }
    ]
}