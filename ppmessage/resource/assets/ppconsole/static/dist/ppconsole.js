( function() {

    if ( window ) {

        if ( window.ppconsole === undefined ) {
            
            window.ppconsole = {
                
                /**
                 * major.minor.status.revision
                 * 
                 * 0.0.0.1 ppmessage.cn
                 * 0.0.0.2 github/ppmessage.com
                 *
                 */
                version : '0.0.0.2'
                
            };
            
        }

    }
    
} )();

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


angular.module("this_app.services", []);

angular.module("this_app", [
    "720kb.tooltips",
    "base64",
    "ngCookies",
    "ngAnimate",
    "toastr",
    "angularUtils.directives.dirPagination",
    "angularFileUpload",
    "blockUI",
    "ui.router",
    "ngMaterial",
    "this_app.constants",
    "this_app.i18n",
    "this_app.route",
    "this_app.services",
])

    .run(function($rootScope, $location, $timeout) {
        if (window.PP) {
            PP.boot({
                app_uuid: 'a600998e-efff-11e5-9d9f-02287b8c0ebf', 
            }, function(isSuccess, errorCode) {
                console.log("PPCOM boot: ", errorCode);
            });
        }        
    })

;

// the [] is must, otherwise it is a ref not define
angular.module("this_app.constants", [])
    .constant("yvConstants", {

        PPCONSOLE_API: {
            uuid:    "a6057486-efff-11e5-9d9f-02287b8c0ebf",
            key:     "NmQ4MWU4MWZiYjMxNWVlYWVjZjk0Y2M3Y2M3OWZhYzQxODY4N2M3Yw==",
            secret:  "ZTExNGQ4OWQ5Y2YzYjRiNzEwYzk0N2U5MzgwNzgxNmRlMzkxMTFhMA=="
        },

        PPMESSAGE_APP: {
            uuid:    "a600998e-efff-11e5-9d9f-02287b8c0ebf"
        },

        COOKIE_KEY: {
            LOGINED_USER_UUID: 'cookie_ppconsole_user_logined_user_uuid',
            ACTIVE_USER_UUID: 'cookie_ppconsole_user_user_uuid',
            ACCESS_TOKEN: 'cookie_ppconsole_user_access_token',
        },

        BROADCAST_EVENT_KEY: {
            LOGIN_FINISHED: 'event:login:finished',
            REFRESH_PAGE: 'event:refreshpage'
        },

        MAX_TEXT_LEN: 128,

        STATIC_PREFIX: "/ppconsole/static/",
        DEFAULT_USER_ICON: "/ppconsole/static/img/default-user.png",

        MESSAGE_TYPE: {
            NOTI: "NOTI",
        },

        MESSAGE_SUBTYPE: {
            AUDIO:  "AUDIO",
            VIDEO:  "VIDEO",
            DOCUMENT: "DOCUMENT",
            FILE:   "FILE",
            TEXT:   "TEXT",
            IMAGE:  "IMAGE",
            SINGLE_CARD:   "SINGLE_CARD",
            MULTIPLE_CARD: "MULTIPLE_CARD",
            TXT:    "TXT",
            MENU:   "MENU",
            EVENT:  "EVENT",
            GPS_LOCATION: "GPS_LOCATION",
            INVITE_CONTACT: "INVITE_CONTACT",
            ACCEPT_CONTACT: "ACCEPT_CONTACT",
            REMOVE_CONTACT: "REMOVE_CONTACT",
            DG_INVITED: "DG_INVITED",
            DG_REMOVED: "DG_REMOVED",
            REQUEST_JOIN_OG: "REQUEST_JOIN_OG",
            APPROVE_JOIN_OG: "APPROVE_JOIN_OG",
            LOGOUT: "LOGOUT"
        },

        YVOBJECT: {
            DU: "DU",
            AU: "AU",
            AG: "AG",
            OG: "OG",
        },

        OS: {
            IOS: "IOS",
            AND: "AND",
            WP: "WP",
            CHROME: "CHROME",
            MAC: "MAC",
            WIN: "WIN",
        },

        SEND_STATUS: {
            SEND_PENDING:   "SEND_PENDING",
            SEND_CHECKING:  "SEND_CHECKING",
            SEND_UPLOADING: "SEND_UPLOADING",
            SEND_SENDING:   "SEND_SENDING",
            SEND_SUCCESS:   "SEND_SUCCESS",
            SEND_ERROR:     "SEND_ERROR"
        },

        MESSAGE_DIR: {
            DIR_IN:  "DIR_IN",
            DIR_OUT: "DIR_OUT"
        },

        // according this to jump certain url
        USER_STATUS: {
            OWNER_0: "app.main",
            OWNER_1: "app.main",
            OWNER_2: "app.settings.overview",
            // OWNER_3: "",
            // SERVICE: "",
            ANONYMOUS: "app.main",
            THIRDPARTY: "app.main",
        },

    });

/*
 *  guijin.ding@yvertical.com
 *  Copyright (c) 2010-2015 
 */

angular.module("this_app.i18n", ["pascalprecht.translate"])
    .constant("yvTransTags", {
        en: {

            COPYRIGHT_PPMESSAGE: "PPMESSAGE.",

            global: {
                DELETE_TEAM_TAG: "Delete Team",
                DELETE_TEAM_NOTE_TAG: "Delete team will remove all your team data from this site. Any question please use the chat launcher button to contact the service agent.",
                DELETE_TEAM_CONFIRM_TAG: "Confirm Delete",
                DELETE_TEAM_CANCEL_TAG: "Cancel Delete",
                DELETE_TEAM_NOTE_DATA_TAG: "Delete, mean remove all data related the team.",
                DELETE_TEAM_NOTE_MEAN_TAG: "Make sure understand?",

                PARAMS_MISS_TAG: "Params miss",
                FULLNAME_ERROR_TAG: "Fullname empty or out of length",
                NO_FIRSTNAME_TAG: "Please input your first name.",
                NO_LASTNAME_TAG: "Please input your last name.",
                NO_FULLNAME_TAG: "fullname required",
                NO_EMAIL_TAG: "email required",
                NO_PASSWORD_TAG: "password required",
                NO_RPASSWORD_TAG: "repeat password required",
                NO_AGREE_TAG: "agreement agree required",
                PASSWORD_NOT_MATCHED_TAG: "password not matched",
                EMAIL_USED_TAG: "This email already has been taken.",
                SIGNUP_ERROR_TAG: "signup meet error",
                SIGNUP_SUCCESS_TAG: "signup successfully",

                SERVICE_ERROR_TAG: "Signup service error.",
                FULLNAME_UNREGULAR_TAG: "Illegal fullname",
                PASSWORD_UNREGULAR_TAG: "Illegal password",
                FIRST_NAME_TOO_LONG_TAG: "First name is too long",
                LAST_NAME_TOO_LONG_TAG: "Last name is too long",
                EMAIL_TOO_LONG_TAG: "Email is too long",
                COMPANY_NAME_TOO_LONG_TAG: "Company name is too long",
                EMAIL_UNREACHABLE_TAG: "Email is unreachable",
                EMAIL_LOGIN_ERROR_TAG: "System busy,cann't send email，please try again or contact us",
                EMAIL_SENDING_ERROR_TAG: "Sending email encounter an error.please contact us or jusr try again",
                LENGTH_OUT_OF_RANGE_TAG: "Length out of range",

                ERR_PASSWORD_CONTAINS_WHITESPACE_AT_HEAD_OR_TAIL: 'Password contains whitespace at head or tail',

                SIGNUP_TAG: "Sign Up",
                SIGNIN_TAG: "Sign In",
                RESET_PASSWORD_TAG: "Reset Password",
                
                CREATE_TEAM_TAG: "Create Team",
                START_TAG: "Start",
                FULLNAME_TAG: "Full Name",
                LOGIN_NAME_TAG: "Login Email",
                LOGIN_PASSWORD_TAG: "Password",
                LOGIN_PASSWORD_REPEAT_TAG: "Password Repeat",
                SERVICE_TEAM_TAG: "Service Team",
                AGREE_SERVICE_TEAM_TAG: "Agree with ",
                MAKE_NAME_FOR_YOURTEAM: "Make an amazing name for your team !",
                TEAM_NAME: "Team name",
                CONGRATULATIONS: "Congratulations! customer service team create success",
                YOU_WILL_EXPERIENCE: "You will experience",
                ANY_TRAFFIC: "Any traffic",
                ANY_MESSAGE: "Any number of messages",
                YOU_CAN: "Start use, you can: ",
                DEPLOY_CODE: "Deploy you code",
                ADD_SERVICE_USER: "Add service user",
                MODIFY_SETTINGS: "Modify information",

                USER_ACCOUNT_TAG: "User Account",

                SIGNIN_FAILED_TAG: "sign in failed.",
                SEND_NEW_PASSWORD_TAG: "Send new password email",

                SEND_NEW_PASSWORD_SUCCESS_TAG: "Success to send new password to your email.",
                SEND_NEW_PASSWORD_FAILED_TAG: "Fail to send new password to your email.",
            },
            
            app: {
                MY_PROFILE_TAG: "My Profile",
                LOGOUT_TAG: "Logout",
                LOGIN_TAG: "Login",
                DOWNLOAD: "Download",
                CONTACT_US:"Contact us",

                START_SERVICE_TAG: "Start service",
                PRIVATE_CONFIG_TAG: "Private settings",
                TEAM_CONFIG_TAG: "Team settings",
                EXIT_APP_TAG: "Log Out",
                SIGNUP_TAG: "Sign Up",
                LOGIN_TAG: "Sign In",
                SLOGAN: "Open Source Plug & Play Enterprise Message Communication Platform",

                APPS: "Apps",
                
            },

            calendar:{
                TODAY_TAG: "Today",
                YESTERDAY_TAG: "Yesterday",
                LAST_7_DAYS_TAG:"Last 7 Days",
                LAST_30_DAYS_TAG:"Last 30 Days",
                THIS_MONTH_TAG:"This Month",
                LAST_MONTH_TAG:"Last Month",
                /*按钮文本定义开始*/
                APPLY_LABEL_TAG:"Apply",
                CANCEL_LABEL_TAG:"Cancel",
                FROM_LABEL_TAG:"From",
                TO_LABEL_TAG:"To",
                CUSTOM_RANGE_LABEL_TAG:"Custom Range",
                monthname:{
                    JANUARY_TAG:"January",
                    FEBRUARY_TAG:"February",
                    MARCH_TAG:"March",
                    APRIL_TAG:"April",
                    MAY_TAG:"May",
                    JUNE_TAG:"June",
                    JULY_TAG:"July",
                    AUGUST_TAG:"August",
                    SEPTEMBER_TAG:"September",
                    OCTOBER_TAG:"October",
                    NOVEMBER_TAG:"November",
                    DECEMBER_TAG:"December",
                },
                /*按钮文本定义结束*/
            },//calendar end

            main: {
                LEARN_MORE_TAG: "LEARN MORE",
                PLUG_AND_PLAY_TAG: "PLUG AND PLAY",
                MULTIPLE_PLATFORMS_TAG: "MULTIPLE PLATFORMS",
                THE_MESSAGING_SYSTEM_IN_APPLICATIONS: "THE MESSAGING SYSTEM IN APPLICATIONS",

            },

            signup: {
                                
            },

            createaccount: {
                ACCOUNT_ALREADY_CREATED: "Account already created.",
                NO_PASSWORD_TAG: "Password required.",
            },

            login: {
                INVALID_EMAIL_TAG: "Invalid email address.",
                NO_EMAIL_TAG: "email required",
                NO_PASSWORD_TAG: "password required",
                NO_SUCH_USER_TAG: "No such user.",
                PASSWORD_MISMATCH_TAG: "Incorrect password.",
                NO_AUTHORITY_LOGIN_TAG: "no authority to log in.",

                LOGIN_TAG: "Log In",
                LOGIN_EMAIL_PLACEHOLDER_TAG: "Email",
                LOGIN_PASSWORD_TAG: "Password",
                LOGIN_FORGET_PASSWORD_TAG: "Forget password?",
                LOGIN_REGISTER_TAG: "Register"
                
            },

            changepassword: {
                NO_PASSWORD_TAG: "Please enter your password.",
                PASSWORD_NOT_MATCH_TAG: "The two entered passwords are different.",
                CHANGE_PASSWORD_SUCCESS_TAG: "Change password successfully.",
                CHANGE_PASSWORD_FAIL_TAG: "Change password failed.",
            },

            settings: {
                menu: {
                    DATA_ANALYSIS_TAG: "Data analysis",
                    DATA_OVERVIEW_TAG: "Data overview",
                    HISTORY_MSG_TAG: "Message history",
                    TEAM_CONFIG_TAG: "Team settings",
                    BASIC_CONFIG_TAG: "Basic info",
                    USER_INTERFACE_TAG: "User interface",
                    MESSAGE_DISPATCH_TAG: "Message dispatch",
                    SERVICE_USER_TAG: "Service users",
                    SERVICE_GROUP_TAG: "Service users group",
                    APP_INTEGRAGE_TAG: "App integrate",
                    ACCOUT_CONFIG_TAG: "Account settings",
                    ADVANCED_CONFIG_TAG: "Advanced settings"
                },
                
                profile: {
                    UPDATE_SUCCESSFULLY_TAG: "Profile updated successfully.",
                    UPDATE_FAILED_TAG: "Profile updated failed.",
                },

                account: {
                    OLDPASSWORD_MISMATCH_TAG: "Old password mismatch.",
                    NEWPASSWORD_MISMATCH_TAG: "New password and confirm new password not equal.",
                    REMOVE_USER_PROMOTE_TAG: "Very important.",
                    REMOVE_USER_FAILED_TAG: "Remove user failed.",
                    NO_EMAIL_OR_PASSWORD_TAG: "No email or password provided.",
                },

                resetpassword: {
                    NO_EMAIL_TAG: "Please enter your email.",
                    EMAIL_NOT_MATCH_TAG: "Invalid email. Please enter the correct email.",
                    SERVICE_ERROR_TAG: "Some error occurred. Please retry in a minute",
                    ERR_NO_USER: "Can not find user with this email",
                },

                createapplication: {
                    NO_APPNAME_TAG: "Please enter the name of app.",
                    CREATEAPP_SUCCESSFULLY_TAG: "Create app successfully.",
                    CREATEAPP_FAILED_TAG: "Create app failed",
                    APP_ALREADY_EXITED_TAG: "This name already exited. Please use another name",
                    APP_NAME_LENGTH_LIMIT_TAG: "App name is too long",
                    CONTAIN_UNREGULAR_WORDS_TAG: "Unregular words contained",
                },
            },

            payment: {
                pay: {
                    CHOOSE_AGENT_SMALLER_THAN_EXIST_AGENT_TAG: "The agents number is smaller than current exist agent numbers,please reduce your team member or expand the agent numbers. Thanks",
                },

                payment: {
                    
                },

                pwechat: {
                    
                },
            },
            
            application: {
                profile: {
                    UPDATE_SUCCESSFULLY_TAG: "Profile updated successfully.",
                    UPDATE_FAILED_TAG: "Profile updated failed.",
                    UPDATE_APP_LACK_PARAMS_TAG: "Update team info needs more params",
                    UPDATE_APP_NOT_EXIST_TAG: "Update team not exist",
                    UPDATE_APP_NAME_OUT_OF_LENGTH_TAG: "Update name out of length",
                    REMOVE_APP_SUCCESS_TAG: "Remove team success",
                    PERMISSSION_DENIED_TAG: "Permission denied, you are not team owner",
                    NO_CHANGE_TAG: "No changes since last change",
                    NOT_REGULAR_WORDS_TAG: "Not allow unregular words",
                    WORDS_OUT_OF_LENGHT_TAG: "The name is too long",
                    COPY_SUCCESSFUL_TAG: "Copy to clipboard success!",
                    COPY_FAIL_TAG: "Copy to clipboard failed!",
                },

                account: {
                    OLDPASSWORD_MISMATCH_TAG: "Old password mismatch.",
                    NEWPASSWORD_MISMATCH_TAG: "New password and confirm new password not equal.",
                },

                resetpassword: {
                    NO_EMAIL_TAG: "Please enter your email.",
                    EMAIL_NOT_MATCH_TAG: "Invalid email. Please enter the correct email.",
                    SERVICE_ERROR_TAG: "Some error occurred. Please retry in a minute",

                    FIND_PASSWORD_TAG: "Find password",
                    LOGIN_EMAIL_TAG: "Email",
                    FIND_TAG: "Send email",
                    
                },

                welcome: {
                    UPDATE_APP_SUCCESSFULLY_TAG: "update team info successfully",
                    UPDATE_APP_LACK_PARAMS_TAG: "need more params",
                    UPDATE_APP_NOT_EXIST_TAG: "app not exist",
                    WELCOME_WORDS_OUT_OF_LENGTH_TAG: "welcome words or offline notice out of length",
                    COLOR_PICKED_NOT_RIGHT_TAG: "color picked is unregualr value",
                    UPDATE_ENCOUNTER_AN_ERROR_TAG: "encounter an error,please try again",
                    NO_CHANGED_TAG: "No change",

                    WELCOME_INFO_TAG: "Welcome",
                    SAVE_TAG: "Save",
                    AUTO_POPUP: "Auto Popup",
                    POPUP_ONLY_ONCE: "Only once",
                    POPUP_NEVER: "Never",
                    POPUP_ALWAYS: "Always",
                    COLOR: "Color",
                    TOOLTIP_WELCOME_TAG: "Welcome string when mouse hover on chat launcher icon.",
                    TOOLTIP_COLOR_TAG: "Chat launcher icon colour.",
                },

                grouping: {
                    WORDS_OUT_OF_LENGTH_TAG: "length out of range",
                    UNREGULAR_WORDS_TAG: "unregular words",
                    NO_ORG_GROUP_TAG: "no group exists",
                    LACK_PARAMS_TAG: "lack params",
                    NOT_LIST_TAG: "not list params",
                    ADD_GROUP_USER_SUCCESS_TAG: "add group user successful",
                    ENCOUNTER_AN_ERROR_TAG: "operation error",
                    REMOVE_GROUP_SUCCESS_TAG: "remove group successful",
                    UPDATE_GROUP_SUCCESS_TAG: "update group successful",
                    CREATE_GROUP_SUCCESS_TAG: "create group successful",
                    MODIFY_INFO_IS_NOT_SUITABLE_TAG: "what you write is not suitable",
                    NO_GROUP_USER_SELECTED_TAG: "no group user selected",
                    GROUP_NAME_EXISTED_TAG: "group name already existed",
                    NO_GROUP_NAME: "group name can't be empty",
                    NO_GROUP_DESC: "group description can't be empty",

                    SERVICE_GROUP_MANAGER_TAG: "Service group manager",
                    MOVE_TO: "Move to ",
                    SELECT_GROUP: "Select group",
                    ALL_SERVICE_USER: "all service users",
                    NEW_GROUP: "Create",
                    SELECT_ALL: "Select all",
                    LOGIN_EMAIL: "Email",
                    ROLE: "Role",
                    GROUP_IN: "Group",
                    GROUP_MODE_CONFIG: "Group config",
                    IS_SHOW_GROUP: "Show",
                    GROUP_NAME: "Group name",
                    DISPATCH_WAY: "Dispatch mode",
                    CREATE_GROUP: "Create Group",
                    GROUP_DESC: "Group Infos",
                    MODIFY_GROUP: "Modify Group",
                    SAVE: "Save",

                    ADMIN_USER_TAG: "Team admin",
                    SERVICE_USER_TAG: "Service user",

                    UNAMED_GROUP_NAME_TAG: "Not grouped",
                    DISTRIBUTOR_TAG: "Primary Group",
                    
                },

                people: {
                    SEND_INVITATION_EMAIL_SUCCESSFULLY_TAG: "Send the invitation email successfully.",
                    SEND_INVITATION_EMAIL_FAILED_TAG: "Send the invitation email failed.",
                    CREATE_APP_USER_SUCCESSFULLY_TAG:"Add user successfully.",
                    CREATE_APP_USER_FAILED_TAG:"Add user failed.",
                    USER_EXIST_AND_INVITE_TAG:"user existed,please invite directly",
                    REMOVE_APP_USER_SUCCESSFULLY_TAG:"Remove successfully.",
                    REMOVE_APP_USER_FAILED_TAG:"Remove failed.",
                    ALREADY_IS_APP_USER_TAG:"This user has already been app user.",
                    QUOTA_REACH_TO_UPPER_LIMIT_TAG:"Agent quote reach to upper limit.",
                    PARAMS_MISS_TAG: "Params miss",
                    PERMISSION_DENY_TAG: "You are not allow to create team member",

                    CREATE_SERVICE_USER_TAG: "Create service user",
                    SEARCH_TAG: "Search",
                    SELECT_ALL_TAG: "Select all",
                    EDIT_SERVICE_USER_TAG: "Edit",
                    REMOVE_SERVICE_USER_TAG: "Remove",
                    REMOVE_SERVICE_USER_PROMOTE_TAG: "Are you sure to remove the service user: ",
                    OWNER_TAG: "Owner",
                    SERVICE_USER_TAG: "Service user",
                    CANCEL_TAG: "Cancel",
                    OK_TAG: "Ok",
                    SERVICE_USER_NAME_TAG: "Service user full name",
                    SERVICE_USER_EMAIL_TAG: "Email",
                    PASSWORD_TAG: "Password",
                    CONFIRM_PASSWORD_TAG: "Confirm password",
                    CREATE_TAG: "Create",
                    SAVE_TAG: "Save",

                    EDIT_APP_USER_SUCCESSFULLAY_TAG: "Edit user successfully.",
                    EDIT_APP_USER_FAILED_TAG: "Edit user failed.",
                },

                manualinstall: {
                    COPY_SUCCESSFUL_TAG: "Copy to clipboard success!",
                },

                integrate: {
                    COPY_TO_CLIPBOARD: "Copy to clipboard",
                    PREVIEW: "Preview",
                    URL_LINK: "Url",
                    DEMO_DEPLOY_TO: "PPMessage has deploy to this website for preview",
                    COPY_CODE_TO_BODY: "Copy the code below, and paste between <body></body>"
                },

                teamprofile: {
                    TEAM_INFO: "Team info",
                    TEAM_NAME: "Team name",
                    SAVE: "Save"
                }
                
            },

            statistics: {

                overview: {
                    OVERVIEW_TAG: 'Overview',
                    TODAY_CUSTOMER_TAG: 'Today customer',
                    YESTERDAY_CUSTOMER_TAG: 'Yesterday customer',
                    ALL_CUSTOMER_TAG: 'All customer',
                    ALL_MESSAGE_TAG: 'All message',
                    REALTIME_DATA_TAG: 'Today data',
                    REALTIME_CUSTOMER_TAG: 'Customer',
                    REALTIME_SERVICE_TAG: 'Service',
                    REALTIME_MESSAGE_TAG: 'Message',
                    HISTORY_DATA_TAG: 'History data',
                    HISTORY_CUSTOMER_TAG: 'Customer',
                    HISTORY_SERVICE_TAG: 'Service',
                    HISTORY_MESSAGE_TAG: 'Message',
                    MAX_RANGE_TAG: 'Less than 30 days',
                },
                
                historymessages: {
                    MESSAGE_FILE_TYPE_TAG: 'File',
                    MESSAGE_IMAGE_TYPE_TAG: 'Image',
                    MESSAGE_TXT_TYPE_TAG: 'Large text',
                    MESSAGE_GET_ERROR_TAG: "Get history message error.",

                    SEARCH_TAG: "Search",
                    MESSAGE_LIST_TAG: "Messages",
                    EMPTY_LIST_TAG: "Empty",
                    MESSAGES: "Messages",
                    MESSAGES_PREVIEW: "Messages preview",
                    
                },

                messageroute:  {
                    ALL: "ALL",
                    SMART: "SMART",
                    GROUP: "GROUP",
                    ROBOT: "ROBOT"
                },

                userprofile: {
                    EMAIL_TAG: "Email",
                    USER_NAME_TAG: "Username",
                    SAVE_TAG: "Save",
                },

                advanced_settings: {
                    CHANGE_PASSWORD_TAG: "Change Password",
                    CURRENT_PASSWORD_TAG: "Current password",
                    NEW_PASSWORD_TAG: "New password",
                    REPEAT_NEW_PASSWORD_TAG: "New password repeat",
                    SAVE_TAG: "Save",
                    FORGET_PASSWORD_TAG: "Forget password"
                },
                
            }

        },

        cn: {
            COPYRIGHT_PPMESSAGE: "夸客信息.",

            global: {
                DELETE_TEAM_TAG: "删除团队",
                DELETE_TEAM_NOTE_TAG: "删除团队是不可逆操作，该操作意味着将永久从本网站删除与该团队有关的所有数据.如有疑问请点击右下角图标咨询客服.",
                DELETE_TEAM_CONFIRM_TAG: "确认删除",
                DELETE_TEAM_CANCEL_TAG: "取消删除",
                DELETE_TEAM_NOTE_DATA_TAG: "删除，意味着您将失去所有与该团队有关的数据.",
                DELETE_TEAM_NOTE_MEAN_TAG: "请确保您充分了解该操作的意义?",
                
                PARAMS_MISS_TAG: "参数缺失",
                FULLNAME_ERROR_TAG: "姓名缺失或长度超过限制",
                NO_FIRSTNAME_TAG: "请输入您的名字",
                NO_LASTNAME_TAG: "请输入您的姓",
                NO_FULLNAME_TAG: "姓名缺失",
                NO_EMAIL_TAG: "邮箱缺失或者格式不正确",
                NO_PASSWORD_TAG: "密码缺失或者格式不正确",
                NO_RPASSWORD_TAG: "请再次输入密码",
                NO_AGREE_TAG: "请同意我们的协议",
                PASSWORD_NOT_MATCHED_TAG: "两次密码不匹配",
                EMAIL_USED_TAG: "该邮箱已被占用",
                SIGNUP_ERROR_TAG: "注册遇到错误",
                SIGNUP_SUCCESS_TAG: "注册成功",
                SERVICE_ERROR_TAG: "注册服务错误",
                FULLNAME_UNREGULAR_TAG: "用户全名不要使用非常规字符",
                PASSWORD_UNREGULAR_TAG: "用户密码不要使用非常规字符",
                FIRST_NAME_TOO_LONG_TAG: "名--长度超过限制",
                LAST_NAME_TOO_LONG_TAG: "姓--长度超过限制",
                EMAIL_TOO_LONG_TAG: "邮件--长度超过限制",
                COMPANY_NAME_TOO_LONG_TAG: "公司名字--长度超过限制",
                EMAIL_UNREACHABLE_TAG: "无法发送邮件，邮箱不可达",
                EMAIL_LOGIN_ERROR_TAG: "系统繁忙，无法登录邮箱发送邮件，请重新发送或者联系我们",
                EMAIL_SENDING_ERROR_TAG: "邮件发送失败，请重新发送或者联系我们",
                LENGTH_OUT_OF_RANGE_TAG: "长度超过限制",
                ERR_PASSWORD_CONTAINS_WHITESPACE_AT_HEAD_OR_TAIL: '密码开头或结尾不允许包含空格',

                SIGNUP_TAG: "创建新用户",
                SIGNIN_TAG: "用户登录",
                RESET_PASSWORD_TAG: "重设用户密码",
                
                CREATE_TEAM_TAG: "创建客服团队",
                START_TAG: "开始使用",
                FULLNAME_TAG: "真实姓名",
                LOGIN_NAME_TAG: "登录邮箱",
                LOGIN_PASSWORD_TAG: "密码",
                LOGIN_PASSWORD_REPEAT_TAG: "确认密码",
                SERVICE_TEAM_TAG: "服务条款",
                AGREE_SERVICE_TEAM_TAG: "注册并登录意味着同意本网站",
                MAKE_NAME_FOR_YOURTEAM: "为您的团队起一个响亮的名字吧!",
                TEAM_NAME: "客服团队名称",
                CONGRATULATIONS: "恭喜您，客服团队创建成功!",
                YOU_WILL_EXPERIENCE: "您将体验",
                ANY_TRAFFIC: "不限流量",
                ANY_MESSAGE: "不限消息",
                YOU_CAN: "开始使用，您可以：",
                DEPLOY_CODE: "代码部署",
                ADD_SERVICE_USER: "添加客服",
                MODIFY_SETTINGS: "修改信息",

                USER_ACCOUNT_TAG: "用户账户",
                SIGNIN_FAILED_TAG: "登录失败",
                SEND_NEW_PASSWORD_TAG: "邮寄新的密码",

                SEND_NEW_PASSWORD_SUCCESS_TAG: "成功邮寄新的密码",
                SEND_NEW_PASSWORD_FAILED_TAG: "邮寄新的密码失败",

            },

            app: {
                MY_PROFILE_TAG: "我的信息",
                LOGOUT_TAG: "登出",
                LOGIN_TAG: "登入",
                DOWNLOAD: "下载",
                CONTACT_US:"联系我们",

                START_SERVICE_TAG: "开始服务",
                PRIVATE_CONFIG_TAG: "个人设置",
                TEAM_CONFIG_TAG: "团队设置",
                EXIT_APP_TAG: "退出",
                SIGNUP_TAG: "注册",
                LOGIN_TAG: "登录",
                SLOGAN: "开源企业消息通讯平台",
                APPS: "所有团队",
            },

            calendar:{
                TODAY_TAG: "今天",
                YESTERDAY_TAG:"昨天",
                LAST_7_DAYS_TAG:"最近7天",
                LAST_30_DAYS_TAG:"最近30天",
                THIS_MONTH_TAG:"本月",
                LAST_MONTH_TAG:"上一个月",
                /*按钮文本开始*/
                APPLY_LABEL_TAG:"应用",
                CANCEL_LABEL_TAG:"取消",
                FROM_LABEL_TAG:"从",
                TO_LABEL_TAG:"到",
                CUSTOM_RANGE_LABEL_TAG:"定制范围",
                monthname:{
                    JANUARY_TAG:"一月",
                    FEBRUARY_TAG:"二月",
                    MARCH_TAG:"三月",
                    APRIL_TAG:"四月",
                    MAY_TAG:"五月",
                    JUNE_TAG:"六月",
                    JULY_TAG:"七月",
                    AUGUST_TAG:"八月",
                    SEPTEMBER_TAG:"九月",
                    OCTOBER_TAG:"十月",
                    NOVEMBER_TAG:"十一月",
                    DECEMBER_TAG:"十二月",
                },
                /*按钮文本定义结束*/
            },//calendar   

            main: {
                LEARN_MORE_TAG: "了解更多",
                PLUG_AND_PLAY_TAG: "即插即用",
                MULTIPLE_PLATFORMS_TAG: "多平台",
                THE_MESSAGING_SYSTEM_IN_APPLICATIONS: "应用内消息系统",

            },

            signup: {
                
            },

            createaccount: {
                ACCOUNT_ALREADY_CREATED: "账户已经被创建了。",
                NO_PASSWORD_TAG: "需要填写密码。",
            },

            login: {
                INVALID_EMAIL_TAG: "无效的EMAIL地址",
                NO_EMAIL_TAG: "需要填写EMAIL地址。",
                NO_PASSWORD_TAG: "需要填写密码。",

                NO_SUCH_USER_TAG: "无此用户。",
                PASSWORD_MISMATCH_TAG: "密码错误。",

                LOGIN_TAG: "登录",
                LOGIN_EMAIL_PLACEHOLDER_TAG: "登录邮箱",
                LOGIN_PASSWORD_TAG: "密码",
                LOGIN_FORGET_PASSWORD_TAG: "忘记密码?",
                LOGIN_REGISTER_TAG: "注册"
                
            },

            changepassword: {
                NO_PASSWORD_TAG: "请输入你的密码。",
                PASSWORD_NOT_MATCH_TAG: "两次输入的密码不同。",
                CHANGE_PASSWORD_SUCCESS_TAG: "修改密码成功。",
                CHANGE_PASSWORD_FAIL_TAG: "修改密码失败。",
            },

            settings: {
                menu: {
                    DATA_ANALYSIS_TAG: "数据分析",
                    DATA_OVERVIEW_TAG: "数据总览",
                    HISTORY_MSG_TAG: "历史消息",
                    TEAM_CONFIG_TAG: "团队设置",
                    BASIC_CONFIG_TAG: "基本信息",
                    USER_INTERFACE_TAG: "用户界面",
                    MESSAGE_DISPATCH_TAG: "消息分流",
                    SERVICE_USER_TAG: "客服人员",
                    SERVICE_GROUP_TAG: "客服分组",
                    APP_INTEGRAGE_TAG: "应用集成",
                    ACCOUT_CONFIG_TAG: "账户设置",
                    ADVANCED_CONFIG_TAG: "高级设置"
                },
                
                profile: {
                    UPDATE_SUCCESSFULLY_TAG: "更新成功。",
                    UPDATE_FAILED_TAG: "更新失败。",
                },
                
                account: {
                    OLDPASSWORD_MISMATCH_TAG: "原密码输入错误",
                    NEWPASSWORD_MISMATCH_TAG: "新密码两次输入不同",
                    REMOVE_USER_PROMOTE_TAG: "重要的说明看三遍",
                    REMOVE_USER_FAILED_TAG: "注销用户失败",
                    NO_EMAIL_OR_PASSWORD_TAG: "没提供邮件或者密码",
                },

                resetpassword: {
                    NO_EMAIL_TAG: "请输入您的邮箱",
                    EMAIL_NOT_MATCH_TAG: "邮箱和此账号不匹配，请输入正确的邮箱",
                    SERVICE_ERROR_TAG: "发生了一些错误，请稍后重试",
                    ERR_NO_USER: "此用户不存在",
                },

                createapplication: {
                    NO_APPNAME_TAG: "请输入团队的名称。",
                    CREATEAPP_SUCCESSFULLY_TAG: "创建团队成功。",
                    CREATEAPP_FAILED_TAG: "创建团队失败。",
                    APP_ALREADY_EXITED_TAG: "这个名字已经使用，请换一个名字。",
                    APP_NAME_LENGTH_LIMIT_TAG: "团队名字超过长度",
                    CONTAIN_UNREGULAR_WORDS_TAG: "团队名称包含非常规字符",
                },
            },

            payment: {
                pay: {
                    CHOOSE_AGENT_SMALLER_THAN_EXIST_AGENT_TAG: "您当前所选坐席数小于团队实际坐席数，请扩大坐席数或删除一些坐席再来选购，谢谢",
                },

                payment: {
                    
                },

                pwechat: {
                    
                },
            },
            
            application: {
                profile: {
                    UPDATE_SUCCESSFULLY_TAG: "更新成功。",
                    UPDATE_FAILED_TAG: "更新失败。",
                    UPDATE_APP_LACK_PARAMS_TAG: "修改缺乏参数",
                    UPDATE_APP_NOT_EXIST_TAG: "修改的团队不存在",
                    UPDATE_APP_NAME_OUT_OF_LENGTH_TAG: "修改的团队名超出长度",
                    REMOVE_APP_SUCCESS_TAG: "删除团队成功",
                    PERMISSSION_DENIED_TAG: "操作没有权限",
                    NO_CHANGE_TAG: "没有做出任何修改",
                    NOT_REGULAR_WORDS_TAG: "请不要使用非常规字符",
                    WORDS_OUT_OF_LENGHT_TAG: "团队名称超过限制",
                    COPY_SUCCESSFUL_TAG: "成功复制到剪贴板",
                    COPY_FAIL_TAG: "复制失败，请手动复制!",
                },
                account: {
                    OLDPASSWORD_MISMATCH_TAG: "原密码输入错误",
                    NEWPASSWORD_MISMATCH_TAG: "新密码两次输入不同",
                },

                resetpassword: {
                    NO_EMAIL_TAG: "请输入您的邮箱",
                    EMAIL_NOT_MATCH_TAG: "邮箱和此账号不匹配，请输入正确的邮箱",
                    SERVICE_ERROR_TAG: "发生了一些错误，请稍后重试",

                    FIND_PASSWORD_TAG: "找回密码",
                    LOGIN_EMAIL_TAG: "登录邮箱",
                    FIND_TAG: "发送找回密码邮件",
                },

                welcome: {
                    UPDATE_APP_SUCCESSFULLY_TAG: "更新成功",
                    UPDATE_APP_LACK_PARAMS_TAG: "参数缺失",
                    UPDATE_APP_NOT_EXIST_TAG: "应用不存在",
                    WELCOME_WORDS_OUT_OF_LENGTH_TAG: "问候语长度超过限制",
                    COLOR_PICKED_NOT_RIGHT_TAG: "颜色取值有问题",
                    UPDATE_ENCOUNTER_AN_ERROR_TAG: "更新遇到一个错误，请重试或者联系客服，谢谢",
                    NO_CHANGED_TAG: "没有任何改变",

                    WELCOME_INFO_TAG: "欢迎信息",
                    SAVE_TAG: "保存",
                    AUTO_POPUP: "自动弹出",
                    POPUP_ONLY_ONCE: "仅首次",
                    POPUP_NEVER: "从不弹出",
                    POPUP_ALWAYS: "总是弹出",
                    COLOR: "图标颜色",

                    TOOLTIP_WELCOME_TAG: "鼠标悬停在聊天图标上的时候，显示的欢迎信息",
                    TOOLTIP_COLOR_TAG: "聊天图标的背景颜色",
                },

                grouping: {
                    WORDS_OUT_OF_LENGTH_TAG: "超过最大长度限制",
                    UNREGULAR_WORDS_TAG: "请不要使用非常规字符",
                    NO_ORG_GROUP_TAG: "没有找到组的信息",
                    LACK_PARAMS_TAG: "缺少必要的信息",
                    NOT_LIST_TAG: "参数格式不对",
                    ADD_GROUP_USER_SUCCESS_TAG: "添加组用户成功",
                    ENCOUNTER_AN_ERROR_TAG: "操作遇到错误，请查看控制台",
                    REMOVE_GROUP_SUCCESS_TAG: "成功移除小组",
                    UPDATE_GROUP_SUCCESS_TAG: "成功更新小组信息",
                    CREATE_GROUP_SUCCESS_TAG: "成功创建小组",
                    MODIFY_INFO_IS_NOT_SUITABLE_TAG: "所填参数不合适",
                    NO_GROUP_USER_SELECTED_TAG: "没有选择任何客服人员",
                    GROUP_NAME_EXISTED_TAG: "组名已经存在",
                    NO_GROUP_NAME: "请填写组名",
                    NO_GROUP_DESC: "请填写组的描述信息",

                    SERVICE_GROUP_MANAGER_TAG: "客服分组管理",
                    MOVE_TO: "移动到",
                    SELECT_GROUP: "选择小组",
                    ALL_SERVICE_USER: "全部客服",
                    NEW_GROUP: "新建分组",
                    SELECT_ALL: "全选",
                    LOGIN_EMAIL: "登录邮箱",
                    ROLE: "角色",
                    GROUP_IN: "分组",
                    GROUP_MODE_CONFIG: "分组模式配置",
                    IS_SHOW_GROUP: "是否显示",
                    GROUP_NAME: "组名",
                    DISPATCH_WAY: "分流方式",
                    CREATE_GROUP: "创建分组",
                    GROUP_DESC: "描述",
                    MODIFY_GROUP: "修改分组",
                    SAVE: "确认修改",
                    
                    ADMIN_USER_TAG: "团队管理员",
                    SERVICE_USER_TAG: "客服人员",

                    UNAMED_GROUP_NAME_TAG: "未分组",
                    DISTRIBUTOR_TAG: "首选组",
                },
                
               people: {
                   SEND_INVITATION_EMAIL_SUCCESSFULLY_TAG: "发送邀请邮件成功。",
                   SEND_INVITATION_EMAIL_FAILED_TAG: "发送邀请邮件失败。",
                   CREATE_APP_USER_SUCCESSFULLY_TAG:"添加成功。",
                   CREATE_APP_USER_FAILED_TAG:"添加失败。",
                   USER_EXIST_AND_INVITE_TAG:"用户已经存在，请点击‘邀请客服人员’按钮添加",
                   REMOVE_APP_USER_SUCCESSFULLY_TAG:"删除成功。",
                   REMOVE_APP_USER_FAILED_TAG:"删除失败。",
                   ALREADY_IS_APP_USER_TAG:"这个用户已经添加，不需要重复添加。",
                   QUOTA_REACH_TO_UPPER_LIMIT_TAG:"坐席配额达到上限,请先扩容",
                   PARAMS_MISS_TAG: "参数不足",
                   PERMISSION_DENY_TAG: "只有团队owner才能创建成员",

                   CREATE_SERVICE_USER_TAG: "创建客服人员",
                   SEARCH_TAG: "搜索",
                   SELECT_ALL_TAG: "选择全部",
                   REMOVE_SERVICE_USER_TAG: "编辑客服",
                   REMOVE_SERVICE_USER_TAG: "移除客服",
                   REMOVE_SERVICE_USER_PROMOTE_TAG: "该操作会移除您选定的客服人员：",
                   OWNER_TAG: "创建者",
                   SERVICE_USER_TAG: "客服",
                   CANCEL_TAG: "取消",
                   OK_TAG: "确定",
                   SERVICE_USER_NAME_TAG: "客服全名",
                   SERVICE_USER_EMAIL_TAG: "客服邮箱",
                   PASSWORD_TAG: "设置密码",
                   CONFIRM_PASSWORD_TAG: "确认密码",
                   CREATE_TAG: "创建",
                   SAVE_TAG: "保存",

                   EDIT_APP_USER_SUCCESSFULLAY_TAG: "更新用户信息成功",
                   EDIT_APP_USER_FAILED_TAG: "更新用户信息失败",

               },

                manualinstall: {
                    COPY_SUCCESSFUL_TAG: "成功复制到剪贴板.",
                },

                integrate: {
                    COPY_TO_CLIPBOARD: "复制到剪贴板",
                    PREVIEW: "马上看看",
                    URL_LINK: "生成链接",
                    DEMO_DEPLOY_TO: "PPMessage已经部署在下面的网页链接上",
                    COPY_CODE_TO_BODY: "复制下面的代码并置于<body></body>元素之间"
                },

                teamprofile: {
                    TEAM_INFO: "团队信息",
                    TEAM_NAME: "团队名称",
                    SAVE: "确认修改"
                }
                
            },

            statistics: {

                overview: {
                    OVERVIEW_TAG: '数据总览',
                    TODAY_CUSTOMER_TAG: '今日访客',
                    YESTERDAY_CUSTOMER_TAG: '昨日访客',
                    ALL_CUSTOMER_TAG: '累计访客',
                    ALL_MESSAGE_TAG: '累计消息',
                    REALTIME_DATA_TAG: '实时统计',
                    REALTIME_CUSTOMER_TAG: '访客',
                    REALTIME_SERVICE_TAG: '客服',
                    REALTIME_MESSAGE_TAG: '消息',
                    HISTORY_DATA_TAG: '历史统计',
                    HISTORY_CUSTOMER_TAG: '访客',
                    HISTORY_SERVICE_TAG: '客服',
                    HISTORY_MESSAGE_TAG: '消息',
                    MAX_RANGE_TAG: '最多30天',
                },

                historymessages: {
                    MESSAGE_FILE_TYPE_TAG: '文件',
                    MESSAGE_IMAGE_TYPE_TAG: '图片',
                    MESSAGE_TXT_TYPE_TAG: '文本消息',
                    MESSAGE_GET_ERROR_TAG: "获取历史信息错误",

                    SEARCH_TAG: "搜索",
                    MESSAGE_LIST_TAG: "消息列表",
                    EMPTY_LIST_TAG: "没有任何匹配的会话",
                    MESSAGES: "条消息",
                    MESSAGES_PREVIEW: "消息预览",
                    
                },

                messageroute: {
                    ALL: "群发模式",
                    SMART: "智能匹配",
                    GROUP: "分组模式",
                    ROBOT: "人工智能"
                },

                userprofile: {
                    EMAIL_TAG: "邮箱",
                    USER_NAME_TAG: "姓名",
                    SAVE_TAG: "确认修改",
                },

                advanced_settings: {
                    CHANGE_PASSWORD_TAG: "修改密码",
                    CURRENT_PASSWORD_TAG: "现有密码",
                    NEW_PASSWORD_TAG: "新密码",
                    REPEAT_NEW_PASSWORD_TAG: "确认新密码",
                    SAVE_TAG: "确认修改",
                    FORGET_PASSWORD_TAG: "忘记密码"
                },
                
            }

        },

    })

    .config(function($translateProvider, yvTransTags) {

        $translateProvider.translations("en", yvTransTags.en);
        $translateProvider.translations("zh-CN", yvTransTags.cn);

        $translateProvider.registerAvailableLanguageKeys(["en", "zh-CN"], {
            "en": "en",
            "en-US": "en",
            "en-UK": "en",
            "zh-CN": "zh-CN"
        });

        $translateProvider.determinePreferredLanguage(function() {
            return window.navigator.userLanguage || window.navigator.language;
            //return "zh-CN"
        });

        $translateProvider.fallbackLanguage("en", "zh-CN");

    });

