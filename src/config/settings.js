
const title = process.env.REACT_APP_APPLICATION_NAME;
const settings = {
    APPNAME : title,
    DATE_FORMAT: 'MMM Do YYYY',
    FULL_DATE_FORMAT: 'dd Do MMMM YYYY, hh:mmA',
    FORM_DATE_FORMAT: 'DD/MM/YYYY',
    TIME_FORMAT: 'hh:mm a',
    FROM_FUll_FORMAT: 'MM/DD/YYYY hh:mm a',
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
