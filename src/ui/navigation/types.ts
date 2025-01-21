export enum Page {
    Home = 'Home',
    Details = 'Details',
    Saved = 'Saved',
    TabNavigator = 'TabNavigator'
  }
  export type MainParamList = {
    [Page.TabNavigator]: undefined;
    [Page.Home]: undefined;
    [Page.Saved]: {
      item: string
    };
    [Page.Details]: {
      item: string;
    };
  };
  export type TabParams = {
    [Page.Home]: undefined;
    [Page.Saved]: {
      item: string;
    };
  };