export const getters = {
  getProjects(state) {
    return state.projects;
  },
  getCompanys(state) {
    return state.companys;
  },
  getPortfolios(state) {
    return state.portfolios;
  },
  getProjectModalData(state) {
    let data = state.portfolios.filter(item=>{
      return item.id === state.projectModalActiveIndex
    })[0];
    console.log(data)
    return data;
  }
};
