import axios from 'axios';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {any} from './../../node_modules/@types/prop-types/index.d';
import useAppDispatch, {useAppSelector} from './../app/hooks';
/** @format */

import {createSlice} from '@reduxjs/toolkit';

import APIS, {BASE_URL_2} from '../APIs/index';

import type {PayloadAction} from '@reduxjs/toolkit';

// import type {any} from '../app/store';
import APIs from '../APIs/index';

export interface AppState {
  tenderArchiveData: Array<any>;
  tenderData: Array<any>;
  chatArray: Array<any>;

  careerData: Array<any>;
  careerArchiveData: Array<any>;

  eventData: Array<any>;
  eventArchiveData: Array<any>;

  orderData: Array<any>;
  orderArchiveData: Array<any>;

  isLoading: boolean;
  isShow: boolean;
  isPopupOpened: boolean;
  errors: any;
  answers: any;
  pagesDetails: Array<any>;
  accomodationBg: boolean;
  cities: Array<any>;
  destinationData: any;
  properties: Array<any>;
  selectedPageId: null;
  bannerData: Array<any>;
  sectionsData: Array<any>;
  innerPageData: any;
  attractionsData: Array<any>;
  displayProperties: Array<any>;
  filteredProperties: Array<any>;
  destinationCity: string;
  bhopalProperties: Array<any>;
  propertiesCity: string;
  initExperience: any;
  eventsFocus: boolean;
  footerSelectPageName: string;
  isContactModalOpen: boolean;
  loginResponse: any;
  enquiryResponse: null;
  propertiesByCity: Array<any>;
  propertiesByCityName: Array<any>;
  propertyByName: any;
  isUserSuccess: Array<any>;
  pathName: null;
  destinationPathName: null;
  selectedPropertyName: null;
  isWellnessClose: null;
  getCitiesName: Array<any>;
  accomodationView: string;
  clickedItemPageID: string;
  packageItem: any;
  chatbotFirstReply: Array<any>;
  isPoppedUp: boolean;
  chatbotReply: Array<any>;
}

