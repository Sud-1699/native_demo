export class AppConstant {
    public static readonly debug: boolean = true;

    public static readonly pageTitle = {
        dashboard: "Dashboard",
        myAgenda: "My Agenda",
        myOfficeAgenda: "My Office Agenda",
        mySubActivities: "My Sub-Activities",
        myOfficeSubActivities: "My Office Sub-Activities",
        myTE: "My T&E",
        myOfficeTE: "My Office T&E",
    }

    public static readonly pagePath = {
        myAgendaPath: "/my-agenda",
        myOffcAgendaPath: "my-office-agenda"
    }

    public static readonly gdprLink = {
        capacitor: "http://capacitorjs.com/"
    }

    public static readonly keys = {
        rememberMe: "rememberMe",
        userDetails: "userDetails",
    }

    public static readonly platforms = {
        ios: "ios",
        android: "android",
        web: "web"
    }
}