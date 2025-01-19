import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

const Service = {
  getArtistData: async function () {
    return await axios.get(`${BASE_URL}/employees`);
  },

  getArtistIdData: async function (id) {
    return await axios.get(`${BASE_URL}/employees/${id}`);
  },

  DeleteArtistData: async function (id) {
    console.log(id);

    return await axios.delete(`${BASE_URL}/employees/${id}`);
  },

  EditArtistData: async function (id, data) {
    return await axios.put(`${BASE_URL}/employees/${id}`, data);
  },

  PostArtistData: async function (data) {
    return await axios.post(`${BASE_URL}/employees`, data);
  },
}

export default Service;