const initialState: AppState = {
  tenderArchiveData: [],
  tenderData: [],
  chatArray: [],

  careerData: [],
  careerArchiveData: [],

  eventData: [],
  eventArchiveData: [],

  orderData: [],
  orderArchiveData: [],

  isLoading: false,
  isShow: true,
  isPopupOpened: false,
  errors: {},
  answers: {},
  pagesDetails: [],
  accomodationBg: false,
  cities: [],
  destinationData: {},
  properties: [],
  selectedPageId: null,
  bannerData: [],
  sectionsData: [],
  innerPageData: {},
  attractionsData: [],
  displayProperties: [],
  filteredProperties: [],
  destinationCity: '',
  bhopalProperties: [],
  propertiesCity: 'Bhopal',
  initExperience: {},
  eventsFocus: false,
  footerSelectPageName: '',
  isContactModalOpen: false,
  loginResponse: {},
  enquiryResponse: null,
  propertiesByCity: [],
  propertiesByCityName: [],
  propertyByName: {},
  isUserSuccess: [],
  pathName: null,
  destinationPathName: null,
  selectedPropertyName: null,
  isWellnessClose: null,
  clickedItemPageID: '',
  packageItem: {},
  getCitiesName: [],
  accomodationView: '',
  chatbotFirstReply: [],
  isPoppedUp: false,
  chatbotReply: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setChatArray: (state, action) => {
      state.chatArray = action.payload;
    },

    setaccomodationBg: (state, action) => {
      state.accomodationBg = action.payload;
    },
    setCitiesByName: (state, action) => {
      state.getCitiesName = action.payload;
    },

    setTenderData: (state, action) => {
      state.tenderData = action.payload;
    },
    setTenderArchiveData: (state, action) => {
      state.tenderArchiveData = action.payload;
    },
    setCareerData: (state, action) => {
      state.careerData = action.payload;
    },
    setCareerArchiveData: (state, action) => {
      state.careerArchiveData = action.payload;
    },

    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    setOrderArchiveData: (state, action) => {
      state.orderArchiveData = action.payload;
    },

    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
    setEventArchiveData: (state, action) => {
      state.eventArchiveData = action.payload;
    },
    setPropertyByName: (state, action) => {
      state.propertyByName = action.payload;
    },
    setClickedItemPageID: (state, action) => {
      state.clickedItemPageID = action.payload;
    },

    setIsPopupOpened: (state, action) => {
      state.isPopupOpened = action.payload;
    },

    setchatbotFirstReply: (state, action) => {
      state.chatbotFirstReply = action.payload;
    },
    setChatbotReply: (state, action) => {
      state.chatbotReply = action.payload;
    },
    setIsWellnessClose: (state, action) => {
      state.isWellnessClose = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    setIsPoppedUp: (state, action) => {
      state.isPoppedUp = action.payload;
    },
    setPropertiesCity: (state, action) => {
      state.propertiesCity = action.payload;
    },
    setDestinationCity: (state, action) => {
      state.destinationCity = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setIsContactModalOpen: (state, action) => {
      state.isContactModalOpen = action.payload;
    },
    setIsUserSuccess: (state, action) => {
      state.errors = action.payload;
    },

    setFooterSelectPageName: (state, action) => {
      state.footerSelectPageName = action.payload;
    },
    setPagesDetails: (state, action) => {
      state.pagesDetails = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setBhopalProperties: (state, action) => {
      state.bhopalProperties = action.payload;
    },

    setEventsFocus: (state, action) => {
      state.eventsFocus = action.payload;
    },
    setSelectedPageId: (state, action) => {
      state.selectedPageId = action.payload;
    },
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setDestinationData: (state, action) => {
      state.destinationData = action.payload;
    },
    setSectionsData: (state, action) => {
      state.sectionsData = action.payload;
    },
    setInnerPageData: (state, action) => {
      state.innerPageData = action.payload;
    },
    setAttractionsData: (state, action) => {
      state.attractionsData = action.payload;
    },
    setInitExperience: (state, action) => {
      state.initExperience = action.payload;
    },

    setLoginResponse: (state, action) => {
      state.loginResponse = action.payload;
    },

    setEnquiryResponse: (state, action: PayloadAction<any>) => {
      state.enquiryResponse = action.payload;
    },
    setSelectedPropertyName: (state, action) => {
      state.selectedPropertyName = action.payload;
    },
    setPathName: (state, action) => {
      state.pathName = action.payload;
    },
    setDestinationPathName: (state, action) => {
      state.destinationPathName = action.payload;
    },

    setPropertiesByCity: (state, action) => {
      state.propertiesByCity = action.payload;
    },
    setPropertiesByDestinationName: (state, action) => {
      state.propertiesByCityName = action.payload;
    },
    setPackageItem: (state, action) => {
      state.packageItem = action.payload;
    },
    setAccomodationView: (state, action) => {
      state.accomodationView = action.payload;
    },

    reset: () => {
      return initialState;
    },
  },
});

export const {
  setPagesDetails,
  setInnerPageData,
  setTenderData,
  setCareerData,
  setEventData,
  setOrderData,
  setTenderArchiveData,
  setCareerArchiveData,
  setEventArchiveData,
  setOrderArchiveData,
  setCities,
  setProperties,
  setBhopalProperties,
  setAnswers,
  setSelectedPageId,
  setIsContactModalOpen,
  setIsPoppedUp,
  setPropertyByName,
  setDestinationPathName,
  setPathName,
  setBannerData,
  setDestinationData,
  setSectionsData,
  setPropertiesCity,
  setDestinationCity,
  setAttractionsData,
  setInitExperience,
  setEventsFocus,
  setFooterSelectPageName,
  setIsLoading,
  setChatArray,
  setchatbotFirstReply,
  setChatbotReply,
  setErrors,
  setIsPopupOpened,
  setIsShow,
  setLoginResponse,
  setEnquiryResponse,
  setPropertiesByCity,
  setPropertiesByDestinationName,
  setSelectedPropertyName,
  setIsWellnessClose,
  reset,
  setIsUserSuccess,
  setClickedItemPageID,
  setPackageItem,
  setCitiesByName,
  setAccomodationView,
  setaccomodationBg,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;

// export const getAllCitiesName = (inputName) => (dispatch) => {
//   const config = {
//     method: 'get',
//     url: APIS.pages.CitiesNameAll(inputName),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   dispatch(setIsLoading(true));

//   axios(config)
//     .then((response) => {
//       dispatch(setCitiesByName(response.data));

//     })
//     .catch((error) => {
//       dispatch(setErrors(error.message));
//       dispatch(setIsLoading(false));
//     });
// };

export const getPageData = (pageName: string) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.pageData(pageName),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then((response: any) => {
      dispatch(setBannerData(response.data.banner_data));
      dispatch(setSectionsData(response.data.section_data));
      dispatch(setIsLoading(false));
    })
    .catch((error: any) => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getTenderData = (PageId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    //url: APIS.pages.pageArchiveData(PageId),
    url: APIS.pages.pageArchiveDataNew(PageId),

    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setTenderData(response.data));

      dispatch(setIsLoading(false));
    })
    .catch((error: any) => {
      // dispatch(setErrors(error.message));

      dispatch(setIsLoading(false));
    });
};
export const getTenderArchiveData = (PageId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.pageArchiveData(PageId),
    //url: APIS.pages.pageArchiveDataNew(PageId),

    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setTenderArchiveData(response.data));

      dispatch(setIsLoading(false));
    })
    .catch(error => {
      //dispatch(setErrors(error.message));

      dispatch(setIsLoading(false));
    });
};
export const getCareerData = (PageId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.pageArchiveDataNew(PageId),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setCareerData(response.data));

      dispatch(setIsLoading(false));
    })
    .catch(error => {
      //dispatch(setErrors(error.message));

      dispatch(setIsLoading(false));
    });
};
export const getCareerDataArchive = (PageId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    //url: APIS.pages.pageArchiveDataNew(PageId),
    url: APIS.pages.pageArchiveData(PageId),

    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setCareerArchiveData(response.data));

      dispatch(setIsLoading(false));
    })
    .catch(error => {
      //dispatch(setErrors(error.message));

      dispatch(setIsLoading(false));
    });
};

