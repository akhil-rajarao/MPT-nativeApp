import Config from 'react-native-config';

// export const BASEURL = () => {
//   console.log(Config.ENVIRONMENT);
//   if (Config.ENVIRONMENT === 'prod') {
//     return 'https://webapi.mpstdc.com';
//   } else return 'https://betawebapi.mpstdc.com';
// };

export const BASEURL: string = 'http://3.108.190.123:7002';

export const BASE_URL_1: string = 'https://webapi.mpstdc.com/nodeservice';

const production_url: string = 'https://webapi.mpstdc.com';
// export const BASE_URL_2 = "http://13.232.4.147:9000"
const dev_url: string = 'https://betawebapi.mpstdc.com';

// export const BASE_URL_2 = import.meta.env.VITE_APP_ENV == "production" ? production_url : dev_url;

//.env -> dev, staging, prdocution
//switch(dev) ->

export const BASE_URL_2 = production_url;
// Config.ENVIRONMENT == 'production' ? production_url : dev_url;

export const PROD_IMAGES_URL =
  'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images';
export const STAGING_IMAGES_URL =
  'https://d2h2ad92feb2ap.cloudfront.net/mp-cms-images';
export const IMAGES_URL =
  Config.ENVIRONMENT == 'production' ? PROD_IMAGES_URL : STAGING_IMAGES_URL;

export default {
  pages: {
    pageData: (pageName: string) => `${BASEURL}/api/getpagedata/${pageName}`,
    pageArchiveDataNew: (pageId: number) =>
      `${BASE_URL_2}/sidebarpage/page/${pageId}`,
    pageArchiveData: (pageId: string) =>
      `${BASE_URL_2}/sidebarpage/page/archive/${pageId}`,

    allPages: `${BASE_URL_2}/pages`,
    page: (id: string) => `${BASE_URL_2}/page/${id}`,
    cities: `${BASE_URL_2}/cities`,
    properties: `${BASE_URL_2}/properties`,
    getPropertyByCityId: (cityId: string) =>
      `${BASE_URL_2}/properties/city/${cityId}`,
    getPropertyByCityName: (city_name: string) =>
      `${BASE_URL_2}/property/city/${city_name}`,

    getPropertyByName: (city_name: string, property_name: string) =>
      `${BASE_URL_2}/property/${city_name}/${property_name}`,

    getDestinationData: (cityId: string) => `${BASE_URL_2}/city/${cityId}`,

    getDestinationDataByPlace: (cityname: string) =>
      `${BASE_URL_2}/city/name/${cityname}`,
    enquiry: `${BASE_URL_2}/enquiry`,
    getInnerPageContentById: (contentId: string) =>
      `${BASE_URL_2}/getinnerpagedata/content/${contentId}`,
  },
  chatbot: {
    chatbotFirstReply: `${BASE_URL_1}/chatbot/chat/START`,
    request: (next: string, db_id: string) =>
      `${BASE_URL_1}/chatbot/chat/${next}?db_id=${db_id}`,
    chatbotService: (param: string, queryParam: string) =>
      `${BASE_URL_1}/chatbot/chat/${param}?db_id=${queryParam}`,
    // request: (id) => `${BASEURL}/chatbot/chat/get_types?0e528375-016d-473d-8be3-e12b53c4b269`,
    // ?db_id=${db_id.split("&").join("^")}`
  },
  getImage: (imageName: string) => `${IMAGES_URL}/${imageName}`,
};
