export const filteredProducts = (data, appliedFilters) => {
  let tempList = [...data];

  if (appliedFilters.maxNoOfOrder) {
    tempList = tempList.filter(
      (product) => product.numOrder <= appliedFilters.maxNoOfOrder
    );
  }
  if (appliedFilters.minOrderValue) {
      tempList = tempList.filter(
        (product) => product.OrderValue <= appliedFilters.minOrderValue
      );
    }

  if (appliedFilters.minOrderVolume) {
        tempList = tempList.filter(
          (product) => product.OrderVolume <= appliedFilters.minOrderVolume
        );
      }
  return tempList;
};