export const getAllPages = () => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.allPages,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setPagesDetails(response.data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const loginApi = (data: any) => (dispatch: any) => {
  const config = {
    method: 'post',
    url: `${BASE_URL_2}/signin`,

    // headers:{

    //   "Content-Type": "application/json",

    //   "Access-Control-Allow-Origin": "*",

    // },
    data,
  };

  axios(config)
    .then(response => {
      dispatch(setLoginResponse(response));
    })

    .catch(error => {
      dispatch(setLoginResponse(error.response.data));
    });
};

export const enquiryApi = (data: any) => (dispatch: any) => {
  const config = {
    method: 'post',
    url: APIS.pages.enquiry,
    data,
  };

  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setEnquiryResponse(response.status));

      dispatch(setAnswers({}));
      dispatch(setIsLoading(false));
    })

    .catch(error => {
      dispatch(setAnswers({}));
      dispatch(setIsLoading(false));
    });
};

export const getPageDataGo = (pageId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.page(pageId),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setBannerData(response.data.banners));
      dispatch(setSectionsData(response.data.sections));
      if (response.data.page_title === 'Explore') {
        let experienceSections = response.data.sections.filter(
          (section: any) => section.experience === true,
        );

        let attractions = response.data.sections.filter(
          (item: any, index: number) =>
            item.section_title.includes('Attractions'),
        );

        dispatch(setAttractionsData(attractions));

        dispatch(setInitExperience(experienceSections[0]));
      }
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getAllCities = () => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIs.pages.cities,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      console.log('responseeeeeeeeeeeeeeeeee');
      dispatch(setCities(response.data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      console.log('errorrrrrrrrr');
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getAllProperties = (bhopalProperties: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.properties,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setProperties(response.data));
      // if (bhopalProperties.length === 0) {
      //   const propertiesArr = [];
      //   response.data.forEach(
      //     (property) =>
      //       property.city_id === 49655117 && propertiesArr.push(property)
      //   );
      //   dispatch(setPropertiesCity('Bhopal'));
      //   dispatch(setBhopalProperties(propertiesArr));
      //   dispatch(setDisplayProperties(propertiesArr));
      //   dispatch(setFilteredProperties(propertiesArr));
      // }

      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getPropertiesByCity = (cityId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.getPropertyByCityId(cityId),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setPropertiesByCity(response.data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getPropertiesByCityName = (cityName: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.getPropertyByCityName(cityName),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setBhopalProperties(response.data));

      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getPropertiesByName =
  (cityName: any, propertyName: any) => (dispatch: any) => {
    const config = {
      method: 'get',
      url: APIS.pages.getPropertyByName(cityName, propertyName),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    dispatch(setIsLoading(true));

    axios(config)
      .then(response => {
        dispatch(setPropertyByName(response.data));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        dispatch(setErrors(error.message));
        dispatch(setIsLoading(false));
      });
  };

export const getDestinationData = (cityId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.getDestinationData(cityId),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setDestinationData(response.data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getDestinationDataByPlace = (cityName: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.getDestinationDataByPlace(cityName),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setDestinationData(response.data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

export const getInnerPageContentById = (contentId: any) => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.pages.getInnerPageContentById(contentId),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setSectionsData(response.data.sections));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setErrors(error.message));
      dispatch(setIsLoading(false));
    });
};

let selectedoptions: any = {};
let prev = 'START';
export const getChatbotReply =
  (next: any, db_id: any, chatArray: any) => (dispatch: any) => {
    if (prev == 'DETAILS') {
      prev = 'START';
      selectedoptions = {};
      selectedoptions[prev] = db_id;
      prev = next;
    } else {
      selectedoptions[prev] = db_id;
      prev = next;
    }

    const config = {
      method: 'get',
      url: APIS.chatbot.request(next, db_id),
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    };

    if (next == 'DETAILS') {
      dispatch(setIsContactModalOpen(true));
      dispatch(setAnswers(selectedoptions));
      dispatch(
        setChatArray([
          ...chatArray,
          {message: 'Please enter your details', data: []},
        ]),
      );
    } else {
      axios(config)
        .then(response => {
          dispatch(setChatbotReply(response.data));
          dispatch(setChatArray([...chatArray, response.data]));
          dispatch(setIsLoading(false));
        })
        .catch(error => {
          dispatch(setIsLoading(false));
        });
    }
  };

export const getChatBotFirstReply = () => (dispatch: any) => {
  const config = {
    method: 'get',
    url: APIS.chatbot.chatbotFirstReply,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  dispatch(setIsLoading(true));

  axios(config)
    .then(response => {
      dispatch(setchatbotFirstReply(response.data));
      dispatch(setChatArray([response.data]));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setIsLoading(false));
    });
};
export const setbgForaccomodation = () => (dispatch: any) => {
  dispatch(setaccomodationBg(true));
};
