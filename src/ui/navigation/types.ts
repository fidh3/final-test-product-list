export enum Page {
    Home = 'Home',
    Details = 'Details',
    TabNavigator = 'TabNavigator'
  }
  export type MainParamList = {
    [Page.TabNavigator]: undefined;
    [Page.Home]: undefined;
    [Page.Details]: {
      item: string;
    };
  };
  export type TabParams = {
    [Page.Home]: undefined;
    [Page.Details]: {
      item: string;
    };
  };