angular.module("this_app.route", ["ui.router", "this_app.constants"])

    .config(function($stateProvider, $urlRouterProvider, yvConstants, blockUIConfig) {
        blockUIConfig.autoInjectBodyBlock = false;

        $stateProvider

            .state("forget", {
                url: "/forget",
                templateUrl: yvConstants.STATIC_PREFIX + "html/forget.html",
                controller: "ForgetCtrl"
            })

            .state("app", {
                abstract: true,
                url: "/app",
                templateUrl: yvConstants.STATIC_PREFIX + "html/app.html",
                controller: "AppCtrl"
            })

            .state("app.signup-md", {
                url: "/signup-md/:sign_what",
                templateUrl: yvConstants.STATIC_PREFIX + "html/signup-md.html",
                controller: "SignupMdCtrl"
            })

            .state("app.error", {
                url: "/error",
                templateUrl: yvConstants.STATIC_PREFIX + "html/404.html",
                controller: "ErrorCtrl"
            })

            .state("app.createaccount", {
                url: "/createaccount/:account",
                templateUrl: yvConstants.STATIC_PREFIX + "html/createaccount.html",
                controller: "CreateAccountCtrl"
            })

            .state("app.recoverpassword", {
                url: "/recoverpassword/:account",
                templateUrl: yvConstants.STATIC_PREFIX + "html/recoverpassword.html",
                controller: "RecoverPasswordCtrl"
            })

            .state("app.policy", {
                abstract: true,
                url: "/policy",
                templateUrl: yvConstants.STATIC_PREFIX + "html/policy/policy.html",
                controller: "PolicyCtrl"
            })

            .state("app.policy.termofservice", {
                url: "/termofservice",
                templateUrl: yvConstants.STATIC_PREFIX + "html/policy/termofservice.html",
                controller: "TermOfServiceCtrl"
            })

            .state("app.policy.privacypolicy", {
                url: "/privacypolicy",
                templateUrl: yvConstants.STATIC_PREFIX + "html/policy/privacypolicy.html",
                controller: "PrivacyPolicyCtrl"
            })

             .state("app.resetpassword", {
                url: "/resetpassword/:email",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/resetpassword.html",
                controller: "SettingsResetpasswordCtrl"
            })

             .state("app.confirmreset", {
                url: "/confirmreset",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/confirmreset.html",
                controller: "SettingsConfirmresetCtrl"
            })

            .state("app.settings.teamprofile", {
                url: "/teamprofile",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/teamprofile.html",
                controller: "ApplicationProfileCtrl"
            })

            .state("app.settings.configuration", {
                url: "/configuration",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/welcome.html",
                controller: "ApplicationWelcomeCtrl"
            })

            .state("app.settings.teamgrouping", {
                url: "/teamgrouping",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/grouping.html",
                controller: "GroupingCtrl"
            })

            .state("app.glance", {
                url: "/glance",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/glance.html",
                controller: "GlanceCtrl"
            })
        
            .state("app.settings.teampeople", {
                url: "/teampeople",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/people.html",
                controller: "ApplicationPeopleCtrl"
            })

            .state("app.settings.messageroute", {
                url: "/messageroute",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/messageroute.html",
                controller: "ApplicationMessageRouteCtrl"
            })

            .state("app.settings.overview", {
                url: "/overview",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/overview.html",
                controller: "StatisticsOverviewCtrl"
            })

            .state("app.settings.historymessage", {
                url: "/historymessage",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/historymessage.html",
                controller: "StatisticsHistoryMessageCtrl"
            })

            .state("app.settings.integrate", {
                url: "/integrate",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/integrate.html",
                controller: "IntegrateCtrl"
            })

            .state("app.settings", {
                abstract: true,
                url: "/settings",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/settings.html",
                controller: "SettingsCtrl"
            })

            .state("app.settings.profile", {
                url: "/profile",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/userprofile.html",
                controller: "SettingsProfileCtrl"
            })

            .state("app.settings.account", {
                url: "/account",
                templateUrl: yvConstants.STATIC_PREFIX + "html/settings/account.html",
                controller: "SettingsAccountCtrl"
            })
        ;
      
        $urlRouterProvider.otherwise("/app/signup-md/signin");

    });

