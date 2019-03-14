const colorsApiRes = {
  tags: [
    {
      label: 'Gray',
      color: '#A2A5A7',
    },
    {
      label: 'Green',
      color: '#677578',
    },
    {
      label: 'Brown',
      color: '#888E96',
    }],
};

const openWeatherApiRes = {
  cod: '200',
  message: 0.0063,
  cnt: 39,
  list: [
    {
      dt: 1552532400,
      main: {
        temp: 71.37,
        temp_min: 70.53,
        temp_max: 71.37,
        pressure: 1013.49,
        sea_level: 1013.49,
        grnd_level: 1013.4,
        humidity: 91,
        temp_kf: 0.47,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 76,
      },
      wind: {
        speed: 14.56,
        deg: 168.5,
      },
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-03-14 03:00:00',
    }],
};

const malabiAPIRes = {
  status: 'accepted',
  image: {
    id: 457836263,
    secret: '13aa573f11394739b3e722128d72ba36af75af05c8494c8ea97fb1ade327fc00',
    original_file_name: 'IMG_1071.JPG.jpeg',
    input_image_url:
      'http://d2f1mfcynop4j.cloudfront.net/999181/20190314/457836263/83e9ac8fd5fb4836976d1670da1e1cfa.jpeg',
    result_image_url:
      'http://d2f1mfcynop4j.cloudfront.net/999181/20190314/457836263/83e9ac8fd5fb4836976d1670da1e1cfa_RES.jpeg',
    result_revision: 0,
  },
};

const clarifaiAPIRes = {
  status: {
    code: 10000,
    description: 'Ok',
  },
  outputs: [
    {
      id: '236b61151cc2443a9d67833130f1af41',
      status: {
        code: 10000,
        description: 'Ok',
      },
      created_at: '2019-03-14T02:06:26.343383558Z',
      model: {
        id: 'aaa03c23b3724a16a56b629203edc62c',
        name: 'general',
        created_at: '2016-03-09T17:11:39.608845Z',
        app_id: 'main',
        output_info: {
          message: 'Show output_info with: GET /models/{model_id}/output_info',
          type: 'concept',
          type_ext: 'concept',
        },
        model_version: {
          id: 'aa7f35c01e0642fda5cf400f543e7c40',
          created_at: '2018-03-06T21:10:24.454834Z',
          status: {
            code: 21100,
            description: 'Model trained successfully',
          },
        },
        display_name: 'General',
      },
      input: {
        id: '232b72e3390048c79e029012a9104f79',
        data: {
          image: {
            url: 'https://www.duluthtrading.com/dw/image/v2/BBNM_PRD/on/demandware.static/-/Sites-dtc-master-catalog/default/dwa16d9b13/images/large/15771_BAH.jpg?sw=331&sh=331&sm=fit',
          },
        },
      },
      data: {
        concepts: [
          {
            id: 'ai_87Z9fCb7',
            name: 'cotton',
            value: 0.9983871,
            app_id: 'main',
          },
          {
            id: 'ai_MdnZwxPx',
            name: 'pants',
            value: 0.9983467,
            app_id: 'main',
          },
          {
            id: 'ai_dngMN46t',
            name: 'fashion',
            value: 0.9978886,
            app_id: 'main',
          },
          {
            id: 'ai_kRSBxV6q',
            name: 'casual',
            value: 0.995989,
            app_id: 'main',
          },
          {
            id: 'ai_86sS08Pw',
            name: 'wear',
            value: 0.9959864,
            app_id: 'main',
          },
          {
            id: 'ai_rxcHpHks',
            name: 'isolated',
            value: 0.995103,
            app_id: 'main',
          },
          {
            id: 'ai_J1wqFZVJ',
            name: 'denim',
            value: 0.9936512,
            app_id: 'main',
          },
          {
            id: 'ai_786Zr311',
            name: 'no person',
            value: 0.9929599,
            app_id: 'main',
          },
          {
            id: 'ai_j6rltf8j',
            name: 'elegant',
            value: 0.9829948,
            app_id: 'main',
          },
          {
            id: 'ai_vbbdL5nG',
            name: 'garment',
            value: 0.97513527,
            app_id: 'main',
          },
          {
            id: 'ai_HwjtXL0h',
            name: 'pocket',
            value: 0.9683544,
            app_id: 'main',
          },
          {
            id: 'ai_pCnxWJZh',
            name: 'contemporary',
            value: 0.9585184,
            app_id: 'main',
          },
          {
            id: 'ai_phDKFgpM',
            name: 'textile',
            value: 0.93363535,
            app_id: 'main',
          },
          {
            id: 'ai_qX2mzVVX',
            name: 'outerwear',
            value: 0.91530174,
            app_id: 'main',
          },
          {
            id: 'ai_wZCn67qV',
            name: 'style',
            value: 0.90675104,
            app_id: 'main',
          },
          {
            id: 'ai_D90mXHTP',
            name: 'cutout',
            value: 0.90366155,
            app_id: 'main',
          },
          {
            id: 'ai_TNJKRtRm',
            name: 'zip up',
            value: 0.89485127,
            app_id: 'main',
          },
          {
            id: 'ai_TbbnCTcG',
            name: 'apparel',
            value: 0.88065445,
            app_id: 'main',
          },
          {
            id: 'ai_RQccV41p',
            name: 'woman',
            value: 0.8520624,
            app_id: 'main',
          },
          {
            id: 'ai_SGSS2Pmg',
            name: 'shop',
            value: 0.8339181,
            app_id: 'main',
          },
        ],
      },
    },
  ],
};
