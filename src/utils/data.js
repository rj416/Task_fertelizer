export const data = [
    {
      _year: "2022",
      month: "January",
      product: "DAP",
      state: "andhra",
      requirement_in_mt_: "105",
      availability_in_mt_: "50",
      id: 1,
    },
    {
      _year: "2022",
      month: "February",
      product: "MAP",
      state: "Andaman & Nicobar",
      requirement_in_mt_: "150",
      availability_in_mt_: "75",
      id: 2,
    },

    
    {
        _year: "2020",
        month: "February",
        product: "SAP",
        state: "Madhya Pradesh",
        requirement_in_mt_: "250",
        availability_in_mt_: "90",
        id: 15,
      },

      {
        _year: "2020",
        month: "March",
        product: "TAP",
        state: "Andhra",
        requirement_in_mt_: "300",
        availability_in_mt_: "120",
        id: 14,
      },

      {
        _year: "2020",
        month: "April",
        product: "RAP",
        state: "Andhra",
        requirement_in_mt_: "320",
        availability_in_mt_: "155",
        id: 13,
      },

      {
        _year: "2020",
        month: "Dec",
        product: "SAP",
        state: "Assam",
        requirement_in_mt_: "220",
        availability_in_mt_: "55",
        id: 12,
      },

      {
        _year: "2020",
        month: "June",
        product: "TAP",
        state: "Rajasthan",
        requirement_in_mt_: "120",
        availability_in_mt_: "43",
        id: 11,
      },

      {
        _year: "2020",
        month: "May",
        product: "DAP",
        state: "Jharkhand",
        requirement_in_mt_: "120",
        availability_in_mt_: "90",
        id: 10,
      },


      {
        _year: "2020",
        month: "April",
        product: "TAP",
        state: "Uttrakhand",
        requirement_in_mt_: "120",
        availability_in_mt_: "85",
        id: 9,
      },


      {
        _year: "2020",
        month: "July",
        product: "DAP",
        state: "Delhi",
        requirement_in_mt_: "120",
        availability_in_mt_: "90",
        id: 8,
      },


      {
        _year: "2020",
        month: "August",
        product: "MAP",
        state: "Haryana",
        requirement_in_mt_: "120",
        availability_in_mt_: "45",
        id: 7,
      },

      {
        _year: "2020",
        month: "March",
        product: "RAP",
        state: "Karnataka",
        requirement_in_mt_: "223",
        availability_in_mt_: "130",
        id: 6,
      },

      {
        _year: "2020",
        month: "October",
        product: "RAP",
        state: "Bihar",
        requirement_in_mt_: "230",
        availability_in_mt_: "55",
        id: 5,
      },

      {
        _year: "2020",
        month: "November",
        product: "MAP",
        state: "Punjab",
        requirement_in_mt_: "120",
        availability_in_mt_: "55",
        id: 4,
      },

      {
        _year: "2018",
        month: "Feruary",
        product: "SAP",
        state: "BIHAR",
        requirement_in_mt_: "350",
        availability_in_mt_: "110",
        id: 3,
      },


    // Add more data objects as needed
  ];
  
  export function getPieData(data, valueData) {
    const chartData = data.reduce((carry, item) => {
      const { product, [valueData]: req } = item;
  
      if (!(product in carry)) {
        carry[product] = 0;
      }
  
      carry[product] += parseFloat(req);
      return carry;
    }, {});
  
    const finalData = [...Object.entries(chartData)]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map((entry) => ({
        name: entry[0],
        value: entry[1],
      }));
  
    return finalData;
  }
  