$yvAjaxService.$inject = ["$state", "$timeout", "$http", "$cookies", "yvUser", "yvConstants", "yvUtil", "yvLog", "yvDebug"];
function $yvAjaxService($state, $timeout, $http, $cookieStore, yvUser, yvConstants, yvUtil, yvLog, yvDebug) {

    var _admin = {
        session_uuid: null,
        uuid: null,
        name: null,
        fullname: null,
        icon: null,
    };

    var _base_post_auth = function( authString ) {
        var _auth_url = "/ppauth/token";
        var _auth_data = authString;
        var _auth_config = {};
        
        _auth_config.url = _auth_url;
        _auth_config.method = "POST";
        _auth_config.data = _auth_data;
        _auth_config.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        yvLog.d("AUTH POST url: %s, data: %o.", _auth_config.url, _auth_config.data);
        return $http(_auth_config);
    };

    var _post_auth = function(_data) {
        var _auth_data = "grant_type=password&user_email=" + _data.user_email
            + "&user_password=" + _data.user_password
            + "&client_id=" + yvConstants.PPCONSOLE_API.key;
        return _base_post_auth( _auth_data );
    };

    var _get_credentials_token = function() {
        var _auth_data = "grant_type=client_credentials"
            + "&client_secret=" + yvConstants.PPCONSOLE_API.secret
            + "&client_id=" + yvConstants.PPCONSOLE_API.key;
        return _base_post_auth( _auth_data );
    };

    var _apiPostWithToken = function(_url, _data, _token) {
        _data = _data || {};

        var apiUrl = '/api' + _url;
        var accessToken = _token;
        accessToken = accessToken.replace(/\"/g, "");
        
        return $http({
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "OAuth " + accessToken,
            },
            method: 'POST',
            cache: false,
            url: apiUrl,
            data: _data
        });
    };
    
    var _apiPost = function(_url, _data) {
        return _apiPostWithToken(_url, _data, $cookieStore.get(yvConstants.COOKIE_KEY.ACCESS_TOKEN));
    };

    // @see mdm/mdm/api/error.py API_ERR
    var API_ERR = {
        NO_ERR: 0,
        NO_PARA: 6,
        EX_USER: 22
    };

    return {
        login: function(user) {
            return _post_auth(user);
        },

        ppconsole_get_overview_number : function(app_uuid) {
            return _apiPost("/PPCONSOLE_GET_OVERVIEW_NUMBER", {app_uuid: app_uuid});
        },

        ppconsole_get_real_time_customer_number : function(app_uuid) {
            return _apiPost("/PPCONSOLE_GET_REAL_TIME_CUSTOMER_NUMBER", {app_uuid: app_uuid});
        },

        ppconsole_get_real_time_service_number : function(app_uuid) {
            return _apiPost("/PPCONSOLE_GET_REAL_TIME_SERVICE_NUMBER", {app_uuid: app_uuid});
        },

        ppconsole_get_real_time_message_number : function(app_uuid) {
            return _apiPost("/PPCONSOLE_GET_REAL_TIME_MESSAGE_NUMBER", {app_uuid: app_uuid});
        },

        ppconsole_get_service_number_by_range : function(app_uuid, begin, end) {
            return _apiPost("/PPCONSOLE_GET_SERVICE_NUMBER_BY_RANGE", {app_uuid: app_uuid, begin_date: begin, end_date: end});
        },

        ppconsole_get_customer_number_by_range : function(app_uuid, begin, end) {
            return _apiPost("/PPCONSOLE_GET_CUSTOMER_NUMBER_BY_RANGE", {app_uuid: app_uuid, begin_date: begin, end_date: end});
        },

        ppconsole_get_message_number_by_range : function(app_uuid, begin, end) {
            return _apiPost("/PPCONSOLE_GET_MESSAGE_NUMBER_BY_RANGE", {app_uuid: app_uuid, begin_date: begin, end_date: end});
        },

        logout: function(user_uuid) {
            return _apiPost("/PPCONSOLE_LOGOUT", {user_uuid: user_uuid});
        },

        get_user_detail: function(user_uuid) {
            return _apiPost("/PP_GET_USER_DETAIL", {user_uuid: user_uuid});
        },

        get_user_detail_with_password: function(user_uuid) {
            return _apiPost("/PP_GET_USER_DETAIL", {user_uuid: user_uuid, return_password: true});
        },

        get_admin_detail: function(user_uuid) {
            return _apiPost("/PP_GET_ADMIN_DETAIL", {user_uuid: user_uuid});
        },

        get_admin_detail_with_password: function(user_uuid) {
            return _apiPost("/PP_GET_ADMIN_DETAIL", {user_uuid: user_uuid, return_password: true});
        },

        create_app: function(user_uuid, app_name) {
            return _apiPost("/PP_CREATE_APP", {user_uuid: user_uuid, app_name: app_name});
        },

        remove_app: function(user_uuid, app_uuid, app_key) {
            return _apiPost("/PP_REMOVE_APP", {user_uuid: user_uuid, app_uuid: app_uuid, app_key: app_key});
        },

        leave_app: function(user_list, app_uuid) {
            return _apiPost("/PP_LEAVE_APP", {user_list: user_list, app_uuid: app_uuid});
        },

        is_email_valid: function(requestParams) {
            return _apiPost("/PP_IS_EMAIL_VALID", requestParams);
        },

        get_app_owned_by_user: function(user_uuid) {
            return _apiPost('/PP_GET_APP_OWNED_BY_USER', {user_uuid: user_uuid});
        },
        
        update_app_info: function(requestParams) {
            return _apiPost('/PP_UPDATE_APP_INFO', requestParams);
        },

        create_user: function(requestParams) {
            return _apiPost("/PP_CREATE_USER", requestParams);
        },

        update_user: function(requestParams) {
            return _apiPost('/PP_UPDATE_USER', requestParams);
        },

        remove_user: function(user_uuid) {
            return _apiPost("/PP_REMOVE_USER", {user_uuid: user_uuid});
        },

        // requestParams: {app_uuid: xxxxx}
        get_app_conversation_list: function(requestParams) {
            return _apiPost('/PP_GET_APP_CONVERSATION_LIST', requestParams);
        },

        // get single conversation's history messages
        get_history_messages: function(requestParams) {
            return _apiPost('/PP_GET_HISTORY_MESSAGE', requestParams);
        },

        //create group
        create_org_group: function(requestParams) {
            return _apiPost('/PP_CREATE_ORG_GROUP', requestParams);
        },

        get_group_list: function(requestParams) {
            return _apiPost('/PP_GET_APP_ORG_GROUP_LIST', requestParams);
        },

        get_group_detail: function(requestParams) {
            return _apiPost('/PP_GET_ORG_GROUP_DETAIL', requestParams);
        },

        get_group_user_list: function(requestParams) {
            return _apiPost('/PP_GET_ORG_GROUP_USER_LIST', requestParams);
        },

        update_group: function(requestParams) {
            return _apiPost('/PP_UPDATE_ORG_GROUP', requestParams);
        },

        // if "app_uuid" not in _body or "group_uuid" not in _body or "user_list" not in _body:
        remove_group: function(requestParams) {
            return _apiPost('/PP_REMOVE_ORG_GROUP', requestParams);
        },

        add_group_user: function(requestParams) {
            return _apiPost('/PP_ADD_ORG_GROUP_USER', requestParams);
        },

        remove_group_user: function(requestParams) {
            return _apiPost('/PP_REMOVE_ORG_GROUP_USER', requestParams);
        },

        get_no_group_user_list: function(requestParams) {
            return _apiPost('/PP_GET_NO_GROUP_USER_LIST', requestParams);
        },

        get_team_service_user_list: function(requestParams) {
            return _apiPost('/PP_GET_APP_SERVICE_USER_LIST', requestParams);
        },

        get_api_info: function(requestParams) {
            return _apiPost('/PP_GET_API_INFO', requestParams);
        },

        get_credentials_token: function() {
            return _get_credentials_token();
        },

        signup: function(requestParams, credentials_token) {
            return _apiPostWithToken('/PPCONSOLE_SIGNUP', requestParams, credentials_token);
        },

        send_new_password: function(requestParams, credentials_token) {
            return _apiPostWithToken('/PPCONSOLE_SEND_NEW_PASSWORD', requestParams, credentials_token);
        },

        get_all_apps: function(requestParams) {
            return _apiPost('/PP_GET_ALL_APP_LIST', requestParams);            
        },

        auth: function(user) {
            return _post_auth(user);
        },

        ///////////// API_ERR_CODE ////////////////
        API_ERR: API_ERR
        
    };
} // end $yvAjaxService

angular.module("this_app.services").factory("yvAjax", $yvAjaxService);

$yvUserService.$inject = [];
function $yvUserService() {

    var _user = {
        uuid: null,
        
        app_uuid: null,
        session_uuid: null,
        
        email: null,
        fullname: null,
        
        icon: null,
        lang: null,
        role: null,
        logined: false,
        password: null,

        status: null,

        firstname: null,
        lastname: null,

        company: null,
        team: null,

        access_token: null,
    };

    return {
        get: function (attribute) {
            if (arguments.length === 0) {
                return _user;
            }
            if (_user.hasOwnProperty(attribute)) {
                return _user[attribute];
            }
            return null;
        },

        set: function (attribute, value) {
            if (_user.hasOwnProperty(attribute)) {
                _user[attribute] = value;
            }
        },

        is_admin_user: function() {
            return _user && _user.status === 'ADMIN';
        },

        set_company: function(_company) {
            _user.company = _company;
        },

        get_company: function() {
            return _user.company;
        },

        set_lastname: function(_name) {
            _user.lastname = _name;
        },
        
        get_lastname: function() {
            return _user.lastname;
        },

        set_firstname: function(_name) {
            _user.firstname = _name;
        },
        
        get_firstname: function() {
            return _user.firstname;
        },
        
        set_status: function(_status) {
            _user.status = _status;
        },

        get_status: function() {
            return _user.status;
        },
        
        get_password: function() {
            return _user.password;
        },

        set_password: function(password) {
            _user.password = password;
        },
        
        get_session: function() {
            return _user.session_uuid;
        },

        set_session: function(_id) {
            _user.session_uuid = _id;
        },

        set_email: function(_email) {
            _user.email = _email;
        },

        get_email: function() {
            return _user.email;
        },
        
        set_fullname: function(_name) {
            _user.fullname = _name;
        },

        get_fullname: function() {
            return _user.fullname;
        },
        
        set_icon: function(_icon) {
            _user.icon = _icon;
        },

        get_icon: function() {
            return _user.icon;
        },
                
        set_uuid: function(_uuid) {
            _user.uuid = _uuid;
        },

        get_uuid: function() {
            return _user.uuid;
        },
        
        set_language: function(_l) {
            _user.lang = _l;
        },

        get_language: function() {
            return _user.lang;
        },
        
        set_role: function(_role) {
            _user.role = _role;
        },

        get_role: function() {
            return _user.role;
        },
        
        set_logined: function(_logined) {
            _user.logined = _logined;
        },

        get_logined: function() {
            return _user.logined;
        },

        set_app_uuid: function(_uuid) {
            _user.app_uuid = _uuid;
        },

        get_app_uuid: function() {
            return _user.app_uuid;
        },

        set_team: function(_team) {
            if (_user.team == null) {
                _user.team = {};
            }
            if ( !_team ) {
                _user.team = _team;
            }
            for (var _i in _team) {
                if (_team.hasOwnProperty(_i)) {
                    _user.team[_i] = _team[_i];
                }
            }
            return;
        },

        get_team: function() {
            return _user.team;
        },

        set_team_agent: function(_agent_num) {
            _user.team.agent_num = _agent_num;
        },

        get_team_agent: function() {
            return _user.team.agent_num;
        },

        set_login_data: function(data) {
            this.set_logined(true);
            this.set_fullname(data.user_fullname);
            this.set_lastname(data.user_lastname);
            this.set_firstname(data.user_firstname);
            this.set_company(data.user_company);
            this.set_email(data.user_email);
            this.set_session(data.session_uuid);
            this.set_uuid(data.uuid);
            this.set_password(data.user_password);
            this.set_app_uuid(data.app_uuid);
            this.set_icon(data.user_icon);
            this.set_status(data.user_status);
            return;
        },

        //clean up all data and status
        logout: function() {
            for (var _i in _user) {
                _user[_i] = null;
            };
            _user["logined"] = false;
            console.log("===",this.get());
            return;
        },
    };
}

angular.module("this_app.services")
    .factory("yvUser", $yvUserService);

/*
 * guijin.ding@yvertical.com
 * copyright @ 2010-2015 
 * all rights reserved
 *
 */

$yvMime.$inject = [];
function $yvMime() {

    /*
      .doc     application/msword
      .docx    application/vnd.openxmlformats-officedocument.wordprocessingml.document
      .rtf     application/rtf
      .xls     application/vnd.ms-excel	application/x-excel
      .xlsx    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      .ppt     application/vnd.ms-powerpoint
      .pptx    application/vnd.openxmlformats-officedocument.presentationml.presentation
      .pps     application/vnd.ms-powerpoint
      .ppsx    application/vnd.openxmlformats-officedocument.presentationml.slideshow
      .pdf     application/pdf
      .swf     application/x-shockwave-flash
      .dll     application/x-msdownload
      .exe     application/octet-stream
      .msi     application/octet-stream
      .chm     application/octet-stream
      .cab     application/octet-stream
      .ocx     application/octet-stream
      .rar     application/octet-stream
      .tar     application/x-tar
      .tgz     application/x-compressed
      .zip     application/x-zip-compressed
      .z       application/x-compress
      .wav     audio/wav
      .wma     audio/x-ms-wma
      .wmv     video/x-ms-wmv
      .mp3 .mp2 .mpe .mpeg .mpg     audio/mpeg
      .rm      application/vnd.rn-realmedia
      .mid .midi .rmi     audio/mid
      .bmp     image/bmp
      .gif     image/gif
      .png     image/png
      .tif .tiff  image/tiff
      .jpe .jpeg .jpg     image/jpeg
      .txt      text/plain
      .xml      text/xml
      .html     text/html
      .css      text/css
      .js       text/javascript
      .mht .mhtml   message/rfc822
    */
    
    
    var _mime_icon = function(_mime) {
        var _prefix = "../img/";
        var _word = _prefix + "document-word.png";
        var _xsl = _prefix + "document-xls.png";
        var _pdf = _prefix + "document-pdf.png";
        var _ppt = _prefix + "document-ppt.png";
        var _plain = _prefix + "document-plain.png";
        
        var _map = {
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : _word,
            "application/msword": _word,
            "application/vnd.ms-excel" : _xsl,
	        "application/x-excel": _xsl,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : _xsl,
            "application/vnd.ms-powerpoint" : _ppt,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation" : _ppt,
            "application/vnd.ms-powerpoint" : _ppt,
            "application/vnd.openxmlformats-officedocument.presentationml.slideshow" : _ppt,
            "application/pdf" : _pdf,
        };
        
        if (_map.hasOwnProperty(_mime)) {
            return _map[_mime];
        }
        
        return _plain;
    };


    return {
        mime_icon: function(_mime) {
            return _mime_icon(_mime);
        },
    };
}

angular.module("this_app").factory('yvMime', $yvMime);

$yvUtilService.$inject = ["$rootScope", "$translate", "$http", "$base64", "yvConstants", "yvLog"];
function $yvUtilService($rootScope, $translate, $http, $base64, yvConstants, yvLog) {

    var _is_test_host = function(host) {
        if (host.indexOf("ppmessage.cn") == -1) {
            return true;
        }
        return false;
    },

        // Message util
        messageUtil = (function() {

            return {
                getMessageSummary: function(lang, type, messageBody) {
                    
                    if (!lang || !type || !messageBody) return '';

                    var typeArray = lang;
                    
                    switch (type) {
                    case 'TEXT':
                        return messageBody;

                    case 'FILE':
                        return '[' + typeArray['statistics.historymessages.MESSAGE_FILE_TYPE_TAG'] + '] ' + JSON.parse(messageBody).name;

                    case 'IMAGE':
                        return '[' + typeArray['statistics.historymessages.MESSAGE_IMAGE_TYPE_TAG'] + ']';

                    case 'TXT':
                        return '[' + typeArray['statistics.historymessages.MESSAGE_TXT_TYPE_TAG'] + ']';

                    default:
                        return '';
                    }
                },

                getMessageFormatedDate: function(messageJsonBody) {
                    if (!messageJsonBody) return '';

                    if ( messageJsonBody.message_body &&
                         typeof messageJsonBody.message_body === 'string' ) {
                        var jsonMsg = JSON.parse( messageJsonBody.message_body );
                        return moment.unix( jsonMsg.ts ).format( 'YYYY-MM-DD HH:mm' );
                    }

                    return dateUtil.moment(messageJsonBody.updatetime).format('YYYY-MM-DD HH:mm');
                },

                getConversationUpdateTsInSeconds: function( conversation ) {
                    if ( !conversation ) return 0;
                    
                    if ( conversation.latest_message ) {
                        var msgStringBody = conversation.latest_message.message_body;
                        if ( msgStringBody && typeof msgStringBody === 'string' ) {
                            return JSON.parse( msgStringBody ).ts;
                        }
                    }
                    
                    return dateUtil.moment( conversation.updatetime ).unix();
                }
            }
            
        })(),

        // Icon Util
        iconUtil = (function() {

            var DEFAULT = yvConstants.DEFAULT_USER_ICON;

            return {

                // iconUtil.getIcon(); // return `yvConstants.DEFAULT_USER_ICON`
                // iconUtil.getIcon('xxx-xxx-xxx-xxx-xx'); // return '/download/xxx-xxx-xxx-xxx-xx';
                // iconUtil.getIcon('http://abc.com/logo.png'); // return 'http://abc.com/logo.png';
                getIcon : function(icon) {

                    if (!icon) return DEFAULT;

                    var isHttpLink = /(^https?:\/\/)|(^w{3})/.test(icon);
                    return isHttpLink ? icon : fileUtil.getFileDownloadUrl(icon);
                    
                }
                
            }
            
        })(),

        // Date util
        dateUtil = (function() {
            return {
                // `time`: '2015-12-03 11:12:02 123432'
                moment: function(time) {
                    return moment(time, 'YYYY-MM-DD HH:mm:ss SSS');
                }
            }
        })(),

        // File util
        fileUtil = (function() {

            return {
                
                getFileDownloadUrl: function(fid, fname) {
                    var url = '/download/' + fid;
                    fname && (url += "?file_name=" + fname);
                    return url;
                },

                // download large txt content
                getRemoteTextFileContent: function(url, successCallback, errorCallback) {
                    return $http({
                        method: "GET",
                        cache: false,
                        url: url,
                        cache: false,
                    })
                        .success(function(response) {
                            if (successCallback) successCallback(response);
                        })
                        .error(function(error) {
                            if (errorCallback) errorCallback(error);
                        });
                }
            }
            
        })(),

        validator = ( function() {

            var MIN_LENGTH = 1,
                MAX_LENGTH = 16,
                ERR_CODE = {
                    OK: 0, // everything is ok
                    MIN_LENGTH_LIMIT: 1, // password is too short
                    MAX_LENGTH_LIMIT: 2, // password is too long
                    CONTAIN_WHITESPACE_AT_HEAD_OR_TAIL: 3, // password can not contains whitespace at head and tail
                    REPEAT_PASSWORD_MIS_MATCH : 4 // second password miss match the first one
                };
            
            return {

                ERR_CODE: ERR_CODE,

                // @param password : your password
                validatePassword: function( password ) {
                    if ( !password || password.length < MIN_LENGTH ) return ERR_CODE.MIN_LENGTH_LIMIT;
                    if ( password.length > MAX_LENGTH ) return ERR_CODE.MAX_LENGTH_LIMIT;
                    if ( /(^\s+)|(\s+$)/g.test( password ) ) return ERR_CODE.CONTAIN_WHITESPACE_AT_HEAD_OR_TAIL;
                    return ERR_CODE.OK;
                },

                // @param password : your password
                // @param @optional repeatPassword : your repeat password
                validateRepeatPassword: function( password, repeatPassword ) {
                    var errorCode = this.validatePassword( password );
                    if ( errorCode !== ERR_CODE.OK ) return errorCode;
                    if ( password !== repeatPassword ) return ERR_CODE.REPEAT_PASSWORD_MIS_MATCH;
                    return ERR_CODE.OK;
                }
            }
            
        } )();

    return {
        
        translate: function(scope, var_name, langs, on_trans) {
            var _trans = function() {
                $translate(langs).then(function(_t) {
                    scope[var_name] = _t;
                    if (on_trans)
                        on_trans();
                });
            };

            var _remove_trans = $rootScope.$on('$translateChangeSuccess', _trans);
            _trans();

            scope.$on("$destroy", function() {
                _remove_trans();
            });
        },

        noti: function(nstring, success) {
            var _t = "danger";
            if (success) {
                _t = "success";
            }
            
            $.bootstrapGrowl(nstring, {
                ele: 'body', // which element to append to
                type: _t, // (null, 'info', 'danger', 'success')
                offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
                align: 'center', // ('left', 'right', or 'center')
                width: 400, // (integer, or 'auto')
                delay: 4000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                allow_dismiss: true, // If true then will display a cross to close the popup.
                stackup_spacing: 10 // spacing between consecutively stacked growls.
            });
        },

        uuid: function() {
            var d = new Date().getTime();
            var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x7|0x8)).toString(16);
            });
            return id;
        },

        get_view_port: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        is_valid_email: function (email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },

        base64_decode: function(input) {
            return $base64.decode(input);
        },

        base64_encode: function(input) {
            return $base64.encode(input);
        },
        
        http_protocol: function(host) {
            if(_is_test_host(host)) {
                return "http://";
            }
            return "https://";
        },

        ws_protocol: function(host) {
            if(_is_test_host(host)) {
                return "ws://";
            }
            return "wss://";
        },

        // check if a string contain unregular words
        regexp_check: function(str) {
            var pattern = RegExp("[\\u4E00-\\u9FFF\\dA-z@\-\_\\s*]+","i");
            if( !str || !str.match(pattern)) {
                return false;
            };
            var reg_length = str.match(pattern).toString().length;
            if (reg_length == str.length)
                return true;
            else
                return false;
        },

        formateTimestamp: function(time) {
            var dateString = moment(time).format('YYYY-MM-DD HH:mm:ss');
            return dateString;
        },
        
        // ---------------
        // Message Utils
        // ---------------

        messageUtil: messageUtil,

        // ---------------
        // Icon Utils
        // ---------------

        iconUtil: iconUtil,

        // ---------------
        // Moment Utils
        // ---------------

        dateUtil: dateUtil,

        // ---------------
        // File Utils
        // ---------------
        fileUtil: fileUtil,

        // ---------------
        // Validator Utils
        // ---------------
        validator: validator,

        isNull: function( any ) {
            return any === undefined || any === null;
        }
        
    };
}

angular.module("this_app.services")
    .factory("yvUtil", $yvUtilService);

$yvDocScrollHelper.$inject = ["$location", "$anchorScroll"];
function $yvDocScrollHelper($location, $anchorScroll) {

    function _scrollToTarget(event, id) {
        jQuery('.bs-sidebar .nav li > a').parentsUntil('.bs-sidebar', '.active').removeClass('active');
        var active = jQuery(event.target).parents('li').addClass('active');
        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active');
        }
        
        $location.hash(id);
        $anchorScroll();
    }

    // SCROLLSPY CLASS DEFINITION
    // ==========================
    // Copied From: https://github.com/twbs/bootstrap/blob/e38f066d8c203c3e032da0ff23cd2d6098ee2dd6/js/scrollspy.js

    function ScrollSpy(element, options) {
        this.$body          = $(document.body)
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
        this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector       = (this.options.target || '') + ' .nav li > a'
        this.offsets        = []
        this.targets        = []
        this.activeTarget   = null
        this.scrollHeight   = 0

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
        this.refresh()
        this.process()
    }

    ScrollSpy.VERSION  = '3.3.5'

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }

    ScrollSpy.prototype.refresh = function () {
        var that          = this
        var offsetMethod  = 'offset'
        var offsetBase    = 0
        
        this.offsets      = []
        this.targets      = []
        this.scrollHeight = this.getScrollHeight()

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase   = this.$scrollElement.scrollTop()
        }

        this.$body
            .find(this.selector)
            .map(function () {
                var $el   = $(this)
                var href  = $el.data('target') || $el.attr('href')
                var $href = /^#./.test(href) && $(href)

                return ($href
                        && $href.length
                        && $href.is(':visible')
                        && [[$href[offsetMethod]().top + offsetBase, href]]) || null
            })
            .sort(function (a, b) { return a[0] - b[0] })
            .each(function () {
                that.offsets.push(this[0])
                that.targets.push(this[1])
            })
                }

    ScrollSpy.prototype.process = function () {
        var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets      = this.offsets
        var targets      = this.targets
        var activeTarget = this.activeTarget
        var i

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
                && scrollTop >= offsets[i]
                && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
                && this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target

        this.clear()

        var selector = this.selector +
            '[data-target="' + target + '"],' +
            this.selector + '[href="' + target + '"]'

        var active = $(selector)
            .parents('li')
            .addClass('active')

        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active')
        }

        active.trigger('activate.bs.scrollspy')
    }

    ScrollSpy.prototype.clear = function () {
        $(this.selector)
            .parentsUntil(this.options.target, '.active')
            .removeClass('active')
    }
    
    return {
        scrollToTarget: function(event, id) {
            _scrollToTarget(event, id);
        },

        scrollspy: function(options) {
            new ScrollSpy('body', options);
        }
    }
}

angular.module("this_app.services")
    .factory("yvDocScrollHelper", $yvDocScrollHelper);

angular.module("this_app").
   factory("yvType", [
    "yvConstants",
function (yvConstants) {

    function _get_subtype(message) {
        // message query from db
        if (message.message_subtype) {
            return message.message_subtype;
        }
        // incoming message message subtype
        if (message.ms) {
            return message.ms;
        }

        return null;
    }

    return {
        is_logout: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.LOGOUT) {
                return true;
            }
            return false;
        },

        is_document: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.DOCUMENT) {
                return true;
            }
            return false;
        },

        is_file: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.DOCUMENT) {
                return true;
            }
            if (subtype === yvConstants.MESSAGE_SUBTYPE.FILE) {
                return true;
            }
            return false;
        },

        is_video: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.VIDEO) {
                return true;
            }
            return false;
        },


        is_single_card: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.SINGLE_CARD) {
                return true;
            }
            return false;
        },

        is_multiple_card: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.MULTIPLE_CARD) {
                return true;
            }
            return false;
        },

        is_text: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.TEXT) {
                return true;
            }
            return false;
        },

        is_txt: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.TXT) {
                return true;
            }
            return false;
        },

        is_image: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.IMAGE) {
                return true;
            }
            return false;
        },

        is_gps_location: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.GPS_LOCATION) {
                return true;
            }
            return false;
        },

        is_audio: function (message) {
            var subtype = _get_subtype(message);
            if (subtype === yvConstants.MESSAGE_SUBTYPE.AUDIO) {
                return true;
            }
            return false;
        },

        is_left: function (message) {
            if (message.message_direction === yvConstants.MESSAGE_DIR.DIR_IN) {
                return true;
            }
            return false;
        },

        is_right: function (message) {
            if (message.message_direction === yvConstants.MESSAGE_DIR.DIR_OUT) {
                return true;
            }
            return false;
        },

        is_left_audio: function (message) {
            if (this.is_left(message) && this.is_audio(message)) {
                return true;
            }
            return false;
        },

        is_right_audio: function (message) {
            if (this.is_right(message) && this.is_audio(message)) {
                return true;
            }
            return false;
        }
    };
}]);

// convenience to manager log
// let you easily find you log messages !

// Copy and modified from ppcom/jquery/src/service/pp-service-debug.js
// @author kun.zhao@yvertical.com
//
// How to use:
//
// yvLog.h().d(obj1, obj2, obj3, ...);
//

$yvLog.$inject = [];
function $yvLog() {

    var DEBUG = true, // open or close debug
        DEBUG_WARNING = true, // debug `warning` info
        
        supportConsole = !(typeof console === "undefined" || typeof console.log === "undefined"),
        supportConsoleApply = supportConsole && !(typeof console.log.apply === "unknown" || typeof console.log.apply === "undefined");

    // Highlight
    function h() {
        var cssStr = "%c" + '↓↓↓↓↓↓↓↓↓↓';
        d(cssStr, "font-size:28px; color:blue;");
        return this;
    }

    // Debug
    function d() {
        if (DEBUG) {
            var args = Array.prototype.slice.call(arguments);
            supportConsoleApply ? console.log.apply(console, args) : console.log(args);
        }
        return this;
    }

    function w() {
        if ( DEBUG_WARNING ) {
            var args = Array.prototype.slice.call(arguments);
            supportConsoleApply ? console.log.apply(console, args) : console.log(args);
        }
        return this;
    }
    
    return {
        h: h,
        d: d,
        w: w
    }
}

angular.module("this_app.services")
    .factory("yvLog", $yvLog);

//////////// MAIN GOLE: HELP US TO DEBUG FROM CONSOLE ///////////////////////////
(function() {

    yvDebug.$inject = [ 'yvLog' ];
    function yvDebug( yvLog ) {

        var ON = true,

            api = {
                attach: attach,

                h: yvLog.h,
                d: yvLog.d,
                w: yvLog.w
            };
        
        return api;

        // attach `func` to `window` obj to help us to see the inner world of our app from `console`
        function attach( name, func ) {
            // `Function.name` is part of ES6
            if ( window !== undefined && ON && name !== undefined ) window [ name ] = func;
            return api;
        }
        
    }

    angular.module( "this_app.services" ).factory( "yvDebug", yvDebug );

})();

