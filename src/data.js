// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return data.filter(condition);
  
};

export const sortData = (data, sortOrder) => {
  if(sortOrder === "a_z"){
    return data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }else{
    return data.reverse();
  }
};

export const searchInput = (data, value) => {
  console.log("value searchInput: " + value.toLowerCase());
  const buscador = data.filter(element => element.name.toLowerCase().includes(value.toLowerCase()));
  console.log("buscador: " + buscador);
  return buscador;
};

