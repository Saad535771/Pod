const BasicData = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    col2: "Data 1",
    col3: "Data 1",
    col4: "Data 1",
    col5: "Data 1",
    col6: "Data 1",
    col7: "Data 1",
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600",
    col2: "Data 2",
    col3: "Data 2",
    col4: "Data 2",
    col5: "Data 2",
    col6: "Data 2",
    col7: "Data 2",
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    col2: "Data 3",
    col3: "Data 3",
    col4: "Data 2",
    col5: "Data 3",
    col6: "Data 3",
    col7: "Data 3",
  },
  {
    id: 4,
    imageUrl: "data:image/jpeg;base64,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",
    col2: "Data 4",
    col3: "Data 2",
    col4: "Data 4",
    col5: "Data 4",
    col6: "Data 4",
    col7: "Data 4",
  
  },
  {
    id: 5,
    imageUrl: "data:image/jpeg;base64,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",
    col2: "Data 5",
    col3: "Data 5",
    col4: "Data 5",
    col5: "Data 5",
    col6: "Data 5",
    col7: "Data 5",
  },
  // Add more data as needed
];
export default BasicData;