/**
 * Prepare info for each page when init
 *
 * - For each page, on `_init` method, you should call `yvLogin.prepare` to prepare `active user` and `active user_team` info
 *
 * ```javascript
 * yvLogin.prepare( function() { // prepare ok ... }, { $scope: $scope, onRefresh: function() { // refresh page ... } } );
 * ```
 * 
 * - Difference between `activeUser` and `yvLoginedUser`. 
 *
 *   for `Non-Admin` user, `yvLoginedUser` is equal to `yvActiveUser`; 
 *
 *   for `Admin` user, `yvLoginedUser` is `Admin User`, and `yvActiveUser` is current active user which associated with current
 *   selected app. if you pass `{ $scope: xxx, onRefresh: xxx }` param in `yvLogin.prepare` method, then `yvLogin` will try to 
 *   bind `$destroy` and `yvConstants.BROADCAST_EVENT_KEY.REFRESH_PAGE` event to `$scope`, when a new app is selected, then you 
 *   will receive a notify callback to let you `refresh page`;
 * 
 * ----------------------------------------------------
 * |                               ( yvLoginedUser )  | <= `website header`
 * ----------------------------------------------------
 * |                                                  | 
 * |                                                  |
 * |                                                  |
 * |           ( activeUser: yvUser )                 | <= `website content`
 * |                                                  |
 * |                                                  |
 * |                                                  |
 * ----------------------------------------------------
 *
 */
( function() {

    yvLogin.$inject = [ 'yvUser', 'yvAjax', 'yvDebug', 'yvAppService', 'yvConstants', 'yvLoginedUser',
                        '$rootScope', "$state", "$timeout", "$cookies" ];
    function yvLogin( yvUser, yvAjax, yvDebug, yvAppService, yvConstants, yvLoginedUser, $rootScope, $state, $timeout, $cookieStore ) {

        var ERROR_CODE = { OK: 0, STATUS_ILLEGAL: 1, LOGIN_ERROR: 2 },

            STATUS = {
                OWNER_0: 1 << 0,
                OWNER_1: 1 << 1,
                OWNER_2: 1 << 2,
                ADMIN: 1 << 3
            },

            activeUser;
        
        return {
            
            ERROR_CODE: ERROR_CODE,
            STATUS: STATUS,
            
            prepare: prepare,
            updateLoginedUser: updateLoginedUser,
            updateActiveUser: updateActiveUser,
            check_logined: check_logined,
            checkActiveUser: checkActiveUser,
            checkLoginedUser: checkLoginedUser,

            getLoginedUser: getLoginedUser,
            isLogined: isLogined,
            setLogined: setLogined,
            logout: logout,

            updateActiveUserCookieKey: updateActiveUserCookieKey,
            updateLoginedUserCookieKey: updateLoginedUserCookieKey
            
        }

        function prepare( callback, config ) {
            
            if ( config &&
                 config.$scope &&
                 config.onRefresh ) {
                
                var scope = config.$scope,
                    offListenerToken = scope.$on( yvConstants.BROADCAST_EVENT_KEY.REFRESH_PAGE, function() {
                        _tryFetchAppTeam( function( errorCode ) {
                            if ( errorCode === ERROR_CODE.OK ) {
                                yvDebug.d( '===event:refreshpage===' );
                                config.onRefresh();
                            }
                        } );
                    } );

                scope.$on( '$destroy', function() {
                    yvDebug.d( '===destroy===' );
                    if ( offListenerToken ) offListenerToken();
                } );
                
            }
            
            checkActiveUser( function() {
                _tryFetchAppTeam( function( errorCode ) {

                    if ( errorCode === ERROR_CODE.OK ) {
                        checkLoginedUser();
                    }
                    if ( callback ) callback( errorCode );
                    
                } , config && config.expectedStatus );
            } );
        }

        function updateLoginedUser( user ) {
            yvLoginedUser.update( user );
            yvDebug.d( '===logined user===', user );
        }

        function updateActiveUser( user ) {
            yvUser.set_login_data( user );
            activeUser = user;
            yvDebug.d( '===active user===', user );
        }

        function updateActiveUserCookieKey( userUUID ) {
            $cookieStore.put(yvConstants.COOKIE_KEY.ACTIVE_USER_UUID, userUUID);
        }

        function updateLoginedUserCookieKey( userUUID, accessToken ) {
            $cookieStore.put(yvConstants.COOKIE_KEY.ACCESS_TOKEN, accessToken); // store access_token
            $cookieStore.put(yvConstants.COOKIE_KEY.LOGINED_USER_UUID, userUUID);
        }

        function getLoginedUser() {
            return yvLoginedUser.get();
        }

        function isLogined() {
            return yvLoginedUser.isLogined();
        }

        function setLogined( l ) {

            yvLoginedUser.setLogined( l );

            if ( l ) {
                var broadcastObj = {
                    isAdmin: yvLoginedUser.isAdminUser()
                };
                $rootScope.$emit( yvConstants.BROADCAST_EVENT_KEY.LOGIN_FINISHED, broadcastObj );
                yvDebug.d( '===event:login finished===' );
            }
                
        }

        function logout() {
            
            yvLoginedUser.logout();
            activeUser = null;
            yvUser.logout();

            $cookieStore.remove( yvConstants.COOKIE_KEY.LOGINED_USER_UUID );
            $cookieStore.remove( yvConstants.COOKIE_KEY.ACTIVE_USER_UUID );
            $cookieStore.remove( yvConstants.COOKIE_KEY.ACCESS_TOKEN );
            
        }

        function checkActiveUser( logined, unlogined, state ) {
            if ( activeUser ) {
                if ( logined ) logined( activeUser );
                return;
            }
            
            _makeSureUserInfoPreparedOK( yvConstants.COOKIE_KEY.ACTIVE_USER_UUID, function( data ) {
                updateActiveUser( data );
                _tryFetchAppTeam( logined );
            } , unlogined, state );            
        }

        function checkLoginedUser( logined, unlogined, state ) {
            check_logined( logined, unlogined, state );
        }

        function check_logined( logined, unlogined, state ) {
            if ( yvLoginedUser.get() ) {
                if ( logined ) logined( yvLoginedUser.get() );
                return;
            }
            
            _makeSureUserInfoPreparedOK( yvConstants.COOKIE_KEY.LOGINED_USER_UUID, function( data ) {

                updateLoginedUser( data );
                setLogined( true );
                
                if ( logined ) logined( data );
            }, function() {

                setLogined( false );
                
                if ( unlogined ) unlogined();
            }, state );
        }

        function _makeSureUserInfoPreparedOK( cookieKey, succCB, errorCB, state ) {
            var _user_uuid = $cookieStore.get( cookieKey );
            if ( !_user_uuid ) {
                if ( errorCB ) {
                    errorCB();
                    return;
                }
                if (state) {
                    $timeout(function() {
                        $state.go(state);
                    });
                }
                return;
            }

            _user_uuid = _user_uuid.replace(/\"/g, "");
            var _loggedin = yvAjax.get_user_detail_with_password(_user_uuid);

            var _error = function() {
                $timeout(function() {
                    if ( errorCB ) {
                        errorCB();
                    } else {
                        if (state) {
                            $timeout(function() {
                                $state.go(state);
                            });
                        }
                    }
                });
            };
            
            _loggedin.success(function(data) {
                if (data.error_code == 0) {
                    $timeout(function() {
                        if ( succCB ) succCB( data );
                    });
                } else {
                    if ( errorCB ) errorCB();
                }
                return;
            });

            _loggedin.error(function(data) {
                if ( errorCB ) errorCB();
            });
        }

        function _tryReselectApp( callback, expectedStatus ) {
            var activeApp = yvAppService.activeApp();
            if ( activeApp ) {
                yvAppService.selectApp( activeApp, function( selectSuccResponse ) {
                    _tryFetchAppTeam( callback, expectedStatus );
                }, function( selectErrorResponse ) {
                    if ( callback ) callback ( ERROR_CODE.LOGIN_ERROR );
                } );
            }
        }

        function _tryFetchAppTeam( callback, expectedStatus ) {
            var avaliableStatus = STATUS.OWNER_2 | STATUS.ADMIN | STATUS.OWNER_1 ;
            
            if ( expectedStatus !== null &&
                 expectedStatus !== undefined &&
                 expectedStatus !== NaN ) {
                avaliableStatus = expectedStatus;
            }

            var status = STATUS[ yvUser.get_status() ];
            if ( status === undefined ||
                 ( status & avaliableStatus !== 1 ) ) {
                onResponse( ERROR_CODE.STATUS_ILLEGAL );
                return;
            }

            if( !yvUser.get_team() ) {
                var _get = yvAjax.get_app_owned_by_user( yvUser.get_uuid() );
                _get.success( function(data) {
                    yvUser.set_team( data.app );
                    onResponse( ERROR_CODE.OK );
                } );
            } else {
                onResponse( ERROR_CODE.OK );
            }

            function onResponse( errorCode ) {
                if ( callback ) callback( errorCode );
            }
        }
        
    }

    angular.module( "this_app.services" ).factory( "yvLogin", yvLogin );
    
} ) ();

//// this is data service for `GroupingCtrl` ///////
(function() {

    yvAppGroupingService.$inject = [ '$filter', 'yvLog', 'yvAjax', 'yvUser', 'yvUtil', 'yvCallbackService', 'yvAppPeopleService' ];
    function yvAppGroupingService( $filter, yvLog, yvAjax, yvUser, yvUtil, yvCallbackService, yvAppPeopleService ) {

        var unamed_group_name = $filter("translate")("application.grouping.UNAMED_GROUP_NAME_TAG");
        var UNGROUPED_GROUP_INFO = { uuid: 'group_uuid_no_group', group_name: unamed_group_name },
            jQuery = $,

            groups = {
                
                // 'group-id-1': { group_info }
                // `UNGROUPED_GROUP_INFO.uuid`: { group_info }
                // ...
                //

                // { group_info } :
                // {
                //     uuid: group_uuid,
                //     group_name: xxx,
                //     group_users: [ user_a, user_b, ... ]
                // }
                
            },

            ERROR = {
                OK: 0, // no error
                EXIST: 1, // group name exist
                EMPTY: 2, // empty
                ILLEGAL_NAME: 3, // contains some special characters
                TOO_LONG: 4 // too long > 64
            },

            LENGTH_MAX_LIMIT = 64;

        //////// API /////////////
        return {
            UNGROUPED_GROUP_INFO: UNGROUPED_GROUP_INFO,
            ERROR: ERROR,

            setUngroupedName: setUngroupedName,
            
            all: all,

            createGroup: createGroup,
            removeGroup: removeGroup,
            switchGroup: switchGroup,
            updateGroup: updateGroup,
            
            getGroupList: getGroupList,
            getTeamServiceUserList: getTeamServiceUserList,
            getGroupServiceUserList: getGroupServiceUserList,

            checkGroupNameValid: checkGroupNameValid,
            checkGroupDescValid: checkGroupDescValid
        }

        ///// Implementation //////

        ///// getGroupList //////
        function all() {
            return groups;
        }

        function createGroup( settings, successCallback, errorCallback ) {
            
            yvAjax.create_org_group( {
                app_uuid: yvUser.get_team().uuid,
                group_name: settings.new_group_name,
                group_desc: settings.new_group_desc,
                is_distributor: settings.new_group_is_distributor,
            } )
                .success( function(data) { noError( data ) ? onSuccess( data ) : onError( data ); } )
                .error( onError );

            function onSuccess( r ) {
                successCallback && successCallback();
            }

            function onError( e ) {
                errorCallback && errorCallback();
            }
            
        }

        function removeGroup( groupId, successCallback, errorCallback ) {

            var groupUsers = ( function( users ) {

                var usersIdArray = [];
                angular.forEach( users, function( value, index ) {
                    usersIdArray.push( value.uuid );
                } );
                return usersIdArray;
                
            } )( groups [ groupId ].user_list || [] );
            
            // 1. remove all group users in this group
            // 2. remove this group            
            yvAjax.remove_group_user( {
                app_uuid: yvUser.get_team().uuid,
                group_uuid: groupId,
                user_list: groupUsers,
            })
                .success( function( r ) {
	                noError( r ) ? internalRemoveGroup( groupId, onSuccess, onError ) : onError( r );                    
                } )
                .error( onError );

            function internalRemoveGroup( groupId, successCallback, errorCallback ) {

                yvAjax.remove_group( {
                    app_uuid: yvUser.get_team().uuid,
                    group_uuid: groupId
                } )
                    .success( function( r ) {
                        noError( r ) ? onSuccess( r ) : onError( e );
                    } )
                    .error( onError );

                function onSuccess( r ) {
                    successCallback && successCallback( r );
                }

                function onError( e ) {
                    errorCallback && errorCallback( e );
                }
                
            }

            function onSuccess( r ) {
                successCallback && successCallback( r );
            }

            function onError( e ) {
                errorCallback && errorCallback( e );
            }
            
        }

        // @param {
        //     group_uuid: `target group`
        //     old_group_uuid: `origin group`
        //     user_list: `user ids array that you want to move`
        // }
        function switchGroup( settings, successCallback, errorCallback ) {

            if ( settings.group_uuid === UNGROUPED_GROUP_INFO.uuid ) { // Move user from concrete group => ungrouped group
                removeGroupUser( { group_uuid: settings.old_group_uuid, user_list: settings.user_list }, onSuccess, errorCallback );
            } else { // Move user from concrete group 1 ( or ungrouped group ) => concrete group 2
                addGroupUser( settings, onSuccess, errorCallback );
            }

            function onSuccess( r ) {
                removeUsersFromGroup( settings.old_group_uuid, settings.user_list ); // remove old users from old group, update local cache
                yvCallbackService.success( r, successCallback );
            }

        }

        function addGroupUser( settings, successCallback, errorCallback ) {
            
            yvAjax.add_group_user( {
                app_uuid: yvUser.get_team().uuid,
                group_uuid: settings.group_uuid,
                user_list: settings.user_list
            } )
                .success( function( data ) {
                    yvCallbackService.response( data, successCallback , errorCallback );
                } )
                .error( function( e ) {
                    yvCallbackService.error( e, errorCallback )
                } );
        }

        function removeGroupUser( settings, successCallback, errorCallback ) {

            yvAjax.remove_group_user( {
                app_uuid: yvUser.get_team().uuid,
                group_uuid: settings.group_uuid,
                user_list: settings.user_list
            } )
                .success( function( data ) {
                    yvCallbackService.response( data, successCallback , errorCallback );
                } )
                .error( function( e ) {
                    yvCallbackService.error( e, errorCallback )
                } );
            
        }

        function updateGroup( settings, successCallback, errorCallback ) {
            yvAjax.update_group( settings )
                .success( function( data ) {
                    yvCallbackService.response( data, successCallback, errorCallback );
                } )
                .error( function( e ) {
                    yvCallbackService.error( e, errorCallback )
                } );
        }
        
        function getGroupList( successCallback, errorCallback ) {

            groups = {}; // clear all cached group's info

            // 1. get group list
            yvAjax.get_group_list( { app_uuid: yvUser.get_team().uuid } )
                .success( function( data ) {
                    if ( noError( data ) ) {
                        onSuccessGetGroupList( data );
                    } else {
                        onErrorGetGroupList( data );
                    }
                })
                .error( onErrorGetGroupList );

            function onSuccessGetGroupList( data ) {
                var groupLists = data.list.sort( compare ) || [];
                angular.forEach( groupLists, function( value, index ) {
                    // store group info to local
                    groups [ value.uuid ] = value;
                } );
                
                // 2. get all users
                getTeamServiceUserList( function( users ) {
                    successCallback && successCallback( groups );
                }, function( error ) {
                    onErrorGetGroupList( error );
                } );
            }

            function onErrorGetGroupList( data ) {
                errorCallback && errorCallback( {} );
            }

        }

        //// getTeamServiceUserList /////
        function getTeamServiceUserList( successCallback, errorCallback ) {
            
            yvAppPeopleService.getAppServiceUsers( function( users ) {
                
                fixUsers( users );
                updateGroupUsers( users );
                yvCallbackService.success( users, successCallback );
                
            } , errorCallback );
            
        }

        ////// getGroupServiceUserList //////
        // @param grouId : xxx or `UNGROUPED_GROUP_INFO.uuid`
        // @param options : {
        //     reuse: true/false, whether or not reuse users when find in local, default is false
        // }
        function getGroupServiceUserList( groupId, successCallback, errorCallback, options ) {

            var o = angular.extend( { reuse: false } , options );

            // local cached
            if ( groups[ groupId ] !== undefined && groups[ groupId ].user_list !== undefined ) {
                if ( o.reuse ) {
                    successCallback && successCallback( groups[ groupId ].user_list );
                    return;
                }
            }

            // fetched users from server
            if ( groupId === UNGROUPED_GROUP_INFO.uuid ) {
                getUnGroupedServiceUserList();
            } else {
                getGroupedServiceUserList();            
            }

            function getUnGroupedServiceUserList() {
                getTeamServiceUserList( function( users ) {

                    var unGroupedUsers = [];
                    angular.forEach( users, function( value, index ) {
                        value.group_uuid === UNGROUPED_GROUP_INFO.uuid && unGroupedUsers.push( value );
                    } );

                    successCallback && successCallback( unGroupedUsers );
                    
                }, function ( e ) {
                    errorCallback && errorCallback( [] );
                } );
            }

            function getGroupedServiceUserList() {
                
                yvAjax.get_group_user_list( { app_uuid: yvUser.get_team().uuid, group_uuid: groupId } )
                    .success( function( r ) {
                        noError( r ) ?
                            successCallback && successCallback( fixUsers( r.list ) ) :
                            errorCallback && errorCallback( [] );
                    })
                    .error(function( e ) {
                        errorCallback && errorCallback( [] );
                    });
                
            }
            
        }

        /////// Tools /////////
        
        // is response has error
        function noError( r ) {
            return r && r.error_code === 0;
        }

        function compare( a, b ) {
            return a.updatetime < b.updatetime ? -1 : 1;
        }

        function fixUsers( users ) {

            angular.forEach( users, function( value, key ) {

                if ( yvUtil.isNull( value.group ) ) { // user belongs to `UNGROUPED` group
                    value.group_uuid = UNGROUPED_GROUP_INFO.uuid;
                    value.user_group_name = UNGROUPED_GROUP_INFO.group_name;
                } else {
                    value.group_uuid = value.group.uuid;
                    value.user_group_name = value.group.group_name;
                }
                
            } );
            
            return users;
        }

        function exist( array, user ) {
            var find = false;
            $.each( array, function( index, item ) {
                if ( !find && user.uuid === item.uuid ) {
                    find = true;
                }
            } );
            return find;
        }

        function updateGroupUsers( users ) {
            
            angular.forEach( users, function( value, index ) {

                // make sure ungrouped group exist
                if ( value.group_uuid === UNGROUPED_GROUP_INFO.uuid &&
                     groups [ UNGROUPED_GROUP_INFO.uuid ] === undefined) {
                    groups [ UNGROUPED_GROUP_INFO.uuid ] = UNGROUPED_GROUP_INFO;
                }

                // make sure user_list is initialized
                if ( groups [ value.group_uuid ].user_list === undefined ) {
                    groups [ value.group_uuid ].user_list = [];
                }

                // store users
                if ( !exist( groups [ value.group_uuid ].user_list, value ) ) {
                    groups [ value.group_uuid ].user_list.push( value );
                }
                
            } );
            
        }

        function removeUsersFromGroup( groupId, userIdsArray ) {
            
            var oldUserList = groups [ groupId ].user_list || [];
            angular.forEach( oldUserList, function( value, index ) {
                var i = -1;
                if ( ( i = jQuery.find( value.uuid, userIdsArray ) ) !== -1 ) {
                    oldUserList.splice( i, 1 );
                }
            } );
            
        }

        // Check group name or group description is valid when modify or create new group
        // @return errorCode
        // @see ERROR
        function checkGroupNameValid( groupId, groupName ) {
            
            var errorCode = ERROR.OK;
            if ( checkExist( groupId, groupName ) ) {
                errorCode = ERROR.EXIST;
            } else {
                errorCode = checkValid( groupName );
            }
            return errorCode;
        }

        // @return errorCode
        function checkGroupDescValid( groupDesc ) {
            return checkValid( groupDesc );
        }

        // @return is `groupName` exist in `groupList`
        function checkExist( groupId, groupName ) {
            var exist = false;
            angular.forEach( groups, function( value, key ) {
                if ( exist === false &&
                     value.group_name === groupName ) {

                    if ( ( !yvUtil.isNull( groupId ) && groupId !== value.uuid ) || // provided `groupId`, so we need make sure not the same group
                         yvUtil.isNull( groupId ) ) { // not provided `groupId`, so if we find, we consider `groupName` is exist
                        exist = true;   
                    }
                    
                }
            } );
            return exist;
        }

        // @return errorCode
        function checkValid( name ) {
            var errorCode = ERROR.OK;

            if ( yvUtil.isNull( name ) || name.length <= 0 ) {
                errorCode = ERROR.EMPTY;
            } else if ( !yvUtil.regexp_check( name ) ) {
                errorCode = ERROR.ILLEGAL_NAME;
            } else if ( name.length > LENGTH_MAX_LIMIT ) {
                errorCode = ERROR.TOO_LONG;
            }

            return errorCode;
            
        }
        
        function setUngroupedName() {
            UNGROUPED_GROUP_INFO.group_name = $filter("translate")("application.grouping.UNAMED_GROUP_NAME_TAG");
        }
        
    }

    angular.module("this_app.services").factory("yvAppGroupingService", yvAppGroupingService);

} )();

//// this is data service for `ApplicationPeopleCtrl` ///////
(function() {

    yvAppPeopleService.$inject = [ 'yvAjax', 'yvUser', 'yvCallbackService', 'yvDebug' ];
    function yvAppPeopleService( yvAjax, yvUser, yvCallbackService, yvDebug ) {

        var DEFAULT_PAGE_COUNT = 12,
            DEFAULT_MAX_SERVICE_USERS_COUNT = 100,
            UP_TO_MAX_SERVICE_USERS_ERROR_CODE = 10000,
            jQuery = $;

        ////// Api //////////

        return {
            UP_TO_MAX_SERVICE_USERS_ERROR_CODE: UP_TO_MAX_SERVICE_USERS_ERROR_CODE,
            
            getAppServiceUsers: getAppServiceUsers,
            getAppServiceUsersWithPagination: getAppServiceUsersWithPagination,

            createServiceUser: createServiceUser
        }

        ////// Implementation //////////

        function getAppServiceUsers( successCallback, errorCallback ) {
            
            yvAjax.get_team_service_user_list( { app_uuid: yvUser.get_team().uuid } )
                .success( function( data ) {
                    yvCallbackService.response( angular.copy( data ), onSuccess, onError );
                })
                .error( onError );

            function onSuccess( data ) {

                // Find who is `is_owner_user`
                var appTeamServiceUsers = data.list || [];
                angular.forEach( appTeamServiceUsers, function( value, index ) {
                    value.is_owner_user = ( value.user_email === yvUser.get_email() );
                } );
                
                successCallback && successCallback( appTeamServiceUsers );
            }

            function onError( e ) {
                errorCallback && errorCallback( [] );
            }
            
        }

        // @description
        //     - filter by user_fullname or user_email
        //     - support pagination ( in front-end )
        //     - support sort by `updatetime`
        //
        // @param settings
        // {
        //     length: `count of each page`, default is 12
        //     start_page: 0 ~ +Infinity
        //     
        //     filter_keyword: `your keyword`, default is ''
        //     sort: `true/false`, default is `true`, sort by `updatetime` in Desending order
        // }
        //
        // @return
        // {
        //     users: [ userA, userB, ... ], // current page users
        //     total: totalNumber // total user's count after filtered
        // }
        function getAppServiceUsersWithPagination( settings, successCallback, errorCallback ) {
            getAppServiceUsers( function( users ) {
                
                // `angular.extend(dst, src);`
                // @see http://docs.angularjs.cn/api/ng/function/angular.extend
                var s = angular.extend( { filter_keyword: '', length: DEFAULT_PAGE_COUNT, start_page: 0, sort: true }, settings ),
                    filteredUsers = filter( s, users ),
                    total = filteredUsers.length,
                    paginationUsers = pagination( s, sort( s, filteredUsers ) );
                
                yvCallbackService.success( {
                    users: paginationUsers,
                    total: total
                } , successCallback );
                
            }, function( e ) {
                yvCallbackService.error( e, errorCallback );
            } );
        }

        function createServiceUser( settings, successCallback, errorCallback ) {

            getAppServiceUsers( function( users ) {
                
                if ( users.length >= DEFAULT_MAX_SERVICE_USERS_COUNT ) {

                    // make a fake successCallback with `error_code: UP_TO_MAX_SERVICE_USERS_ERROR_CODE`
                    yvCallbackService.success( { error_code: UP_TO_MAX_SERVICE_USERS_ERROR_CODE }, successCallback );
                    
                } else {
                    yvAjax.create_user( settings ).success( successCallback ).error( errorCallback );
                }
                
            }, function( e ) {
                yvCallbackService.error( e, errorCallback );
            } );
            
        }

        function filter( settings, users ) {
            
            if ( settings.filter_keyword === '' ) {
                return users || [];
            }

            var keyword = settings.filter_keyword,
                regex = new RegExp( '.*' + keyword + '.*', 'g' ),
                result = [];
            
            angular.forEach( users, function( value, index ) {
                if ( regex.test( value.user_email ) || regex.test( value.user_fullname ) ) {
                    result.push( value );
                }
            } );

            return result;
            
        }

        function pagination( settings, users ) {
            var pageCount = settings.length,
                pageNum = settings.start_page,
                len = users.length,
                startIndex = pageNum * pageCount,
                endIndex = startIndex + pageCount,
                i = startIndex,
                result = [];

            var user;
            while ( ( user = users [ i++ ] ) !== undefined && i <= endIndex ) {
                result.push( user );
            }

            return result;            
        }

        function sort( settings, users ) {
            if ( !settings.sort ) return users;
            return users.sort( compare );
            function compare( a, b ) {
                return a.updatetime > b.updatetime ? -1 : 1;
            }
        }
        
    }

    angular.module("this_app.services").factory("yvAppPeopleService", yvAppPeopleService);

} )();

(function() {

    yvCallbackService.$inject = [];
    function yvCallbackService() {
        
        return {
            response: onResponse,
            success: onSuccess,
            error: onError
        }

        function onResponse( r, successCallback, errorCallback ) {
            if ( r && r.error_code === 0 ) {
                onSuccess( r, successCallback );
            } else {
                onError( r, errorCallback );
            }
        }

        function onSuccess( r, successCallback ) {
            successCallback && successCallback( r );
        }

        function onError( e, errorCallback ) {
            errorCallback && errorCallback( e );
        }
        
    }

    angular.module("this_app.services").factory( "yvCallbackService", yvCallbackService );

} )();

/**
 *
 * [app1, app2, ...]
 *   | 
 *   |
 * `user_uuid`
 *   |
 *   |
 * yvAjax.get_user_detail
 *   |
 *   |
 * `yvUser.set_login_data`
 *
 */
( function() {

    yvAppService.$inject = [ 'yvDebug', 'yvAjax', 'yvUser', '$cookies', '$rootScope', 'yvConstants', 'yvLoginedUser' ]
    function yvAppService( yvDebug, yvAjax, yvUser, $cookieStore, $rootScope, yvConstants, yvLoginedUser ) {

        var apps = [],

            appUserMap = {
                //
                // user_uuid: {
                //     user_response: `response` which get from `yvAjax.get_user_detail`
                // },
                //
                // ...
            };

        return {
            getApps: asyncGetApps,
            selectApp: selectApp,
            activeApp: activeApp,

            clear: clear
        }

        // ==============

        function asyncGetApps( callback ) {
            if ( !yvLoginedUser.get() ||
                 !yvLoginedUser.isAdminUser() ) {
                if (callback) callback( [] );
                return;
            }

            if ( apps && apps.length > 0 ) {
                if (callback) callback( apps );
                return;
            }

            yvAjax.get_all_apps( {
                user_uuid: yvLoginedUser.userUUID()
            })
                .success( function( r ) {                    
                    if ( r.error_code === 0 ) {
                        
                        var teams = r.app;
                        angular.forEach( teams, function( value, index ) { // assign `is_selected` to each app
                            value.is_selected = yvLoginedUser.userUUID() === value.user_uuid;
                        } );
                        apps = teams;
                        
                        if (callback) callback( teams );
                        
                    } else {
                        if (callback) callback( [] );
                    }
                } )
                .error( function( e ) {
                    if (callback) callback( [] );
                } );
        }

        function selectApp( app, succCB, errorCB ) {

            angular.forEach( apps, function( value, index ) {
                value.is_selected = value.uuid === app.uuid;
            } );

            if ( appUserMap[ app.user_uuid ] ) {

                var cachedUserInfo = appUserMap[ app.user_uuid ];
                _updateUser( cachedUserInfo.user_response );
                if (succCB) succCB();
                
            } else {
                
                yvAjax.get_user_detail_with_password( app.user_uuid )
                    .success( function( response ) {
                        if ( response.error_code === 0 ) {

                            _updateUser( response );
                            var cacheUser = {
                                user_response: response
                            };
                            appUserMap[ response.uuid ] = cacheUser;                                        
                            
                            if (succCB) succCB();
                            
                        } else {
                            if (errorCB) errorCB( response );
                        }
                    } )
                    .error( function( error ) {
                        if (errorCB) errorCB( error );
                    } );
            }
            
        }

        function activeApp() {
            var activeApp;
            angular.forEach( apps, function( value, index ) {
                if ( value.is_selected ) {
                    activeApp = value;
                }
            } );
            return activeApp;
        }

        function clear() {
            apps = [];            
        }

        function _updateUser( userResponse ) {
            yvUser.set_login_data( userResponse );
            yvUser.set_team( null );
        }
        
    }

    angular.module( "this_app.services" ).factory( "yvAppService", yvAppService );
    
}() )

+( function() {

    yvLoginedUser.$inject = [];
    function yvLoginedUser() {

        var user,
            
            isLogin = false;

        return {
            isLogined: isLogined,
            setLogined: setLogined,
            get: get,
            update: update,
            logout: logout,
            isAdminUser: isAdminUser,

            userUUID: userUUID
        }

        function isLogined() {
            return isLogin;
        }

        function setLogined ( l ) {
            isLogin = l;
        }

        function get () {
            return user;
        }

        function update ( u ) {
            user = u;
        }

        function logout () {
            user = null;
            isLogin = true;
        }

        function isAdminUser() {
            var adminUser = false;
            if ( get() ) {
                if ( get().user_status === 'ADMIN' ) {
                    adminUser = true;
                }
            }
            return adminUser;
        }

        function userUUID() {
            if ( get() ) {
                return get().uuid;
            }
            return undefined;
        }
        
    }

    angular.module("this_app.services").factory( "yvLoginedUser", yvLoginedUser );
    
}() )

angular.module("this_app")
    .controller("LogoutCtrl", function($scope, $cookies, $state, $timeout, yvAjax) {
        console.log("LOGOUT..................................");
        yvAjax.logout(WebRole);
        delete $cookies.PORTALUSER_SESSION_ID;
        delete $cookies.PORTALADMIN_SESSION_ID;
        $timeout(function() {
            $state.go("app.main", null, {reload: true});
        }, 100);
    }); // end logout ctrl

angular.module("this_app")
    .controller("SignupMdCtrl", function($scope, $state, $stateParams, $timeout, $translate, $cookieStore, yvAjax, yvUtil, yvUser, yvTransTags, yvConstants, yvDebug, yvLogin, yvAppService) {

        $scope.user = {
            user_status: "OWNER_2",
            is_service_user: false,
            user_fullname: "",
            user_email: "",
            user_password: "",
            app_name: "",

            user_password_is_visible: false,
            password_input_type: "password",
        };

        var get_token = function (onSuccess, onError) {
            yvAjax.get_credentials_token()
                .success( function( response ) {
                    if (response.access_token) {
                        onSuccess && onSuccess( response );
                    } else {
                        onError && onError( response );
                    }
                } )
                .error( function( error ) {
                    onError && onError( error );
                } );
        };
                
        var signup = function(user) {
            // first try to get token
            get_token( function(response) {
                var credentialsToken = response.access_token;
                console.log(response);
                var copyUser = angular.extend(
                    angular.copy(user),
                    {
                        user_password: sha1( user.user_password ),
                        app_uuid: yvConstants.PPMESSAGE_APP.uuid
                    }
                );
                
                yvAjax.signup(copyUser, credentialsToken)
                    .success(function(data) {
                        if (data.error_code == 0) {
                            yvAjax.login(copyUser).success(function(data) {
                                if ( data.error_code == 0 ) {
                                    yvLogin.updateActiveUserCookieKey( data.user_uuid );
                                    yvLogin.updateLoginedUserCookieKey( data.user_uuid, data.access_token );
                                }
                                yvLogin.updateLoginedUser( copyUser );
                                yvLogin.setLogined( true );
                                $state.go("app.settings.overview")
                            }).error(function(data) {
                                console.error("signup error");
                                $scope.toast_error_string("SERVICE_ERROR_TAG");
                            });
                        } else {
                            if (data.error_code == yvAjax.API_ERR.EX_USER) {
                                $scope.toast_error_string("EMAIL_USED_TAG");
                            } else {
                                $scope.toast_error_string("SERVICE_ERROR_TAG");
                            }
                        }
                    })
                    .error(function(data) {
                        console.error("create portal user error");
                    });
                
            }, function(error) {
                // get token error
                $scope.toast_error_string("SERVICE_ERROR_TAG");
            } );
        };

        var signin = function(user) {
            var password = sha1($scope.user.user_password);
            yvAjax.login({user_email: $scope.user.user_email, user_password: password})
                .success(function(data) {
                    if (data.error_code == 0) {
                        yvLogin.updateActiveUserCookieKey( data.user_uuid );
                        yvLogin.updateLoginedUserCookieKey( data.user_uuid, data.access_token );
                        yvAjax.get_user_detail_with_password(data.user_uuid)
                            .success(function(data) {
                                yvDebug.d('get_user_detail', data);
                                if (data.error_code != 0) {
                                    yvLog.w("get detail failed %s", data);
                                    return;
                                }
                                
                                yvLogin.updateLoginedUser( angular.copy( data ) );
                                yvLogin.setLogined( true );
                                
                                var _url = yvConstants.USER_STATUS[data.user_status];
                                if (data.user_status == "SERVICE") {
                                    yvLogin.updateActiveUser( data );
                                    $scope.start_ppmessage(true);
                                    return;
                                }

                                if (data.user_status == "ADMIN") {
                                    _url = yvConstants.USER_STATUS["OWNER_2"];
                                    yvAppService.getApps( function( apps ) {
                                        $state.go(_url);
                                    } );
                                    return;
                                }
                                
                                if (data.user_status == "OWNER_2") {
                                    $state.go(_url);
                                }
                                
                                return;
                            });
                    } else {
                        $scope.toast_error_string("SIGNIN_FAILED_TAG");
                    }
                })
                .error(function(data) {
                    $scope.toast_error_string("SIGNIN_FAILED_TAG");
                });

        };

        var send_email = function(user) {
            var _s = function() {
                $scope.toast_success_string("SEND_NEW_PASSWORD_SUCCESS_TAG");
            };
            var _e = function() {
                $scope.toast_error_string("SEND_NEW_PASSWORD_FAILED_TAG");
            };
            
            get_token(function(response) {
                var credentialsToken = response.access_token;
                console.log(response);
                yvAjax.send_new_password({user_email: user.user_email}, credentialsToken).success(function() {
                    _s();
                }).error(function() {
                    _e();
                });
            }, function() {
                _e();
            });
        };
        
        $scope.sign_up_form_submit = function() {
            signup($scope.user);
        };

        $scope.sign_in_form_submit = function() {
            signin($scope.user);
        };

        $scope.reset_password_form_submit = function() {
            send_email($scope.user);
        };

        $scope.show_user_password = function(show) {
            if (show) {
                $scope.user.user_password_is_visible = true;
                $scope.user.password_input_type = "text";
            } else {
                $scope.user.user_password_is_visible = false;
                $scope.user.password_input_type = "password";
            }
        };

        $scope.ui = {selected_index: 0};
        if ($stateParams.sign_what && $stateParams.sign_what == "signup") {
            $scope.ui.selected_index = 0;
        }

        if ($stateParams.sign_what && $stateParams.sign_what == "signin") {
            $scope.ui.selected_index = 1;
        }

        if ($stateParams.sign_what && $stateParams.sign_what == "reset") {
            $scope.ui.selected_index = 2;
        }
        
    }); // end login ctrl

angular.module("this_app")
    .controller("AppCtrl", function($window, $scope, $rootScope, $location, $state, $translate, $timeout, $cookies, $filter, toastr, yvAjax, yvUser, yvUtil, yvDebug, yvLogin, yvAppService, yvConstants, yvLoginedUser, yvTransTags) {

        $scope._languages = [
            {
                lang: "zh-CN",
            },            
            {
                lang: "en",
            },
        ];

        var isLogin = yvLogin.isLogined();

        $scope.isAdminUser = false; // is `ppconsole admin` user
        $scope.apps = []; // apps
        $scope.selectApp = selectApp; // Event: `selectApp`
        $scope.appStyle = appStyle; // css style
        $scope.menuStyle = {
            'margin-top': $scope.isAdminUser ? '12px' : '24px'
        }; // menu style
        $scope.selectedApp = { app_name: '' };

        var _getPreferredLanguage = function() {
            var _p = $translate.use();
            var _l = $scope._languages.length;
            for (var i = 0; i < _l; i++) {
                if ($scope._languages[i].lang == _p) {
                    return $scope._languages[i].lang;
                }
            }
            return $scope._languages[0].lang;
        };
        
        var _getLanguage = function() {
            var _l = yvUser.get_language();
            if (_l == null) {
                _l = _getPreferredLanguage();
                yvUser.set_language(_l);
            }
            return _l;
        };

        
        
        $scope.toggle_mobile_menu = function($event) {
            if ($(".mobile-menu").hasClass("active")) {
                $(".mobile-menu").removeClass("active");
                $(".mobile-menu-items").removeClass("active");
            } else {
                $(".mobile-menu").addClass("active");
                $(".mobile-menu-items").addClass("active");
            }
        };

        $scope.click_mobile_items = function($event) {
            if ($(".mobile-menu").hasClass("active")) {
                $(".mobile-menu").removeClass("active");
                $(".mobile-menu-items").removeClass("active");
            } 
        };

        $scope.switch_to = function(route_str) {
            var url = 'app.' + route_str;
            $state.go(url);
        };
        
        $scope.main = function() {
            window.open("https://www.ppmessage.com");
            //$state.go("app.main");
        };

        $scope.blog = function() {
            window.open("http://blog.ppmessage.cn");
        };
        
        $scope.forum = function() {
            window.open("http://forum.ppmessage.cn");
        };
        
        $scope.switch_to_english = function () {
            yvUser.set_language("en");
            $translate.use("en");
        };

        $scope.switch_to_chinese = function () {
            yvUser.set_language("zh-CN");
            $translate.use("zh-CN");
        };

        $scope.is_lang_english = function() {
            var _l = yvUser.get_language();
            if (_l == null) {
                return true;
            }
            if (_l == "en") {
                return true;
            }
            return false;
        };
        
        $scope.get_user_fullname = function() {
            return yvLogin.getLoginedUser() ? yvLogin.getLoginedUser().user_fullname : "";
        };

        $scope.is_logined = function() {
            return isLogin;
        };

        $scope.login = function() {
            $state.go("login");
        };

        $scope.show_settings_menu = function() {
            return yvLoginedUser.get() && yvLoginedUser.get().user_status === "OWNER_2";
        };
        
        $scope.start_ppmessage = function(in_this) {
            var userUuid = yvUser.get_uuid();
            var password = yvUser.get_password();
            var userEmail = yvUser.get_email();
            var body = {
                user_email: userEmail,
                user_password: password,
                user_uuid: userUuid,
            };
            console.log("autologin with: %s", body);
            body = yvUtil.base64_encode(JSON.stringify(body));
            var http = yvUtil.http_protocol(location.hostname);
            var url = http + location.host + "/ppkefu/#/noapp/auto-login/" + body;
            if (in_this) {
                self.location = url;
            } else {
                window.open(url, "ppmessage" + "-" + userEmail);
            }
        };
        
        $scope.logout = function() {
            var _logout = yvAjax.logout("user");
            $timeout(function() {
                yvLogin.logout();
                isLogin = false;
                yvAppService.clear();
                $scope.menuStyle[ 'margin-top' ] = '24px';
                $scope.isAdminUser = false;
            });
            $timeout(function() {
                $state.go("app.signup-md", {sign_what: "signin"});
            });
        };

        $scope.toast_error_string = function(str) {
            var _local_str = $filter("translate")("global." + str);
            console.log(_local_str);
            $timeout( function() {
                toastr.error(_local_str);
            });
        };

        $scope.toast_success_string = function(str) {
            var _local_str = $filter("translate")("global." + str);
            console.log(_local_str);
            $timeout( function() {
                toastr.success(_local_str);
            });
        };

        $scope.$on("$destroy", function() {
            
        });

        var _init = function() {
            // Event: login successful
            $rootScope.$on( yvConstants.BROADCAST_EVENT_KEY.LOGIN_FINISHED , function( event, args ) {

                isLogin = true;
                $scope.isAdminUser = args.isAdmin;
                if ( $scope.isAdminUser === true ) {                    
                    $scope.menuStyle[ 'margin-top' ] = '12px';
                    refreshApps();
                }
            } );            
        };

        _init();

        // ===========
        function refreshApps() {
            fetchApps( function( apps ) {
                setupAppsDropDownButton( apps );
            } );            
        }
        
        function fetchApps( callback ) {
            yvAppService.getApps( callback );
        }
        
        function setupAppsDropDownButton( apps ) {
            $scope.apps = apps;
            angular.forEach( apps, function( app, index ) {
                if ( app.is_selected ) {
                    $scope.selectedApp = app;                    
                }
            } );
        }

        function selectApp( app ) {
            yvAppService.selectApp( app, function() {

                refreshApps();
                $scope.$broadcast( yvConstants.BROADCAST_EVENT_KEY.REFRESH_PAGE );
                
            }, function( error ) {
                
                yvDebug.d( 'select app error', error );
                
            } );
        }

        function appStyle( app ) {
            if ( app.is_selected ) {
                return {
                    'background-color': 'red'
                };
            }
            return { };
        }

    }); // end app ctrl

angular.module("this_app")
    .controller("SettingsCtrl", function($scope, $rootScope, $cookies, $state, $timeout, $translate, yvAjax, yvUtil, yvUser, yvConstants, yvDebug) {

        $scope.left_style = null;
        $scope.right_style = null;
        $scope.icon_style = null;
        
        $scope.should_show_update_string = function() {
            return $scope._update_string && $scope._update_string.length > 0;
        };

        $scope.get_update_string = function() {
            return $scope._update_string;
        };
        
        $scope.close_update_string = function() {
            $timeout(function() {
                $scope._update_string= "";
            });
        };
        
        $scope.set_update_string = function(str) {
            $timeout(function() {
                $scope._update_string = str;
            });
            
            $timeout(function() {
                $scope._update_string= "";
            }, 5000);
            return;
        };

        $scope.set_flash_style = function(index) {
            //three style:success, warning, failed
            var _style_type = [
                //success
                {
                    "left_style": "toast-style-success-l",
                    "right_style": "toast-style-success-r",
                    "icon_style": "glyphicon glyphicon-ok",
                },
                //warning
                {
                    "left_style": "toast-style-warning-l",
                    "right_style": "toast-style-warning-r",
                    "icon_style": "glyphicon glyphicon-info-sign",
                },
                //failed
                {
                    "left_style": "toast-style-fail-l",
                    "right_style": "toast-style-fail-r",
                    "icon_style": "glyphicon glyphicon-remove",
                },
            ];
            $timeout(function() {
                var _style = _style_type[index];
                $scope.left_style = _style.left_style;
                $scope.right_style = _style.right_style;
                $scope.icon_style = _style.icon_style;
            });
        };

        $scope.get_left_flash_style = function() {
            return $scope.left_style;
        };

        $scope.get_right_flash_style = function() {
            return $scope.right_style;
        };

        $scope.get_icon = function() {
            return $scope.icon_style;
        };

        $scope.action_toast = function(scope, index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string(scope.lang[tag]);
        };
        
        var _init = function() {
            $scope._update_string = "";
        };

        $scope.refresh_settings_menu = function() {
            var _j = angular.element(".menu-item");
            for (var i = 0; i < _j.length; i++) {
                angular.element(_j[i]).removeClass("selected");
            }
            
            _j = document.getElementById($state.current.name);
            if (_j && _j.className && _j.className.indexOf("selected") < 0) {
                _j.className += " selected";
            }            
            return;
        };

        _init();
        
    }); // end login ctrl

angular.module("this_app")
    .controller("ApplicationProfileCtrl", function($scope, $stateParams, $state, $translate, $timeout, yvTransTags, yvAjax, yvUtil, yvUser, yvDebug, yvConstants, yvLogin) {

        var team_name = "";

        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };
        
        $scope.can_delete = false;
        $scope.team_info = {};

        var _reset_team_info = function() {
            $scope.team_info = {
                app_uuid: null,
                app_name: null,
                ppconsole_thirdparty: {
                    api_uuid: null,
                    api_key: null,
                    api_secret: null,
                },
                ppkefu_thirdparty: {
                    api_uuid: null,
                    api_key: null,
                    api_secret: null,
                },
            };
        };
        
        $scope.show_remove_modal = function() {
            jQuery('#remove_app').modal({show:true});
        };

        $scope.remove_app = function() {
            
            var app_info = {
                "user_uuid": yvUser.get_uuid(),
                "app_uuid": yvUser.get_team().uuid,
            };
            yvAjax.remove_app(app_info)
                .success(function(data) {
                    console.log("remove app info back",data);
                    jQuery('#remove_app').modal('hide');
                    if(data.error_code == 0) {
                        _note("flash-notice", "application.profile.REMOVE_APP_SUCCESS_TAG");
                        var team_uuid = '';
                        yvUser.set_team_uuid(team_uuid);
                        _reset_team_info()
                    }else if(data.error_code == -1){
                        // params miss
                        _note(1, "application.profile.UPDATE_APP_LACK_PARAMS_TAG");
                    }else if(data.error_code == 1){
                        //no such app
                        _note(1, "application.profile.UPDATE_APP_NOT_EXIST_TAG");
                    }else if(data.error_code == 2){
                        //not app owner
                        _note(2, "application.profile.PERMISSION_DENIED_TAG");
                    }else {
                        //encounter an error
                        _note(1, "application.profile.UPDATE_FAILED_TAG");
                    };
                })
                .error(function(data) {
                    jQuery('#remove_app').modal('hide');
                    _note(2, "application.profile.UPDATE_FAILED_TAG");
                });
        };

        var modify_check = function() {
            if(team_name == $scope.team_info.app_name) {
                _note("flash-error", "application.profile.NO_CHANGE_TAG");
                return false;
            };
            
            if(!yvUtil.regexp_check($scope.team_info.app_name)) {
                _note(1, "application.profile.NOT_REGULAR_WORDS_TAG");
                $scope.team_info.app_name = team_name;
                return false;
            };
            if(String($scope.team_info.app_name).length>63) {
                _note(1, "application.profile.WORDS_OUT_OF_LENGTH_TAG");
                $scope.team_info.app_name = team_name;
                return false;
            };
            return true;
        }
            
        $scope.modify = function() {
            console.log("$scope.team_info is",$scope.team_info);
            if(!modify_check()) {
                return;
            };
            var update = {
                "app_uuid": yvUser.get_team().uuid,
                "app_name": $scope.team_info.app_name,
            };
            yvAjax.update_app_info(update)
                .success(function(data) {
                    console.log("update team info back",data);
                    if(data.error_code == 0) {
                        $scope.team_info.app_name = data.app_name;
                        team_name = data.app_name;
                        yvUser && yvUser.get_team() && ( yvUser.get_team().app_name = team_name );
                        _note(0, "application.profile.UPDATE_SUCCESSFULLY_TAG");
                    }else if(data.error_code == -1) {
                        _note(1, "application.profile.UPDATE_APP_LACK_PARAMS_TAG");
                    }else if(data.error_code == 1) {
                        _note(1, "application.profile.UPDATE_APP_NOT_EXIST_TAG");
                    }else{
                        _note(1, "application.profile.UPDATE_FAILED_TAG");
                    }
                })
                .error(function(data) {
                    console.log("error data is",data);
                    _note(2, "application.profile.UPDATE_FAILED_TAG");
                });
        };

        var _team = function() {
            var _own_team = yvUser.get_team();
            if (_own_team == null) {
                console.error("no team info");
                return;
            }

            var app_uuid = _own_team.uuid;
            $scope.team_info.app_uuid = app_uuid;
            $scope.team_info.app_name = _own_team.app_name;
            var _get = yvAjax.get_api_info({app_uuid: app_uuid, user_uuid: yvUser.get_uuid()});
            _get.success(function(data) {
                $scope.team_info.ppconsole_thirdparty = data.ppconsole_thirdparty;
                $scope.team_info.ppkefu_thirdparty = data.ppkefu_thirdparty;
            });
        };
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, {
                $scope: $scope,
                onRefresh: function() {
                    _team();
                }
            } );
        };

        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.application.profile) {
                var _t = "application.profile." + i;
                _tag_list.push(_t);
            };
            $scope.translate = function() {
            };
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };
        
        var _init = function() {
            _reset_team_info();
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };
        _init();

        yvDebug.attach( 'yvBasicInfo', { yvUser: yvUser } );
    }); 

