import API from '../../API/API';

const store = {
  namespaced: true,
  state: {
    filesUploaded: [],
    fileNotUploaded: [],
    fileSelect:[],
    showFilesUploaded: false,
    headers: [
      { text: 'Nombre', value: 'name' },
      { text: 'Tipo', value: 'type' },
      { text: 'Tamaño', value: 'size' },
    ]
  },
  mutations: {
    UpdateFileList(state, payload) {
      state.fileNotUploaded=[];
      state.filesUploaded.push(payload);
      console.log(state.filesUploaded);
    },
    setFile(state, payload) {
      //  console.log(payload);
      // if (state.fileNotUploaded.length == 0) {
      //   state.fileNotUploaded.push(new FormData());
      // }
      state.fileNotUploaded.push({name: payload.name, type: payload.type, size: payload.size, file: payload});
      // state.fileNotUploaded[0].append('file', payload);
      // console.log(state.fileNotUploaded[0]);
      // console.log(state.fileNotUploaded[0].getAll('file'));
      console.log(state.fileNotUploaded);
    
     }
  },
  actions: {
    handleFileUpload({ commit },event) {
      commit('setFile', event[0]);
    },
    upload({ commit }, data) {
      var file = new FormData();
      data.forEach(element => {
        file.append('file', element.file);
      });
      console.log(file, 'file');
      return API.uploadFile(file)
        .then(response => {
          console.log("UpdateFileList",response);
          commit('UpdateFileList', response.data.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
}

export default store