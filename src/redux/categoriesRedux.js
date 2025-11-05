import initialState from "./initialState";

//selectors
export const getAllCategories = (state) => state.categories;
export const getCategoryById = ({ categories }, categoryId) => categories.find(category => category.id === categoryId);

//actions
const createActionName = actionName => `app/categories/${actionName}`;

//action creators

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;