angular.module("this_app")
	.controller("IntegrateCtrl", function($scope, $rootScope, $stateParams, $cookies, $state, $timeout, $http, $translate, yvTransTags, yvAjax, yvUtil, yvUser, yvConstants, yvLogin) {

        $scope.enterprise = {
            link: null,
            code: null
        };

        var _generate_enterprise_link = function() {
            var _team = yvUser.get_team();
            if (_team == null) {
                return;
            }

            // `base64_encode` only accept `255 ascill` characters, so we need `escape` here
            var _appObj = { uuid: _team.uuid,
                            app_name: encodeURI( _team.app_name || '' ) }; 
            var _url = location.protocol + "//" + location.host + "/ppcom/enterprise/";
            var _param = yvUtil.base64_encode(JSON.stringify(_appObj));
            $timeout(function() {
                $scope.enterprise.link = _url + _param;
            });
            
        };

        var _generate_embedded_code = function() {
            var _own_team = yvUser.get_team();
            var _url = null;
            var _server = location.protocol + "//" + location.host;
            var _pre = "<script> window.ppSettings = {";
            _pre = _pre + "app_uuid:";
            _pre = _pre + "'" + _own_team.uuid + "'};";
            _pre = _pre + "(function(){var w=window,d=document;function l(){var a=d.createElement('script');a.type='text/javascript';a.async=!0;a.src='{SERVER}/ppcom/assets/pp-library.min.js';var b=d.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b)}w.attachEvent?w.attachEvent('onload',l):w.addEventListener('load',l,!1);})()</script>";
            _pre = _pre.replace("{SERVER}", _server);
            $scope.enterprise.code = _pre;
        };

        var _on_team_ok = function() {
            _generate_enterprise_link();
            _generate_embedded_code();
        };
        
        // clip integrate code to clipboard
        var code_client = new ZeroClipboard(document.getElementById("code_clip_action"));
        code_client.on("ready", function( readyEvent ) {            
            code_client.on( "aftercopy", function( event ) {
                $scope.set_flash_style( 0 );
                $scope.set_update_string( $scope.lang[ 'application.profile.COPY_SUCCESSFUL_TAG' ] );
            });
        } );
        
        // clip integrate code to clipboard
        // The ZeroClipboard library using an invisible Adobe Flash movie and a JavaScript interface.
        var copyEl = document.getElementById("link_clip_action");
        var client = new ZeroClipboard( copyEl );
        client.on("ready", function( readyEvent ) {
            client.on( "aftercopy", function( event ) {
                $scope.set_flash_style( 0 );
                $scope.set_update_string( $scope.lang[ 'application.profile.COPY_SUCCESSFUL_TAG' ] );
            } );
        } );
        client.on( 'error', function( errorEvent ) {
            angular.element( copyEl ).bind( 'click' , function( e ) {
                $scope.set_flash_style( 1 );
                $scope.set_update_string( $scope.lang[ 'application.profile.COPY_FAIL_TAG' ] );    
            } );
        } );
                
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _on_team_ok();
            }, { $scope: $scope, onRefresh: _on_team_ok } );
        };

        var _translate = function() {
            var _tag_list = [];
            var i;
            for (i in yvTransTags.en.application.profile) {
                var _t = "application.profile." + i;
                _tag_list.push(_t);
            };

            $scope.translate = function() {
                // console.log($scope.lang);
            };
            
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };
        
		var _init = function() {
            _translate();
            $scope.refresh_settings_menu();
            _logined();
        };
		
		_init();
	}); // end ctrl

