// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  console.log(data.filter(condition));
  return data.filter(condition);
  
};

export const sortData = (data, sortOrder) => {
  if(sortOrder === "a_z"){
    const a_z = data.sort();
    return a_z;
  } else{
    const z_a = data.sort().reverse();
    return z_a;
  }
};
