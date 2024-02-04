export type NavigationTypes = {
  navigation: {
    darkMode: boolean;
    searching: boolean;
    mobileMenu: boolean;
  };
};

export type EventsTypes = {
  events: {
    eventsCardsDisplay: boolean;
    favoriteButtonChecked: boolean;
    roomsData: {
      id: string;
      title: string;
      date: string;
      city: string;
      country: string;
      gender: 'male' | 'female' | 'both';
      spots: number;
      taken_spots: number;
      min_age: number;
      max_age: number;
      tags: string[];
      price: number;
      currency: string; // Możesz dostosować to do innych walut
      favorite: boolean;
    };
  };
};

export type LoginTypes = {
  login: {
    isSignin: boolean;
  };
};