angular.module("this_app")
    .controller("SettingsAccountCtrl", function($scope, $cookies, $state, $timeout, $translate, yvAjax, yvUtil, yvUser, yvTransTags, yvConstants, yvLogin, yvDebug ) {

        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };

        var _reset_scope_user = function() {
            $scope.user = {
                user_password_is_visible: false,
                password_input_type: "password",
            };
        };

        $scope.user = {
            user_password_is_visible: false,
            password_input_type: "password",
        };
        
        $scope.show_user_password = function(show) {
            if (show) {
                $scope.user.user_password_is_visible = true;
                $scope.user.password_input_type = "text";
            } else {
                $scope.user.user_password_is_visible = false;
                $scope.user.password_input_type = "password";
            }
        };

        $scope.changepassword = function(user) {
            
            if (!user.user_new_password || !yvUser.get_uuid()) {
                return;
            }

            var errorTag;
            var _pass_hash = sha1(user.user_old_password);
            if (_pass_hash !== yvUser.get_password()) {
                errorTag = "settings.account.OLDPASSWORD_MISMATCH_TAG";
            } else {
                var error_code = yvUtil.validator.validateRepeatPassword( user.user_new_password, user.user_new_password );
                switch( error_code ) {
                case yvUtil.validator.ERR_CODE.MIN_LENGTH_LIMIT:
                    errorTag = 'signup.NO_PASSWORD_TAG';
                    break;

                case yvUtil.validator.ERR_CODE.MAX_LENGTH_LIMIT:
                    errorTag = 'signup.LENGTH_OUT_OF_RANGE_TAG';
                    break;

                case yvUtil.validator.ERR_CODE.CONTAIN_WHITESPACE_AT_HEAD_OR_TAIL:
                    errorTag = 'signup.ERR_PASSWORD_CONTAINS_WHITESPACE_AT_HEAD_OR_TAIL';
                    break;

                case yvUtil.validator.ERR_CODE.REPEAT_PASSWORD_MIS_MATCH:
                    errorTag = 'signup.PASSWORD_NOT_MATCHED_TAG';
                    break;
                }
            }

            if ( errorTag !== undefined ) {
                _note( 1, errorTag );
                return;
            }

            var _d = {
                "app_uuid": yvUser.get_team().uuid,
                "user_uuid": yvUser.get_uuid(),
                "user_password": sha1( user.user_new_password ),
                "old_password": _pass_hash,
            };
            
            var _update = yvAjax.update_user(_d);
            _update.success(function(data) {
                
                if (data.error_code == 0) {
                    yvUser.set_password( sha1( user.user_new_password ) );
                    _note(0, "settings.profile.UPDATE_SUCCESSFULLY_TAG");
                    _reset_scope_user();
                    
                } else {
                    _note(1, "settings.profile.UPDATE_FAILED_TAG");
                    _reset_scope_user();
                }
            });
            _update.error(function() {
                _note(2, "settings.profile.UPDATE_FAILED_TAG");
                _reset_scope_user();
            });
        };
        
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                switch( errorCode ) {
                    
                case yvLogin.ERROR_CODE.OK:
                    // nothing todo ...
                    break;
                    
                case yvLogin.ERROR_CODE.STATUS_ILLEGAL:
                    // do something ...
                    break;
                    
                }
            });
        };
        
        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.settings.account) {
                var _t = "settings.account." + i;
                _tag_list.push(_t);
            }
            for (var i in yvTransTags.en.settings.profile) {
                var _t = "settings.profile." + i;
                _tag_list.push(_t);
            }
            for (var i in yvTransTags.en.signup) {
                var _t = "signup." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {
            };
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };
        
        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };

        _init();
        
    }); // end account ctrl

angular.module("this_app")
    .controller("SettingsProfileCtrl", function($scope, yvAjax, yvUtil, yvUser, yvTransTags, yvLogin) {

        $scope.change = function(user) {            
        };

        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };
        
        $scope.submit = function(user) {
            if (user.fullname == null) {
                return;
            }
            var _d = {
                app_uuid:yvUser.get_team().uuid,
                user_uuid:yvUser.get_uuid(),
                user_fullname:user.fullname
            };
            var _u = yvAjax.update_user(_d);
            _u.success(function(data) {
                console.log(data);
                if (data.error_code == 0) {
                    yvUser.set_fullname(user.fullname);
                    _note(0, "settings.profile.UPDATE_SUCCESSFULLY_TAG");
                } else {
                    _note(1, "settings.profile.UPDATE_FAILED_TAG");
                }
            });
            _u.error(function(data) {
                _note(2, "settings.profile.UPDATE_FAILED_TAG");
            });
        };

        var _team = function() {
            $scope.user = {
                fullname: yvUser.get_fullname(),
                email: yvUser.get_email(),
            };
        };
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, { $scope: $scope, onRefresh: _team } );
        };

        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.settings.profile) {
                var _t = "settings.profile." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {
                console.log("trans lang %o", $scope.lang)
            };
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
            return;
        };
        
        _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };
        _init();
        
    }); // end ctrl

angular.module("this_app")
    .controller("ApplicationPeopleCtrl", function($scope, $cookies, $stateParams, $state, $timeout, $translate, yvAjax, yvUtil, yvUser, yvTransTags, yvConstants, yvDebug, yvAppPeopleService, yvLogin) {

        var list = [];

        var app_uuid = null;
        var user_uuid = null;

        $scope.selected_all = {seleted: false};
        $scope.create_user_direct = getInitialCreateUserModalData(); 
        $scope.edit_user_direct = getInitialCreateUserModalData();
        
        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };
        
        $scope.email_handler = function(email) {
            if (email.length <= 22){
                return email;
            }
            return email.substring(0,18) + "..";
        }
        
        $scope.show_edit_modal = function() {
            jQuery("#batch_edit_user").modal( { show:true } );
            $scope.edit_user_direct = getInitialEditUserModalData(); 
        };
        
        $scope.show_create_modal = function() {
            jQuery("#batch_create_user").modal( { show:true } );
            $scope.create_user_direct = getInitialCreateUserModalData(); 
        };

        $scope.show_edit_user_password = function(show) {
            if (show) {
                $scope.edit_user_direct.user_password_is_visible = true;
                $scope.edit_user_direct.password_input_type = "text";
            } else {
                $scope.edit_user_direct.user_password_is_visible = false;
                $scope.edit_user_direct.password_input_type = "password";
            }
        };

        $scope.show_user_password = function(show) {
            if (show) {
                $scope.create_user_direct.user_password_is_visible = true;
                $scope.create_user_direct.password_input_type = "text";
            } else {
                $scope.create_user_direct.user_password_is_visible = false;
                $scope.create_user_direct.password_input_type = "password";
            }
        };
        
        $scope.edit_service_user_form_submit = function() {
            var user_info = {
                "app_uuid": yvUser.get_team().uuid,
                "user_uuid": $scope.edit_user_direct.user_uuid,
                "user_email": $scope.edit_user_direct.email,
                "user_fullname": $scope.edit_user_direct.name
            };

            if ($scope.edit_user_direct.password && $scope.edit_user_direct.password.length > 0) {
                user_info.user_password = sha1($scope.edit_user_direct.password);
            }

            yvAjax.update_user(user_info).success(function(data) {
                if (data.error_code == 0) {
                    _note(0, "application.people.EDIT_APP_USER_SUCCESS_TAG")
                } else {
                    _note(1, "application.people.EDIT_APP_USER_FAILED_TAG")
                }
            }).error(function(data) {
                _note(1, "application.people.EDIT_APP_USER_FAILED_TAG")
            });
            
            jQuery( "#batch_edit_user" ).modal( 'hide' );
            $scope.page_app_user();
        };
        
        $scope.create_service_user_form_submit = function() {
            var user_uuid = yvUser.get_uuid();
            var app_user_info = {
                "user_status": "SERVICE",
                "is_service_user": true,
                "app_uuid": yvUser.get_team().uuid,
                "user_email": $scope.create_user_direct.email,
                "user_fullname": $scope.create_user_direct.name,
                "user_password": sha1( $scope.create_user_direct.password ),
            };

            yvAppPeopleService.createServiceUser( app_user_info, function( data ) {

                var note = "application.people.CREATE_APP_USER_SUCCESSFULLY_TAG",
                    noteIndex = 0;
                
                switch ( data.error_code ) {
                    
                case yvAjax.API_ERR.NO_ERR:
                    break;

                case yvAjax.API_ERR.EX_USER:
                    note = "application.people.ALREADY_IS_APP_USER_TAG"
                    noteIndex = 1;
                    break;

                case yvAppPeopleService.UP_TO_MAX_SERVICE_USERS_ERROR_CODE:
                    note = "application.people.QUOTA_REACH_TO_UPPER_LIMIT_TAG"
                    noteIndex = 1;                    
                    break;

                default:
                    note = "application.people.CREATE_APP_USER_FAILED_TAG";
                    noteIndex = 1;
                    break;
                }

                jQuery( "#batch_create_user" ).modal( 'hide' );
                $scope.page_app_user();
                _note( noteIndex, note );
                
            }, function( data ) {
                jQuery("#batch_create_user").modal('hide');
                $scope.page_app_user();
                _note(2, "application.people.CREATE_APP_USER_FAILED_TAG");
            } );

        };

        $scope.should_show_edit_button = function() {
            var list = [];
            angular.forEach($scope.group, function (member) {
                if(member.selected) {
                    this.push(member);
                }
            }, list);
            if (list.length == 1) {
                return true;
            }
            return false;
        };

        $scope.should_show_remove_button = function() {
            var list = [];
            angular.forEach($scope.group, function (member) {
                if(member.selected) {
                    this.push(member);
                }
            }, list);
            if (list.length > 0) {
                return true;
            }
            return false;
        };

        $scope.show_remove_modal = function() {
            $scope.to_be_removed_users = [];
            angular.forEach($scope.group, function (member) {
                if(member.selected) {
                    this.push(member);
                }
            }, $scope.to_be_removed_users);
            
            if(!$scope.to_be_removed_users.length){
                return;
            };

            jQuery("#remove_user").modal({show:true});
            return;
        };

        $scope.check_all_changed = function (v) {
            angular.forEach($scope.group, function (member) {
                if(!member.is_owner_user == 1) {
                    member.selected = v;
                }
            });
        };

        $scope.$watch(function(scope){
            var flag = true;
            angular.forEach(scope.group, function(member) {
                if(member.selected) {
                    flag = false;
                }            
            });
            return flag;
        }, function(newVal, oldVal, scope){
            var flag = true;
            angular.forEach(scope.group, function(member) {
                if(member.selected) {
                    flag = false;
                }
            });
            
            if(flag) {
                scope.selected_all.selected = false;
            }
        });

        $scope.remove_users = function(to_be_removed_users) {
            if (to_be_removed_users == null || to_be_removed_users.length == 0) {
                return;
            }
            var _uuids = [];
            angular.forEach( to_be_removed_users, function( member ) {
                this.push( member.uuid );
            }, _uuids );

            var _r = yvAjax.leave_app(_uuids, yvUser.get_team().uuid);
            _r.success(function(data) {

                if (data.error_code == 0) {
                    jQuery("#remove_user").modal('hide');
                    $scope.selected_all.selected = false;
                    $scope.page_app_user();
                    _note(0, "application.people.REMOVE_APP_USER_SUCCESSFULLY_TAG");
                } else {
                    jQuery("#remove_user").modal('hide');
                    $scope.selected_all.selected = false;
                    $scope.page_app_user();
                    _note(1, "application.people.REMOVE_APP_USER_FAILED_TAG");
                    console.error(data);
                    return;
                }
            });
            _r.error(function(data) {
                jQuery("#remove_user").modal('hide');
                $scope.selected_all.selected = false;
                $scope.page_app_user();
                _note(2, "application.people.REMOVE_APP_USER_FAILED_TAG");
                console.error(data);
                return;
            });
        };

        $scope.page_app_user = function(newPageNumber){
            var search_value = $scope.search_value || "";            
            var page_number = $scope.page_number = newPageNumber || 1;

            $scope.items_per_page = 12;

            yvAppPeopleService.getAppServiceUsersWithPagination( {

                sort: true,
                filter_keyword: $.trim( search_value ),
                start_page: ( page_number - 1 ),
                length: $scope.items_per_page
                
            }, function( response ) {
                
                $scope.group = response.users;
                $scope.total_items = response.total;
                
            }, function( e ) {
                
                $scope.group = [];
                $scope.total_items = 0;
                
            } );

            // var _request = {};
            // _request["app_uuid"] = yvUser.get_team().uuid;
            
            // _request["columns[0][name]"] = "user_fullname";
            // _request["columns[1][name]"] = "user_email";
            // _request["columns[2][name]"] = "user_uuid";
            // _request["columns[3][name]"] = "user_icon";
            // _request["columns[4][name]"] = "is_owner_user";
            
            // _request["order[0][column]"] = 0;
            // _request["order[0][dir]"] = "ASC";
            // _request["search[value]"] = $.trim(search_value);
            // _request["start"] = _request["length"] * (page_number-1);

            // console.log(_request);
            
            // var _p = yvAjax.page_app_user(_request);

            // _p.success(function(data) {
            //     $scope.group = data.data;
            //     $scope.total_items = data.recordsFiltered;
            // });

            // _p.error(function(data) {
            //     console.error(data);
            //     return;
            // });

        }

        var _team = function() {
            var _own_team = yvUser.get_team();
            if (_own_team == null) {
                console.error("no team info");
                return;
            }
            $scope.page_app_user();
        };
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, { $scope: $scope, onRefresh: _team } );
        };
        
        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.application.people) {
                var _t = "application.people." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {};
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };
        
        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };

        ///////// Initialize ///////////

        _init();

        //////// Internal Implementation ////

        function getInitialCreateUserModalData() {
            return {
                password: null,
                user_password_is_visible: false,
                password_input_type: 'password',
            }
        }

        function getInitialEditUserModalData() {
            var _return_member = null;
            angular.forEach($scope.group, function(member) {
                if(member.selected) {
                    _return_member = member;
                }
            });

            if (_return_member != null) {
                _return_member.user_uuid = _return_member.uuid;
                _return_member.email = _return_member.user_email;
                _return_member.name = _return_member.user_fullname;
                _return_member.password = "";                
            }
            return _return_member;
        }

        yvDebug.attach( 'yvAppPeopleController', { $scope: $scope } );
        
    }); // end ctrl

angular.module("this_app")
    .controller("ApplicationWelcomeCtrl", function($scope, $state, $stateParams, $timeout, yvAjax, yvUser, yvTransTags, yvUtil, yvDebug, yvLogin){

        $scope.current_bubble = {
            ppcom_launcher_color: '#54c6d6',
            ppcom_launcher_color_changed: false,
        };
        
        var _ajax_update_team_info = function(update, cb) {
            yvAjax.update_app_info(update)
                .success(function(data) {
                    console.log(data);
                    if(data.error_code == 0) {
                        $scope.action_toast($scope, 0, "application.welcome.UPDATE_APP_SUCCESSFULLY_TAG");
                        cb && cb();
                    }else if(data.error_code == -1) {
                        //app_uuid miss
                        $scope.action_toast($scope, 1, "application.welcome.UPDATE_APP_LACK_PARAMS_TAG");
                    }else if(data.error_code == 1) {
                        //app not exist
                        $scope.action_toast($scope, 1, "application.welcome.UPDATE_APP_NOT_EXIST_TAG");
                    }else {
                        //error encounter
                        $scope.action_toast($scope, 1, "application.welcome.UPDATE_ENCOUNTER_AN_ERROR_TAG");
                    };
                })
                .error(function(data) {
                    console.log(data);
                    $scope.action_toast($scope, 2, "application.welcome.UPDATE_ENCOUNTER_AN_ERROR_TAG");
                });
        };

        var _team = function() {
            var _own_team = yvUser.get_team();
            if (_own_team == null) {
                console.error("no team info");
                return;
            }
            $timeout(function() {
                $scope.current_bubble = {
                    welcome_message: _own_team.welcome_message,
                    ppcom_launcher_color: _own_team.ppcom_launcher_color ? _own_team.ppcom_launcher_color : '#54c6d6', //'#54c6d6',
                    ppcom_launcher_style: _own_team.ppcom_launcher_style ? _own_team.ppcom_launcher_style : 'DEFAULT', //'DEFAULT',
                    app_route_policy: _own_team.app_route_policy,//BROADCAST/GROUP/THIRD
                    show_ppcom_hover: _own_team.show_ppcom_hover, //ALWAYS/NEVER/ONCE
                    ppcom_powered_by_name: _own_team.ppcom_powered_by_name,
                    ppcom_powered_by_link: _own_team.ppcom_powered_by_link,
                    ppcom_powered_by_visible: _own_team.ppcom_powered_by_visible,
                };
                _begin_watch();
            });
        };
        
        var _check = function(update, cb) {
            for(var i in update){
                if(i.length > 512) {
                    $scope.action_toast($scope, 1, "application.welcome.WELCOME_WORDS_OUT_OF_LENGTH_TAG");
                    return;
                };
            };
            cb && cb(update);
            return;
        };

        var _init_flag = function() {
            $scope.current_bubble.ppcom_launcher_color_changed = false;
        };
        
        var _begin_watch = function() {
            
            $scope.$watch('current_bubble.ppcom_launcher_color', function(newValue, oldValue) {
                if(oldValue !== newValue) {
                    $scope.current_bubble.ppcom_launcher_color_changed = true;
                    return;
                };
            });

        };
        
        $scope.change_ppcom_color = function() {
            if($scope.current_bubble.ppcom_launcher_color_changed) {
                var update = {
                    "app_uuid": yvUser.get_team().uuid,
                    "ppcom_launcher_color": $scope.current_bubble.ppcom_launcher_color,
                };
                _ajax_update_team_info(update, _init_flag);
            };
        };
        
        $scope.update_team_info = function(dirty) {
            if(!dirty) {
                $scope.action_toast($scope, 1, "application.welcome.NO_CHANGED_TAG");
                return;
            };
            var update = {
                "app_uuid": yvUser.get_team().uuid,
                "welcome_message": $scope.current_bubble.welcome_message
            };

            _check(update, _ajax_update_team_info);
        };
                
        $scope.get_launcher_style = function() {
            var _c = null;
            if ($scope.current_bubble && $scope.current_bubble.ppcom_launcher_color) {
                _c = $scope.current_bubble.ppcom_launcher_color;
            }
            if (_c == null) {
                _c = "#54c6d6";
            }
            var _s = {
                "background-color": _c,
            };
            return _s;
        };

        $scope.get_launcher_color_name = function() {
            var _c = null;
            if ($scope.current_bubble && $scope.current_bubble.ppcom_launcher_color) {
                _c = $scope.current_bubble.ppcom_launcher_color;
            }

            if (_c == null) {
                _c = "#54c6d6";
            }
            return _c;
        };
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, { $scope: $scope, onRefresh: _team } );
        };
        
        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.application.welcome) {
                var _t = "application.welcome." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {};
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };

        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };

        _init();

        /////////// Implementation /////////////

        yvDebug.attach( 'yvAppWelcomeController', { $scope: $scope, yvUser: yvUser } );
    });

angular.module("this_app")
    .controller("ApplicationMessageRouteCtrl", function($scope, $state, $stateParams, $timeout, yvAjax, yvUser, yvTransTags, yvUtil, yvLogin){

        $scope.current_app = {
            "app_route_policy": null,
        };
        
        //show info to user after operation 
        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };

        var _ajax_update_team_info = function(update, cb) {
            yvAjax.update_app_info(update)
                .success(function(data) {
                    console.log(data);
                    if(data.error_code == 0) {
                        _note(0, "application.welcome.UPDATE_APP_SUCCESSFULLY_TAG");
                        cb && cb();
                    }else if(data.error_code == -1) {
                        //app_uuid miss
                        _note(1, "application.welcome.UPDATE_APP_LACK_PARAMS_TAG");
                    }else if(data.error_code == 1) {
                        //app not exist
                        _note(1, "application.welcome.UPDATE_APP_NOT_EXIST_TAG");
                    }else {
                        //error encounter
                        _note(1, "application.welcome.UPDATE_ENCOUNTER_AN_ERROR_TAG");
                    };
                })
                .error(function(data) {
                    console.log(data);
                    _note(2, "application.welcome.UPDATE_ENCOUNTER_AN_ERROR_TAG");
                });
        };

        var _team = function() {
            var _own_team = yvUser.get_team();
            if (_own_team == null) {
                console.error("no team info");
                return;
            }
            $scope.current_app.app_route_policy = yvUser.get_team().app_route_policy;

            $timeout(function() {
                _begin_watch();
            });
        };
        
        var _change_app_route_policy = function(name) {
            var update = {
                "app_uuid": yvUser.get_team().uuid,
                "app_route_policy": name
            };
            _ajax_update_team_info(update);
        };
        
        var _begin_watch = function() {
            $scope.$watch('current_app.app_route_policy', function(newValue, oldValue) {
                if(oldValue !== newValue) {
                    console.log("update app route policy from: %s to: %s", oldValue, newValue);
                    _change_app_route_policy(newValue);
                };
            });
        };

        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, { $scope: $scope, onRefresh: _team } );
        };
        
        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.application.welcome) {
                var _t = "application.messageroute." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {};
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };

        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };
        
        _init();
    });

