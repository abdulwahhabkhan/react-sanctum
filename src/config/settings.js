
const title = process.env.REACT_APP_APPLICATION_NAME;
const settings = {
    APPNAME : title,
    DATEFROMAT: 'MMM Do YYYY',
    FULLDATEFROMAT: 'dd Do MMMM YYYY, hh:mmA',
    FORMDATEFROMAT: 'dd/MM/yyyy',
    FORM_DATE_FROMAT: 'DD/MM/YYYY',
    TIMEFROMAT: 'hh:mm a',
    FROMFUllFROMAT: 'MM/DD/YYYY hh:mm a',
    hideSideBar: false,
    sidebarMinified: localStorage.getItem('sidebar_minified') ? (localStorage.getItem('sidebar_minified') === 'true')  : false,
    setTitle: (t)=>{
        document.title = t ? t + ' - '+ title :  title;
    },
    NOTIFY: {
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        type: 'default',
        dismiss: {
            duration:  5000, onScreen: true, showIcon: true, pauseOnHover: true
        }
    }
}


export default settings;