angular.module("this_app")
    .controller("GroupingCtrl", function($scope, $state, $stateParams, $timeout, $filter, yvAjax, yvUser, yvTransTags, yvUtil, yvDebug, yvAppGroupingService, yvLogin){
        
        var currentGroup = {};

        $scope.get_all_service = _get_team_service_user_list;
        $scope.groupListFilter = groupListFilter;
        $scope.create_group = createGroup;
        
        $scope.remove_group = removeGroup; //remove the group from the list.
        $scope.isGroupEditable = isGroupEditable;
        
        $scope.switch_group = switchUsersToNewGroup; // switch users to selected group
        $scope.switchGroupListFilter = switchGroupListFilter;
        $scope.checkout_to_group = selectGroup; //checkout to the selected group.

        $scope.modify_group = modifyGroup; // modified the service time and style of group.
        $scope.update_group = updateGroupInfo; // update the group's name or description.
        
        $scope.update_group_error = { // update the group's name user input invalid error hint
            name_error: '',
            desc_error: ''
        };
        $scope.create_group_error = { // create the group's name or desc user input invalid error hint
            name_error: '',
            desc_error: ''
        };

        $scope.team = {
            group_list: [],
            current_list: {
                user_list: [],
                name: null,
                uuid: null,
                type: 'TEAM', //TEAM OR GROUP
            },
            service_user_list: [],
        };
        
        $scope.selectedAll = false;
        $scope.selected_list = []; //the user selected current
        $scope.selected_group = null; //which group we used currently to operated
        $scope.showCheckAllColumn = false;
        
        //show info to user after operation 
        var _note = function(index, tag) {
            $scope.set_flash_style(index);
            $scope.set_update_string($scope.lang[tag]);
        };

        $scope.show_create_group_modal = function() {

            // Clear all cached data before
            $scope.new_group_desc = "";
            $scope.new_group_name = "";
            $scope.new_group_is_distributor = false;
            $scope.create_group_error.name_error = '';
            $scope.create_group_error.desc_error = '';
            
            jQuery("#create_group").modal({show:true});
            return;
        };

        $scope.show_update_group_modal = function( group, index ) {
            // Make a copy of `group` here
            //
            // If we don't make a copy here, then `$scope.selected_group` will pointer to `$scope.team.group_list`,
            // so, if we change `$scope.selected_group`, `$scope.team_group_list` will change at the same time, even if we are not click
            // the `save` button
            $scope.selected_group = angular.copy( group );

            // clear any error generated before
            $scope.update_group_error.name_error = '';
            $scope.update_group_error.desc_error = '';
            
            jQuery("#update_group").modal({show:true});
            return;
        };

        $scope.handle_group_name = function(group_name, len) {
            if(group_name.length > len) {
                return group_name.substring(0,len) + "...";
            };
            return group_name;
        };
        
        $scope.show_identify = function(_email) {
            if(_email == yvUser.get_email()) {
                return $scope.lang["application.grouping.ADMIN_USER_TAG"];
                //return '管理员';
            }else {
                return $scope.lang["application.grouping.SERVICE_USER_TAG"];
                //return '客服';
            };
        };
        
        // the followed function is used to the checkall button.
        $scope.checkAll = function() {
            var len = $scope.team.current_list.user_list.length;
            $scope.selectedAll?_uncheck_all(len):_check_all(len);
            $scope.selectedAll = !$scope.selectedAll;
        };
        var _check_all = function(len) {
            $scope.selected_list = [];
            for ( var i=0; i < len; i++ ) {
                angular.element( "#current_list_" + String(i) ) [ 0 ].checked = true;
            };
            for(var i=0; i<len; i++) {
                $scope.selected_list.push($scope.team.current_list.user_list[i]);
            };
        };        
        var _uncheck_all = function(len) {
            for(var i=0; i<len; i++) {
                angular.element("#current_list_" + String(i))[0].checked = false;
            };
            $scope.selected_list = [];
        };

        var _begin_watch = function() {
            $scope.$watch('selected_list.length', function(newValue, oldValue) {
                if(newValue !== oldValue) {
                    newValue == $scope.team.current_list.user_list.length
                        ?$scope.selectedAll = true
                        :$scope.selectedAll = false;
                    return;
                }
            });
        };
        
        // the followd functions used to the select or unselect the user.
        // the selected_list will change during these process.
        $scope.select_user = function(index) {
            var target_id = "#current_list_" + String(index);
            angular.element(target_id)[0].checked?_add(index):_remove(index);
            return;
        };
        var _add = function(index) {
            $scope.selected_list.push($scope.team.current_list.user_list[index]);
        };
        var _remove = function(index) {
            var pos = $scope.selected_list.indexOf($scope.team.current_list.user_list[index]);
            $scope.selected_list.splice(pos, 1);
        };

        $scope.get_group_start_service_time = function(time_str) {
            var hour = time_str.split('-')[0].split(':')[0];
            return hour;
        };
        $scope.get_group_end_service_time = function(time_str) {
            var hour = time_str.split('-')[1].split(':')[0];
            return hour;
        };
        
        var _team = function() {
            var _own_team = yvUser.get_team();
            if (_own_team == null) {
                console.error("no team info");
                return;
            }
            _get_init_info();
            _begin_watch();
        };
        
        var _logined = function() {
            yvLogin.prepare( function( errorCode ) {
                _team();
            }, { $scope: $scope, onRefresh: _team } );
        };
        
        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.application.grouping) {
                var _t = "application.grouping." + i;
                _tag_list.push(_t);
            }
            $scope.translate = function() {
                yvAppGroupingService.setUngroupedName();
                _logined();
            };
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };

        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
        };

        ////////// Initialize ///////////

        _init();
        
        ////////// Implementation ///////////

        function _get_init_info() {
            _get_group_list( _get_team_service_user_list );
            highlight();
        }

        function _get_group_list( successCallback, errorCallback ) {

            yvAppGroupingService.getGroupList( function( groupList ) {
                
                $scope.team.group_list.length = 0;
                angular.forEach( groupList, function( value, key ) {
                    $scope.team.group_list.push( value );
                } );

                successCallback && successCallback( groupList );
                
            }, function( error ) {
                
                yvDebug.w( error );
                errorCallback && errorCallback( {} );
                
            } );

        }

        function refreshGroupList( successCallback, errorCallback ) {
            _get_group_list( successCallback, errorCallback );
        }

        // this used to init the page and get the group list.
        function _get_team_service_user_list() {

            yvAppGroupingService.getTeamServiceUserList( function( users ) {
                
                $scope.team.service_user_list = users;
                $scope.team.current_list = {
                    user_list: users,
                    name: null,
                    uuid: null,
                    type: 'TEAM', //TEAM OR GROUP
                };
                highlight();

                // In team service list, user can not check all
                $scope.showCheckAllColumn = false;
                
            }, function( users ) {
                $scope.team.service_user_list = users;                
            } );

        }

        function _get_group_user_list( group_uuid ) {
            
            $scope.selected_list = [];
            yvAppGroupingService.getGroupServiceUserList( group_uuid, function( users ) {
                $scope.team.current_list.user_list = users;

                // enable check all column , when user in concrete group
                $scope.showCheckAllColumn = true;
                
            }, undefined, { reuse: true } ); // <= Try reuse local cached users

        }

        // create a new group.
        function createGroup() {

            var groupError = checkGroupError( $scope.new_group_name,
                                              $scope.new_group_desc );


            $scope.create_group_error.name_error = groupError.nameError;
            if ( groupError.nameError.length > 0 ) return;

            $scope.create_group_error.desc_error = groupError.descError;
            if ( groupError.descError.length > 0 ) return;

            yvAppGroupingService.createGroup( {
                new_group_name: $scope.new_group_name,
                new_group_desc: $scope.new_group_desc,
                new_group_is_distributor: $scope.new_group_is_distributor,
            }, function( r ) {

                jQuery("#create_group").modal('hide');
                $scope.new_group_name = null;
                _note(0, "application.grouping.CREATE_GROUP_SUCCESS_TAG");
                refreshGroupList();                
                
            }, function( e ) {
                _note(2, "application.grouping.ENCOUNTER_AN_ERROR_TAG");
            } );

        }

        function removeGroup( group, index ) {

            yvAppGroupingService.removeGroup( group.uuid, function( r ) {
                
                _note(0, "application.grouping.REMOVE_GROUP_SUCCESS_TAG");
                refreshGroupList( _get_team_service_user_list );
                
            }, function( e ) {
                
                _note(2, "application.grouping.ENCOUNTER_AN_ERROR_TAG");
                
            } );
            
        };

        // group list filter, some group should not show in some cases
        // @see `grouping.html`
        function groupListFilter( value, index ) {
            return value.uuid !== yvAppGroupingService.UNGROUPED_GROUP_INFO.uuid;
        }

        function isGroupEditable( groupItem ) {
            return groupItem.uuid !== yvAppGroupingService.UNGROUPED_GROUP_INFO.uuid;
        }

        function switchGroupListFilter( value, index ) {
            return $scope.showCheckAllColumn && value.uuid !== currentGroup.uuid;
        }

        function switchUsersToNewGroup( group, index ) { 
            if ( $scope.selected_list.length == 0 ) {
                _note(1, "application.grouping.NO_GROUP_USER_SELECTED_TAG");
                return;
            };
            
            var _user_list = [];
            for ( var i=0; i < $scope.selected_list.length; i++ ) {
                _user_list.push( $scope.selected_list[i].uuid );
            }

            $scope.selectedAll = false;
            $scope.selected_list = [];
            var len = $scope.team.current_list.user_list.length;
            _uncheck_all(len);

            yvAppGroupingService.switchGroup( {
                group_uuid: group.uuid,
                user_list: _user_list,
                old_group_uuid: currentGroup.uuid
            }, function( r ) {
                
                _note(0, "application.grouping.ADD_GROUP_USER_SUCCESS_TAG");
                $scope.selected_list = [];
                
                refreshGroupList( function() {
                    selectGroup( currentGroup );
                } );
                
            }, function( e ) {
                
                _note(2, "application.grouping.ENCOUNTER_AN_ERROR_TAG");
                
            } );
        };

        function selectGroup( group, index ) {
            
            currentGroup = group;
            if ( yvUtil.isNull( index ) ) {
                index = autoDetectCurrentGroupIndex( group.uuid );
            }
            
            _get_group_user_list( group.uuid );

            // MUST apply `$timeout`, or sometimes will not working well ( i.e, when `switchUsersToNewGroup` )
            $timeout( function() { highlight( "colored_group_" + String( index ) ); } );
            
        }

        function modifyGroup( index ) {
            var _group = $scope.team.group_list[index];

            //check, match one or two digit
            var _pattern = RegExp("^[0-9]{1,2}$");
            if(!_pattern.test(_group.group_visible_order_for_ppcom) || !_pattern.test(_group.start_time) || !_pattern.test(_group.end_time)) {
                _note(1, "application.grouping.MODIFY_INFO_IS_NOT_SUITABLE_TAG");
                _get_group_list();
                return;
            };

            //check if starttime bigger than endtime
            if(_group.end_time>24 || _group.start_time>_group.end_time) {
                _note(1, "application.grouping.MODIFY_INFO_IS_NOT_SUITABLE_TAG");
                _get_group_list();
                return;
            };
            
            var _request = {
                app_uuid: yvUser.get_team().uuid,
                group_uuid: _group.uuid,
                group_visible_order_for_ppcom: _group.group_visible_order_for_ppcom,
                group_route_algorithm: _group.group_route_algorithm,
                group_visible_for_ppcom: _group.checked ? 'True' : 'False',
            };
            yvAjax.update_group(_request)
                .success(function(data) {
                    //NO ORG GROUP
                    //NO PARA
                    //SUCCESS
                    $scope.team.group_list[index].visible_for_ppcom = _request.group_visible_for_ppcom;
                    if(data.error_code == 0) {
                        _note(0, "application.grouping.UPDATE_GROUP_SUCCESS_TAG");
                    } else {
                        console.log(data);
                        _note(1, "application.grouping.ENCOUNTER_AN_ERROR_TAG");
                    };
                })
                .error(function(data) {
                    console.log(data);
                    _note(2, "application.grouping.ENCOUNTER_AN_ERROR_TAG");
                });
        }

        function updateGroupInfo() {

            var groupError = checkGroupError( $scope.selected_group.group_name,
                                              $scope.selected_group.group_desc,
                                              $scope.selected_group.uuid );

            $scope.update_group_error.name_error = groupError.nameError;
            if ( groupError.nameError.length > 0 ) return;

            $scope.update_group_error.desc_error = groupError.descError;
            if ( groupError.descError.length > 0 ) return;

            //update group info
            yvAppGroupingService.updateGroup( {
                app_uuid: yvUser.get_team().uuid,
                group_uuid: $scope.selected_group.uuid,
                group_name: $scope.selected_group.group_name,
                group_desc: $scope.selected_group.group_desc,
                is_distributor: $scope.selected_group.is_distributor,
            }, function( data ) {
                jQuery( "#update_group" ).modal( 'hide' );
                if ( data.error_code == 0 ) {
                    _note( 0, "application.grouping.UPDATE_GROUP_SUCCESS_TAG" );
                    
                    refreshGroupList( function() {
                        selectGroup( currentGroup );
                    } );
                    
                } else {
                    _note( 1, "application.grouping.ENCOUNTER_AN_ERROR_TAG" );
                };
            }, function( e ) {
                _note( 2, "application.grouping.ENCOUNTER_AN_ERROR_TAG" );
            } );
        }

        //highlight to show which group selected currently
        function highlight( _id ) {
            _id = yvUtil.isNull( _id ) ? 'default_highlight' : _id;
            
            //remove border highlight first
            var _e = angular.element(".not_exist");
            for (var i=0; i<_e.length; i++) {
                angular.element(_e[i]).css('border-bottom', '1px solid #d9d9d9');
                angular.element("#default_highlight").css('border-bottom', '1px solid #d9d9d9');
            }
            angular.element("#" + _id).css('border-bottom', '3px solid red');
        }

        function autoDetectCurrentGroupIndex( groupId ) {
            
            // MUST sort `group_list` before find index to keep the same order
            // @see `html/application/grouping.html` Template Binding
            var copied = $filter('orderBy')( $scope.team.group_list, 'createtime' ),
                i;
            
            angular.forEach( copied, function( value, index ) {
                if ( i === undefined && value.uuid === groupId ) i = index;
            } );
            return i;
            
        }

        //
        // @param groupName
        // @param groupDesc
        // @param @optional groupId : used for check is `groupName` exist
        //
        function checkGroupError( groupName, groupDesc, groupId ) {

            // kee the same order as `yvAppGroupingService.ERROR`
            var nameErrorMapping = [

                '',
                $scope.lang["application.grouping.GROUP_NAME_EXISTED_TAG"],
                $scope.lang["application.grouping.NO_GROUP_NAME"], // 2
                $scope.lang["application.grouping.UNREGULAR_WORDS_TAG"],
                $scope.lang["application.grouping.WORDS_OUT_OF_LENGTH_TAG"]
                
            ],
                descErrorMapping = ( function( mapping ) {

                    var copied = angular.copy( mapping );
                    // replace default `ERROR.EMPTY` error hint
                    copied [ 2 ] = $scope.lang["application.grouping.NO_GROUP_DESC"];
                    return copied;
                    
                } )( nameErrorMapping ),
                
                nameError = nameErrorMapping [ yvAppGroupingService.checkGroupNameValid( groupId, groupName ) ],

                descError = descErrorMapping [ yvAppGroupingService.checkGroupDescValid( groupDesc ) ];

            return {
                nameError: nameError,
                descError: descError
            }
            
        }

        //////////// HELP US TO DEBUG FROM CONSOLE ///////////////////////////
        yvDebug
            .attach( 'yvAppGroupingService', yvAppGroupingService )
            .attach( 'yvAppGroupingController', {
                
                $scope: $scope,
                
                highlight: highlight,

                curGroup: function() { return currentGroup; },
                autoDetectCurrentGroupIndex: autoDetectCurrentGroupIndex,
                checkGroupError: checkGroupError
                
            } );
        
    });

angular.module("this_app")
    .controller("StatisticsOverviewCtrl", function($scope, $state, $timeout, $translate, $stateParams, yvUser, yvAjax, yvUtil, yvTransTags, yvConstants, yvLogin) {

        $scope.card_number = {};
        var _realtime_line = null;
        var _history_line = null;
        var _history_mode = "customer";
        
        var randomScalingFactor = function() {return Math.round(Math.random()*500)};

        var _draw_card = function() {
            var _c = yvAjax.ppconsole_get_overview_number(yvUser.get_team().uuid);
            _c.success(function(data) {
                if (data.error_code != 0) {
                    return;
                }
                for (var n in data.number) {
                    if (data.number.hasOwnProperty(n)) {
                        $scope.card_number[n] = data.number[n];
                    }
                }
            });
        };

        var _draw_realtime = function(_number) {
            if(_realtime_line != null) {
                _realtime_line.destroy();
                _realtime_line = null;
            }
            
            var _data = {
                labels : [],
                datasets : [{
                    fillColor : "rgba(151,187,205,0.2)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : []
                }]
            };
            
            var _target = document.getElementById("realtime-statistics");
            var ctx = _target.getContext("2d");
            
            for(var i in _number) {
                _data.labels.push(i+"");
                _data.datasets[0].data.push(_number[i+""][i+""])
            }
            
            _realtime_line = new Chart(ctx).Line(_data, {
                tooltipTemplate:"<%= value %>",
                responsive: true,
                animationStep: 40});
        };

        var _draw_history = function(_begin, _end, _number) {
            var _data = {
                labels : [],
                datasets : [{
                    fillColor : "rgba(151,187,205,0.2)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : []
                }]
            };

            var _range = moment.range(_begin, _end);
            var _label = [];
            _range.by("days", function(m) {
                _data.labels.push(m.format("MM-DD"));
                _data.datasets[0].data.push(_number[m.format("YYYY-MM-DD")]);
            });
            
            if(_history_line) {
                _history_line.destroy();
                _history_line = null;
            }

            var _target = document.getElementById("history-statistics");
            var ctx = _target.getContext("2d");
            _history_line = new Chart(ctx).Line(_data, {
                tooltipTemplate:"<%= value %>",
                responsive: true,
                animationStep: 40});
            
        };
        
        var _highlight = function($event) {
            var _l = angular.element($event.target).parent().parent().children();
            angular.forEach(_l, function(_item) {
                if (angular.element(_item).hasClass("active")) {
                    angular.element(_item).removeClass("active");
                }
            });

            if (!angular.element($event.target).parent().hasClass("active")) {
                angular.element($event.target).parent().addClass("active");
            }
        };

        var _get_realtime_number = function(mode) {
            var _f = yvAjax["ppconsole_get_real_time_" + mode + "_number"];
            var _d = _f(yvUser.get_team().uuid);
            _d.success(function(data) {
                if (data.error_code == 0) {
                    _draw_realtime(data.number);
                }
            });
            _d.error(function(data) {
                console.error(data);
            });
        };

        var _select_history_date = function(begin, end, mode) {
            var _f = yvAjax["ppconsole_get_" + mode + "_number_by_range"];
            var _d = _f(yvUser.get_team().uuid, begin.format("YYYY-MM-DD"), end.format("YYYY-MM-DD"))
            _d.success(function(data) {
                if (data.error_code == 0) {
                    _draw_history(begin, end, data.number);
                }
            });
            _d.error(function(data) {
                console.error(data);
            });
        };

        $scope.draw_realtime_message_number = function($event) {
            _highlight($event);
            _get_realtime_number("message")
        };

        $scope.draw_realtime_customer_number = function($event) {
            _highlight($event);
            _get_realtime_number("customer")
        };

        $scope.draw_realtime_service_number = function($event) {
            _highlight($event);
            _get_realtime_number("service")
        };

        $scope.draw_history_message_number = function($event) {
            _highlight($event);
            _history_mode = "message";
            var begin = moment().subtract('days', 30);
            var end = moment();
            _select_history_date(begin, end, _history_mode);
        };

        $scope.draw_history_customer_number = function($event) {
            _highlight($event);
            _history_mode = "customer";
            var begin = moment().subtract('days', 30);
            var end = moment();
            _select_history_date(begin, end, _history_mode);
        };
        
        $scope.draw_history_service_number = function($event) {
            _highlight($event);
            _history_mode = "service";
            var begin = moment().subtract('days', 30);
            var end = moment();
            _select_history_date(begin, end, _history_mode);
        };
        
        // select the date you wanna view.
        $scope.selecteddate = function(begin, end) {
            _select_history_date(begin, end, _history_mode);
        };

        var _draw = function() {
            var begin = moment().subtract('days', 30);
            var end = moment();
            _select_history_date(begin, end, "customer");
            _draw_card();
            _get_realtime_number("customer");
        };

        var _translate = function() {
            var _tag_list = [];
            for (var i in yvTransTags.en.statistics.overview) {
                var _t = "statistics.overview." + i;
                _tag_list.push(_t);
            };
            $scope.translate = function() {
                // console.log($scope.lang);
            };
            yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
        };

        var _init = function() {
            _translate();
            $scope.refresh_settings_menu();
            yvLogin.prepare( function( errorCode ) {
                _draw();
            }, { $scope: $scope, onRefresh: _draw } );
        };

        _init();
});

angular.module("this_app")
    .controller("StatisticsHistoryMessageCtrl", function($scope, $state, $timeout, $translate, $stateParams, yvAjax, yvUser, yvConstants, yvLog, yvUtil, yvTransTags, yvLogin) {

        var DEFAULT_PAGE_SIZE = 10, // default show 10 conversation in each page
            MAX_PAGE_RANGE = 5, // << [5][6][7][8][9] >> max show 5 groups

            pageSize = DEFAULT_PAGE_SIZE, 
            
            conversationList = [], // all conversations

            _logined = function() { // On logined callback
                yvLogin.prepare( function( errorCode ) {
                    asyncGetAppConversationList(onGetAppConversationListSuccessCallback, onGetAppConversationListErrorCallback);
                }, { $scope: $scope, onRefresh: function() {
                    asyncGetAppConversationList(onGetAppConversationListSuccessCallback, onGetAppConversationListErrorCallback);
                } } );
            },

            _translate = function() { // TRANSLATE IT
                var _tag_list = [];
                for (var i in yvTransTags.en.statistics.historymessages) {
                    var _t = "statistics.historymessages." + i;
                    _tag_list.push(_t);
                };

                $scope.translate = function() {};
                yvUtil.translate($scope, 'lang', _tag_list, $scope.translate);
            },
            
            sortConversationList = function(conversationList) { // sort conversations by time
                
                var getConversationTimestamp = function (conversation) {
                    return conversation.update_ts;
                };

                // sort
                conversationList && conversationList.sort(function(conversationA, conversationB) {
                    
                    var timestampA = getConversationTimestamp(conversationA),
                        timestampB = getConversationTimestamp(conversationB);

                    return timestampA >= timestampB ? -1 : 1;
                    
                });
            },

            asyncGetAppConversationList = function(successCB, errorCB) { // request server to get app_conversation_list
                // get service user all conversations                
                yvAjax.get_app_conversation_list({
                    app_uuid: yvUser.get_team().uuid
                }).success(function(response) {
                    // handle empty case

                    var conversationArray = [];
                    
                    // refresh data and update dom
                    response.list && $.each(response.list, function(index, item) {

                        var ignore = false;

                        if (!ignore) {
                            var conversation = {
                                user_uuid : item.create_user && item.create_user.uuid,
                                user_name : item.create_user && item.create_user.user_fullname,
                                user_image : item.create_user && yvUtil.iconUtil.getIcon(item.create_user.user_icon),

                                news_abbr : yvUtil.messageUtil.getMessageSummary($scope.lang,

                                                                                 item.latest_message &&
                                                                                 item.latest_message.message_subtype,
                                                                                 
                                                                                 item.latest_message &&
                                                                                 item.latest_message.body),
                                news_count : item.message_total_count,
                                news_date : yvUtil.messageUtil.getMessageFormatedDate(item.latest_message),
                                
                                con_uuid: item.uuid,
                                update_ts: yvUtil.messageUtil.getConversationUpdateTsInSeconds( item )
                            };

                            // append to array
                            conversationArray.push(conversation);
                        }

                    });

                    // sort app conversation list
                    sortConversationList(conversationArray);
                    
                    // success callback
                    if (successCB) successCB(conversationArray);
                }).error(function(error) {
                    // error callback
                    if (errorCB) errorCB(error);
                });                
            },

            onGetAppConversationListSuccessCallback = function(appConversationList) { // get conversation list success callback

                conversationList = appConversationList; // cache data 
                
                var length = conversationList.length;
                
                // refresh page dom
                create_page(length);

                // toggle page to page 1
                if (length > 0) {
                    $scope.toggle_page($scope.pages[0]);
                }
            },

            onGetHistoryMessagesSuccessCallback = function(response, user_uuid) { // on get history message success callback

                var tmp = response.data;
                var news = tmp.list;
                
                $scope.messages = [];      
                news.forEach(function(val) {
                    $scope.messages.unshift(trans_type(val, user_uuid));
                });
            },

            onRequestDataError = function(error) {
                $scope.set_flash_style("flash flash-error");
                $scope.set_update_string(error);                
            },

            onGetAppConversationListErrorCallback = function(error) { // get conversation list error callback
                onRequestDataError($scope.lang['statistics.historymessages.MESSAGE_GET_ERROR_TAG']);
            },

            onGetHistoryMessageErrorCallback = function(error) { // get single conversation messages error callback
                onRequestDataError($scope.lang['statistics.historymessages.MESSAGE_GET_ERROR_TAG']);
            },

            create_page = function(count) { // create page dom

                var groupsCount = parseInt(count / pageSize),
                    fixGroupsCount = (groupsCount * pageSize != count) ? groupsCount + 1 : groupsCount;
                
                $scope.total_pages = fixGroupsCount;
                
                if($scope.total_pages > 1) {
                    if($scope.total_pages > MAX_PAGE_RANGE) {
                        for(var i = 1; i <= MAX_PAGE_RANGE; i++) {
                            var tmp = {};
                            tmp.page_num = i;
                            tmp.is_active = false;
                            $scope.pages.push(tmp);
                        }
                    } else {
                        for(var i = 1; i <= $scope.total_pages; i++) {
                            var tmp = {};
                            tmp.page_num = i;
                            tmp.is_active = false;
                            $scope.pages.push(tmp);
                        }
                    }
                    // $scope.pages[0].is_active = true;
                } else {
                    $scope.pages.push({
                        page_num: 1,
                        is_active: false
                    });
                }
            },

            // get the message direction. if fi is equal to ui, it is dir_in.
            getMessageDirection = function(from_uuid, user_uuid) {                
                if(from_uuid == user_uuid) {
                    return 'DIR_IN';
                }
                return 'DIR_OUT';
            },

            // when date selected, show the conversations under the date.
            showConversationsWithSelectedDate = function(targetDate) {

                var _ans_conversationList = [];

                conversationList.forEach(function(val){
                    var _conversationDate = val.news_date;
                    if(_conversationDate.split()[0] == targetDate) {
                        _ans_conversationList.push(val);
                    }
                });


                $timeout(function() {
                    $scope.news_list = _ans_conversationList;
                });                

            },
        
            //get matched conversation with target messages.
            getMatchedConversation = function(target) {
                return [];
            },

            trans_type = function(src, user_uuid) {         // trans to the proper type to show in the preview window

                var _user_icon = null;
                if(src.from_type == "AP"){
                    _user_icon = yvUtil.iconUtil.getIcon();
                }else {
                    _user_icon = yvUtil.iconUtil.getIcon(src.from_user.user_icon);
                };
                var messageJsonBody = JSON.parse(src.message_body);
                
                var previewMessage = {
                    conversation_uuid: messageJsonBody.ci,
                    from_uuid: messageJsonBody.fi,
                    message_direction: getMessageDirection(src.from_uuid, user_uuid),
                    message_duration: null,
                    message_file: null,
                    message_id: messageJsonBody.id,
                    message_mime: null,
                    message_name: null,
                    message_size: null,
                    message_body: src.body,
                    message_status: 'RECV_NEW',
                    message_subtype: messageJsonBody.ms,
                    message_thumbnail: null,
                    message_timestamp: messageJsonBody.ts,
                    show_profile: false,
                    show_timestamp: true,
                    task_uuid: null,
                    to_uuid: messageJsonBody.ti,
                    to_type: messageJsonBody.tt,
                    message_type: 'NOTI',
                    conversation_type: src.conversation_type,
                    from_user: src.from_user,
                    user_icon: _user_icon,
                };

                return previewMessage;
            };
        
        // this used to be a container of messages for a certain news.
        $scope.messages = [];

        // get the news list of current page.
        $scope.news_list = [];

        // current page num.
        $scope.cur_page = -1;

        // each page of pagination will be an item.
        $scope.pages = [];

        // return the conversation with search.
        $scope.search_conversations = function() {
            if($scope.search_target == "") return;
            var _ans = getMatchedConversation($scope.search_target);
            $scope.search_target = "";
            if(_ans.length == 0) {
                alert('没有任何匹配的结果');
                return;
            }

            $timeout(function() {
                $scope.news_list = _ans;
            });
        };

        // return the conversations with selected date.
        $scope.select_date = function(begin, end) {
            var _target_date = begin.format('YYYY-MM-DD');
            showConversationsWithSelectedDate(_target_date);
        };

        // show the preview window.
        $scope.show_pre_window = function(item) {
            $scope.messages = []; // clear cached messages before show
            
            var con_uuid = item.con_uuid;
            var user_uuid = item.user_uuid;

            yvAjax.get_history_messages({
                'conversation_uuid': con_uuid,
                'page_offset': -1                    
            }).then(function(response) {
                onGetHistoryMessagesSuccessCallback(response, user_uuid);
            }, //success
                    onGetHistoryMessageErrorCallback); //error
        };

        // toggle to the clicked page.
        $scope.toggle_page = function(item) {
            
            // if is cur_page, return.
            if (item.page_num == $scope.cur_page) {
                return;
            }

            // get current page's data
            var curPageConversationsArray = conversationList.slice((item.page_num - 1) * pageSize,
                                                                   item.page_num * pageSize);
            $scope.news_list = curPageConversationsArray;

            // active current page's class
            $scope.pages.forEach(function(val) {
                val.is_active = false;
            });
            item.is_active = true;
            $scope.cur_page = item.page_num;

        };

        // get pre pages of the pagination.
        $scope.pre_pages = function() {
            var st_page = $scope.pages[0]['page_num'];
            if(st_page != 1) {
                var num = 0;
                if(st_page >= MAX_PAGE_RANGE) {
                    num = MAX_PAGE_RANGE;
                } else {
                    num = st_page - 1;
                }

                for(var i = 1; i <= num; i++) {
                    var tmp = {};
                    tmp.page_num = st_page - i;
                    tmp.is_active = false;
                    //insert to pre pages.
                    $scope.pages.unshift(tmp);
                }

                // slice with first MAX_PAGE_RANGE.
                $scope.pages = $scope.pages.slice(0, MAX_PAGE_RANGE);

                // toggle to the last page.
                $scope.toggle_page($scope.pages[$scope.pages.length-1]);
            }
        };

        // get back pages of the pagination.
        $scope.back_pages = function() {
            var end_page = $scope.pages[$scope.pages.length-1]['page_num'];
            if(end_page != $scope.total_pages) {
                var num = 0;
                var len = $scope.total_pages - end_page;
                if(len >= MAX_PAGE_RANGE) {
                    num = MAX_PAGE_RANGE;
                } else {
                    num = len;
                }

                $scope.pages = [];
                for (var i = 1; i <= num; i++) {
                    var tmp = {};
                    tmp.page_num = end_page + i;
                    tmp.is_active = false;
                    // $scope.pages.shift();
                    $scope.pages.push(tmp);
                }
                // toggle to the first page.
                $scope.toggle_page($scope.pages[0]);
            }
        };
        
        var _init = function() {
            $scope.refresh_settings_menu();
            _translate();
            _logined();
        };

        _init();


    });

angular.module("this_app")
    .controller("ErrorCtrl", function() {
        
    }); // end 404 ctrl

angular.module("this_app")
    .directive("focusMe", function() {
        return {
            restrict: "A",
            
            link: function($scope, $element, $attrs) {
                $element[0].focus();
            },
        };
    })
;

angular.module("this_app")
    .directive("uniform", function($timeout) {
        return {
            restrict: "A",
            require: 'ngModel',
            
            link: function($scope, $element, $attrs, ngModel) {
                $element.uniform({userID: false});
                $scope.$watch(function() {
                    return ngModel.$modelValue;
                }, function() {
                    $timeout(jQuery.uniform.update, 0);
                });
            },
        };
    })
;


angular.module("this_app")
    .directive("slimScroll", function() {
        "use strict";
        
        return {
            restrict: "A",
            
            link: function($scope, $element, $attrs) {
                var off = [];
                var option = {};

                var refresh = function() {
                    if ($attrs.slimScroll) {
                        option = $scope.$eval($attrs.slimScroll);
                    }

                    $($element).slimScroll({destroy: true});
                    $($element).slimScroll(option);
                };

                var destructor = function() {
                    angular.forEach(off, function(_unregister) {
                        _unregister();
                    });
                    off = [];
                };

                var init = function() {
                    refresh();
                    off.push($scope.$watchCollection($attrs.slimScroll, refresh));                             
                };

                off.push($scope.$on("$destroy", destructor));
                init();
                
            }, //end link
        };
    })
;

angular.module("this_app")
    .directive("yvDataTable", function ($window, $state, $translate, $compile, $timeout, $rootScope) {

        function get_datatable_language(lang) {
            var datatable_langs = {
                'zh-CN': {
                    "sEmptyTable":     "表中没有数据",
                    "sInfo":           "显示 _START_ 到 _END_ ，共  _TOTAL_ 条",
                    "sInfoEmpty":      "显示 0 到 0 ，共 0 条",
                    "sInfoFiltered":   "(已筛选，共 _MAX_ 条)",
                    "sInfoPostFix":    "",
                    "sInfoThousands":  ",",
                    "sLengthMenu":     "显示 _MENU_ 条",
                    "lengthMenu":     "显示 _MENU_ 条",
                    "sLoadingRecords": "加载中...",
                    "sProcessing":     "处理中...",
                    "sSearch":         "搜索：",
                    "sZeroRecords":    "未找到匹配的记录",
                    "oPaginate": {
                        "sFirst":      "首页",
                        "sLast":       "末页",
                        "sNnext":       "后页",
                        "sPrevious":   "前页"
                    },
                    "oAria": {
                        "sSortAscending":  ": 升序",
                        "sSortDescending": ": 降序"
                    }
                },
                'en': {
                    "sEmptyTable":     "No data available in table",
                    "sInfo":           "Showing _START_ to _END_ of _TOTAL_ entries",
                    "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
                    "sInfoFiltered":   "(filtered from _MAX_ total entries)",
                    "sInfoPostFix":    "",
                    "sInfoThousands":  ",",
                    "sLengthMenu":     "Show _MENU_ entries",
                    "lengthMenu":     "Show _MENU_ entries",
                    "sLoadingRecords": "Loading...",
                    "sProcessing":     "Processing...",
                    "sSearch":         "Search:",
                    "sZeroRecords":    "No matching records found",
                    "oPaginate": {
                        "sFirst":      "First",
                        "sLast":       "Last",
                        "sNext":       "Next",
                        "sPrevious":   "Previous"
                    },
                    "oAria": {
                        "sSortAscending":  ": activate to sort column ascending",
                        "sSortDescending": ": activate to sort column descending"
                    }
                }
            };

            if (lang != 'zh-CN')
                lang = 'en';

            return datatable_langs[lang];
        }; 

        return {
            restrict: 'A',
            scope: {
                dtOptions: '=',
                dtScope: "=",
                dtOnSelect: "&",
            },
            
            link: function ($scope, $element, $attrs) {
                // datatable user must set the ajax to get data

                if (!$scope.dtOptions || !$scope.dtOptions.ajax) {
                    console.log("DataTables consumer not set dtOptions");
                    return;
                };
                
                var language = get_datatable_language($translate.use());

    	        var options = {
                    createdRow: function(row, data, dataIndex) {
                        $compile(angular.element(row).contents())($scope);
                    },
                    
                    processing: true,
                    searching: true,
                    paging: true,
                    pageLength: 10,
                    language: language,
                    pagingType: "bootstrap_full_number",
                    lengthMenu: [5, 10, 25, 50, 75, 100],

                    dom: "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
                    
                };

                angular.extend(options, $scope.dtOptions);
                $scope.dtObject = $element.dataTable(options);
    
                $('select').select2({ minimumResultsForSearch: Infinity });

                var _onTranslate = function() {
                    if ($scope.dtObject) {
                        var language = get_datatable_language($translate.use());
                        var settings = $scope.dtObject.fnSettings();
                        $.extend(true, settings.oLanguage, language);

                        //console.debug($scope.dtObject.fnSettings());
                        //$scope.dtObject.fnDestroy(true);
                        //options.language = language;
                        //$scope.dtObject = $element.dataTable(options);
                        $scope.dtObject.fnDraw(true);
                        console.debug('on trans', $state);
                        //$state.reload($state.current.name);
                        /*
                        $timeout(function() {
                            //$state.go('.', {}, { reload: true });
                            $window.location.reload();
                            console.debug('1');
                        });
                        */
                        /*
                        $timeout(function () {
                            $state.go('.', {}, { reload: true });
                        }, 100);
                        */
                        //$scope.dtObject.api().draw();
                    }
                };
                $rootScope.$on('$translateChangeSuccess', _onTranslate);
            },

            
            controller: function($scope, $element, $attrs, $transclude, $timeout) {
            console.debug('xxxxxx');

                $scope.dtScope = $scope;
                $scope.dtSelected = [];

                if (!$scope.dtOptions || !$scope.dtOptions.ajax) {
                    console.log("DataTables consumer not set dtOptions");
                    return;
                };

                
                // clear the selected when redraw
                $scope.dtOptions.drawCallback = function() {
                    $timeout(function() {
                        $scope.dtSelected.length = 0;
                    });
                    var _c = $element.find('input[type="checkbox"]');
                    if (_c) {
                        _c.uniform();
                    }
                    //$('select').select2();
                };

                var _whatSelected = function() {
                    // console.log($scope.dtSelected);
                };
                
                // maybe checkbox
                $element.on('click', 'tbody > tr', function() {
                    if ($scope.dtOptions.noSelect) {
                        return;
                    }

                    if ($scope.dtOnSelect()) {
                        $scope.dtOnSelect()($(this).attr("id"));
                    }

                    var _c = $('input[type="checkbox"]', $(this));
                    
                    if($(this).hasClass("selected")) {
                        $(this).removeClass("selected");
                        if (_c) {
                            _c.attr("checked", false);
                        }
                        var _id = $(this).attr("id");
                        var _in = $.inArray(_id, $scope.dtSelected);
                        if (_in >= 0) {
                            $scope.dtSelected.splice(_in, 1);
                        }
                        
                    } else {
                        if ($scope.dtOptions.singleSelection) {
                            $('tbody > tr.selected', $($element)).removeClass("selected");
                            $scope.dtSelected.length = 0;
                        }
                        
                        $(this).addClass("selected");
                        if (_c) {
                            _c.attr("checked", true);
                        }
                        $scope.dtSelected.push($(this).attr("id"));
                    }

                    // set the group unchecked
                    if (_c) {
                        $('thead > tr > th input[type="checkbox"]', $element).attr("checked", false);
                        $element.find('input[type="checkbox"]').uniform();
                    }
                    
                    _whatSelected();
                });

                // if header then body
                $element.on('click', 'thead > tr > th input[type="checkbox"]', function() {
                    if ($scope.dtOptions.noSelect) {
                        return;
                    }
                    
                    var _v = $(this).is(":checked");
                    $('tbody > tr > td input[type="checkbox"]', $($element)).attr("checked", _v);
                    if (_v) {
                        
                        var _rs = $('tbody > tr', $element);
                        _rs.addClass("selected");
                        _rs.each(function(_i) {
                            $scope.dtSelected.push($(this).attr("id"));
                        });
                    } else {
                        $('tbody > tr', $($element)).removeClass("selected");
                        $scope.dtSelected.length = 0;
                    }
                    
                    $element.find('input[type="checkbox"]').uniform();
                    _whatSelected();
                });

            },
        };
    });

angular.module("this_app")
    .directive("dateRange", function($translate, $rootScope) {
        return {
            restrict: "A",

            scope: {
                onApply: "&",
                hasPredefinedRanges: "=",
                isSingle: "=",
            },

            link: function($scope, $element, $attrs) {
                var ontranslate=function(){
                    var trans_from_array=["calendar.TODAY_TAG","calendar.YESTERDAY_TAG","calendar.LAST_7_DAYS_TAG","calendar.LAST_30_DAYS_TAG","calendar.THIS_MONTH_TAG","calendar.LAST_MONTH_TAG","calendar.APPLY_LABEL_TAG","calendar.CANCEL_LABEL_TAG","calendar.FROM_LABEL_TAG","calendar.TO_LABEL_TAG","calendar.CUSTOM_RANGE_LABEL_TAG","calendar.monthname.JANUARY_TAG","calendar.monthname.FEBRUARY_TAG","calendar.monthname.MARCH_TAG","calendar.monthname.APRIL_TAG","calendar.monthname.MAY_TAG","calendar.monthname.JUNE_TAG","calendar.monthname.JULY_TAG","calendar.monthname.AUGUST_TAG","calendar.monthname.SEPTEMBER_TAG","calendar.monthname.OCTOBER_TAG","calendar.monthname.NOVEMBER_TAG","calendar.monthname.DECEMBER_TAG"];
                    $translate(trans_from_array).then(function (translation) {
                        var curr_language_name=$translate.use();
                        var trans_to_obj = translation;

                        var rangesObj = null;
                        if($scope.hasPredefinedRanges == true) {
                            rangesObj={};
                            rangesObj[trans_to_obj["calendar.TODAY_TAG"]]=[moment(), moment()];
                            rangesObj[trans_to_obj["calendar.YESTERDAY_TAG"]]=[moment().subtract('days', 1), moment().subtract('days', 1)];
                            rangesObj[trans_to_obj["calendar.LAST_7_DAYS_TAG"]]=[moment().subtract('days', 6), moment()];
                            rangesObj[trans_to_obj["calendar.LAST_30_DAYS_TAG"]]=[moment().subtract('days', 29), moment()];

                            rangesObj[trans_to_obj["calendar.THIS_MONTH_TAG"]]=[moment().startOf('month'), moment().endOf('month')];
                            rangesObj[trans_to_obj["calendar.LAST_MONTH_TAG"]]=[moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')];
                        }

                        /*按钮文本定义*/
                        var localeObj={};
                        localeObj["applyLabel"]=trans_to_obj["calendar.APPLY_LABEL_TAG"];
                        localeObj["cancelLabel"]=trans_to_obj["calendar.CANCEL_LABEL_TAG"];
                        localeObj["fromLabel"]=trans_to_obj["calendar.FROM_LABEL_TAG"];
                        localeObj["toLabel"]=trans_to_obj["calendar.TO_LABEL_TAG"];
                        localeObj["customRangeLabel"]=trans_to_obj["calendar.CUSTOM_RANGE_LABEL_TAG"];
                        localeObj["daysOfWeek"]=['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                        var monthNamesArray=[];
                        monthNamesArray[0]=trans_to_obj["calendar.monthname.JANUARY_TAG"];
                        monthNamesArray[1]=trans_to_obj["calendar.monthname.FEBRUARY_TAG"];
                        monthNamesArray[2]=trans_to_obj["calendar.monthname.MARCH_TAG"];
                        monthNamesArray[3]=trans_to_obj["calendar.monthname.APRIL_TAG"];
                        monthNamesArray[4]=trans_to_obj["calendar.monthname.MAY_TAG"];
                        monthNamesArray[5]=trans_to_obj["calendar.monthname.JUNE_TAG"];
                        monthNamesArray[6]=trans_to_obj["calendar.monthname.JULY_TAG"];
                        monthNamesArray[7]=trans_to_obj["calendar.monthname.AUGUST_TAG"];
                        monthNamesArray[8]=trans_to_obj["calendar.monthname.SEPTEMBER_TAG"];
                        monthNamesArray[9]=trans_to_obj["calendar.monthname.OCTOBER_TAG"];
                        monthNamesArray[10]=trans_to_obj["calendar.monthname.NOVEMBER_TAG"];
                        monthNamesArray[11]=trans_to_obj["calendar.monthname.DECEMBER_TAG"];
                        localeObj["monthNames"]=monthNamesArray;
                        localeObj["firstDay"]=1;

                        // $element.daterangepicker({
                        //     singleDatePicker: $scope.isSingle,
                        //     opens: 'left',
                        //     language: 'ru',
                        //     startDate: moment().subtract('days', 29),
                        //     endDate: moment(),
                        //     minDate: '01/01/2012',
                        //     maxDate: '12/31/2014',
                        //     dateLimit: {
                        //         days: 60
                        //     },
                        //     showDropdowns: false,
                        //     showWeekNumbers: true,
                        //     timePicker: false,
                        //     timePickerIncrement: 1,
                        //     timePicker12Hour: true,
                        //
                        //     ranges:rangesObj,
                        //
                        //     buttonClasses: ['btn btn-sm'],
                        //     applyClass: ' blue',
                        //     cancelClass: 'default',
                        //     format: 'MM/DD/YYYY',
                        //     separator: ' to ',
                        //     locale:localeObj,
                        // }, function (start, end) {
                        //     start.locale(curr_language_name);
                        //     end.locale(curr_language_name);
                        //     $element.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                        //     // $scope.onApply()(start, end);
                        //     $scope.onApply();
                        // });

                        $element.daterangepicker({
                            linkedCalendars: true,
                            opens: 'left',
                            minDays: 2,
                            maxDays: 30,
                            // start from 1-31 = 30
                            singleDatePicker: $scope.isSingle,
                            startDate: $scope.isSingle ? moment() :moment().subtract('days', 30),
                            endDate: moment(),
                            format: 'YYYY/MM/DD',
                            dateLimit: {
                                days: 30
                            },
                        }, function(start, end) {
                            start.locale(curr_language_name);
                            end.locale(curr_language_name);
                            $scope.onApply()(start, end);
                        });

                    });
                };
                $rootScope.$on('$translateChangeSuccess', ontranslate);
                ontranslate();
            },
        };
    })
;

//
// @description
// < a ng-href="http://www.baidu.com" /> : => open `http://www.baidu.com` by replace current one
// < a ng-href="http://www.baidu.com" yv-href-blank /> : => open `http://www.baidu.com` in new window
//
( function() {

    angular.module( "this_app" ).directive( "yvHrefBlank" , href );

    function href() {
        
        return {
            
            restrict: 'A', // only matches attribute name
            
            link: function( scope, element, attrs ) {
                element.attr( "target", "_blank" );
            }
            
        };
        
    }
    
} )();

angular.module("this_app")
    .directive("yvUserinfosettings", function($compile, $parse, $timeout, $http, yvConstants) {
        return {
            restrict: "E",
            replace: "true",
            
            templateUrl: yvConstants.PORTAL_STATIC_PREFIX + "html/directive/userinfosettings.html",

            scope: {
            },

            link: function($scope, $element, $attrs) {
           
            },
            
            controller: function($scope, $rootScope) {

                // if you wanna use the directive:
                // broadcast an event named show_userinfo_modal,
                // and give the user uuid.    
                var _ajax_request = function(_method, _url, _data) {
                    return $http({
                        method: _method,
                        cache: false,
                        url: _url,
                        data: !_data ? {} : _data,
                    });
                },    

                // not finished yet.
                get_user_info = function(data) {
                    return _ajax_request("POST", "", data);
                },

                // success callback of get_user_info.
                getUserInfoSuccessCB = function(response) {
                    var info_data = response.data;
                    
                    $timeout(function() {
                        $scope.userinfo = {
                            name     : info_data.username,
                            tel      : info_data.usertel,
                            qq       : info_data.userqq,
                            other    : info_data.other,
                        };
                    });
                },

                // error callback of get_user_info
                getUserInfoErrorCB = function(data) {
                    alert('获取用户信息失败');
                },

                // not finished yet.
                set_user_info = function(data) {
                    return _ajax_request("POST", "", data);
                },

                // success callback of set_user_info.                
                setUserInfoSuccessCB = function(response) {
                    alert('保存成功!');
                    closemodal();
                },

                // error callback of set_user_info.                
                setUserInfoErrorCB = function(data) {
                    alert('保存失败，请稍后重试');
                };

                // reset each field of form.
                resetForm = function() {
                    for(i in $scope.userinfo) $scope.userinfo='';
                },

                // close the modal.
                closemodal = function() {
                    $timeout(function() {
                        jQuery('#set-user-info').modal('hide');                                                                
                    });
                },
               
                $scope.sub_user_info = function() {
                    var data = {
                        uuid    : $scope.uuid,
                        username: $scope.userinfo.name,
                        usertel : $scope.userinfo.tel,
                        userqq  : $scope.userinfo.qq,
                        other   : $scope.userinfo.other,
                    };

                    set_user_info(data)
                        .success(setUserInfoSuccessCB)
                        .error(setUserInfoErrorCB);
                };

                // recieve the event to show the modal.
                $scope.$on('show_userinfo_modal', function(event, uuid) {
                    
                    $timeout(function() {
                        jQuery('#set-user-info').modal('show');                                        
                        resetForm();
                    });

                    get_user_info({
                        user_uuid: $scope.uuid
                    }).success(getUserInfoSuccessCB)
                      .error(getUserInfoErrorCB);  

                });
            },

        };
        
    });

angular.module("this_app")
    .directive("clipboard", function() {
        return {
            restrict: "A",
                        
            link: function($element) {
                console.log("entering....");
                var _id = $($element).attr("id");
                if(!_id) {
                    $($element).attr("id", 'clipboard' + Date.now());
                    _id = $($element).attr("id");
                };

                var client = new ZeroClipboard('#' + _id);

                client.on("ready", function( readyEvent ) {
                    console.log("begin copy");
                    client.on("success", function( event ) {
                        console.log("ok");
                    });
                    client.on("aftercopy", function( event ) {
                        console.log("end copy....");
                        //do something
                    });
                });
            },
        };
    })
;


angular.module("this_app")
    .directive("yvcolorpicker", ["$timeout", function($timeout) {
        return {
            restrict: "A",
            require: 'ngModel',
            
            link: function(scope, element, attrs, model) {

                element.ColorPickerSliders({
                    //size: "sm",
                    //previewontriggerelement: false,
                    placement: "right",
                    color: model.$modelValue,
                    previewformat: "hex",
                    swatches: true,
                    sliders: true,
                    hsvpanel: true,
                    onchange: function(container, color) {
                        scope.$apply(function() {
                            model.$setViewValue(color.tiny.toHexString());
                        });
                    },
                });
                
                model.$render = function() {
                    element.val(model.$modelValue);
                    element.change();                
                };
            },
            
        };
    }])
;


angular.module("this_app").
    directive("yvMessage", [
        "$rootScope",
        "$timeout",
        "yvConstants",
        "yvType",
        "yvUtil",
        function ($rootScope, $timeout, yvConstants, yvType, yvUtil) {

            function _link($scope, $element, $attrs) {

                $scope.isFileMessage = function (message) {
                    return yvType.is_file(message);
                };

                $scope.isVideoMessage = function (message) {
                    return yvType.is_video(message);
                };

                $scope.isGPSLocationMessage = function (message) {
                    return yvType.is_gps_location(message);
                };

                $scope.isTextMessage = function (message) {
                    return yvType.is_text(message);
                };

                $scope.isTxtMessage = function (message) {
                    return yvType.is_txt(message);
                };

                $scope.isImageMessage = function (message) {
                    return yvType.is_image(message);
                };

                $scope.isAudioMessage = function (message) {
                    return yvType.is_audio(message);
                };

                $scope.isCardMessage = function (message) {
                    return yvType.is_single_card(message) || yvType.is_multiple_card(message);
                };

                $scope.viewImage = function (message) {

                };

                $scope.viewLocation = function (message) {

                };

                $scope.viewCard = function (card) {
                    // fixme: broadcast a cardModal show event
                };

                $scope.showAlertIcon = function (message) {
                    if (yvType.is_right(message) && message.message_status === yvConstants.SEND_STATUS.SEND_ERROR) {
                        return true;
                    }
                    return false;
                };

                $scope.showMouth = function (message) {
                    if (yvType.is_image(message) || yvType.is_gps_location(message)) {
                        return false;
                    }
                    return true;
                };

                $scope.viewProfile = function (message) {
                    $scope.message.show_profile = true;
                };

                $scope.getUserIcon = function (message) {
                    return message.user_icon;
                };

                $scope.getMessageClass = function (message) {
                    var _class = "";

                    if (yvType.is_left(message)) {
                        _class += " yv-left ";
                    } else if (yvType.is_right(message)) {
                        _class += " yv-right ";
                    }

                    _class += " yv-pc ";
                    return _class;
                };

                //if the interval chat message is more than one minute
                $scope.shouldShowTimestamp = function (message) {
                    var last_message = $scope.lastMessage;
                    if(!last_message) {
                        return true;
                    }
                    var last_message_timestamp = last_message.message_timestamp;
                    var this_message_timestamp = message.message_timestamp;
                    var times = this_message_timestamp - last_message_timestamp;
                    if(times>60) {
                        return true;
                    }
                    return false;
                };

                $scope.getTimestamp = function (message) {
                    var _timestamp = message.message_timestamp*1000;
                    return yvUtil.formateTimestamp(_timestamp);
                };

                $scope.getFontStyle = function () {
                    return {};
                };


                $scope.$on("$destroy", function () {
                    $rootScope.$broadcast("event:stop-play-audio");
                });

                function _init() {
                    $scope.message.show_profile = false;
                }

                _init();
            }

            return {
                restrict: "E",
                scope: {
                    message: "=",
                    isLast: "=",
                    lastMessage: "=",
                },
                link: _link,
                // controller: "MessageCtrl",
                templateUrl: yvConstants.STATIC_PREFIX + "html/directive/message.html"
            };

        }]);

angular.module("this_app").directive("yvTextMessage", [function () {

    function link($scope, $element, $attrs) {
        $element.html($scope.message.message_body);
    }

    return {
        restrict: "E",
        replace: true,
        scope: {
            message: "="
        },
        link: link,
        template: "<pre class='yv-chat-text'></pre>"
    };

}]);

angular.module("this_app").directive("yvTxtMessage", [
    "yvUtil",
    "yvLog",
    function (yvUtil, yvLog) {

    function link($scope, $element, $attrs) {

        function init(message) {
            
            var fileDownloadUrl = yvUtil.fileUtil.getFileDownloadUrl(JSON.parse(message.message_body).fid);

            yvUtil.fileUtil.getRemoteTextFileContent(fileDownloadUrl, function(text) {
                $element.text(text);    
            }, function(error) {
                $element.text(error);
            });

        }
        
        init($scope.message);
    }
    
    return {
        restrict: "E",
        replace: true,
        scope: {
            message: "="
        },
        link: link,
        template: "<pre class='yv-chat-text'></pre>"
    };
    
}]);

angular.module("this_app").directive("yvImageMessage", [
    "yvUtil",
    "yvLog",
    function(yvUtil, yvLog) {

        function link($scope, $element, $attrs) {
            
            function init (message) {

                var imageMessageBody = message.message_body,
                    icon = yvUtil.iconUtil.getIcon(JSON.parse(imageMessageBody).orig); // or thum
                
                $element.find("img").attr('src', icon);
                
            }

            init($scope.message);
        }

        return {
            restrict: 'E',
            replace: true,
            scope: {
                message: "="
            },
            link: link,
            template: '<div class="yv-chat-image"><img></div>'
        };

    }]);

angular.module("this_app").directive("yvFileMessage", [
    "$translate",
    "yvUtil",
    "yvLog",
    function ($translate, yvUtil, yvLog) {

        function link($scope, $element, $attrs) {
            var jsonBody = JSON.parse($scope.message.message_body);
            var childElement = $element.find(".yv-chat-file");

            $translate(['statistics.historymessages.MESSAGE_FILE_TYPE_TAG',
                        'statistics.historymessages.MESSAGE_IMAGE_TYPE_TAG',
                        'statistics.historymessages.MESSAGE_TXT_TYPE_TAG'])
                .then(function(translatedObj) {

                    // $element.text(yvUtil.messageUtil.getMessageSummary(translatedObj,
                    childElement.text(yvUtil.messageUtil.getMessageSummary(translatedObj,
                    'FILE',
                    $scope.message.message_body))
                        .attr('href', yvUtil.fileUtil.getFileDownloadUrl(jsonBody.fid, jsonBody.name));                          
                    
                });
            
        }
        
        return {
            restrict: "E",
            replace: true,
            scope: {
                message: "=",
                lang: "="
            },
            link: link,        
            template: "<div class='yv-chat-div'><a class='yv-chat-file'></a></div>"
        };
        
    }]);

angular.element(document).ready(function() {     
    angular.bootstrap(document, ["this_app"]);
});
